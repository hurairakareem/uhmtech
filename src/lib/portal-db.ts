import { randomBytes, randomUUID, scryptSync, timingSafeEqual } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { PortalRole } from "@/lib/portal-auth";

export type Employee = {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  title: string;
  status: "active" | "inactive";
  joinDate: string;
  salary: number;
};

export type PortalUser = {
  id: string;
  username: string;
  passwordHash: string;
  salt: string;
  role: PortalRole;
  employeeId: string;
};

export type AttendanceRecord = {
  id: string;
  employeeId: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: "present" | "late" | "leave" | "absent";
};

export type PayrollRecord = {
  id: string;
  employeeId: string;
  month: string;
  basic: number;
  allowances: number;
  deductions: number;
  net: number;
  status: "draft" | "paid";
};

type PortalDb = {
  users: PortalUser[];
  employees: Employee[];
  attendance: AttendanceRecord[];
  payroll: PayrollRecord[];
};

const dataDir = path.join(process.cwd(), "data");
const dataFile = path.join(dataDir, "portal.json");

function hashPassword(password: string, salt = randomBytes(16).toString("hex")) {
  const passwordHash = scryptSync(password, salt, 32).toString("hex");
  return { salt, passwordHash };
}

function verifyPassword(password: string, salt: string, passwordHash: string) {
  const next = scryptSync(password, salt, 32);
  const prev = Buffer.from(passwordHash, "hex");
  if (next.length !== prev.length) return false;
  return timingSafeEqual(next, prev);
}

function emptyDb(): PortalDb {
  return { users: [], employees: [], attendance: [], payroll: [] };
}

async function readDb(): Promise<PortalDb> {
  try {
    const raw = await readFile(dataFile, "utf8");
    const parsed = JSON.parse(raw) as PortalDb;
    return {
      users: parsed.users ?? [],
      employees: parsed.employees ?? [],
      attendance: parsed.attendance ?? [],
      payroll: parsed.payroll ?? [],
    };
  } catch {
    return emptyDb();
  }
}

async function writeDb(db: PortalDb) {
  await mkdir(dataDir, { recursive: true });
  await writeFile(dataFile, JSON.stringify(db, null, 2), "utf8");
}

function seedEmployees(): Employee[] {
  return [
    {
      id: "emp-aisha",
      name: "Aisha Khan",
      email: "aisha@uhmtech.com",
      phone: "03080007174",
      department: "Engineering",
      title: "Software Engineer",
      status: "active",
      joinDate: "2024-03-11",
      salary: 180000,
    },
    {
      id: "emp-bilal",
      name: "Bilal Ahmed",
      email: "bilal@uhmtech.com",
      phone: "03080007175",
      department: "Sales",
      title: "Account Executive",
      status: "active",
      joinDate: "2023-11-02",
      salary: 150000,
    },
    {
      id: "emp-sara",
      name: "Sara Malik",
      email: "sara@uhmtech.com",
      phone: "03080007176",
      department: "Operations",
      title: "Operations Lead",
      status: "active",
      joinDate: "2022-07-18",
      salary: 210000,
    },
  ];
}

function seedAttendance(employees: Employee[]): AttendanceRecord[] {
  const today = new Date();
  const records: AttendanceRecord[] = [];
  for (let i = 0; i < 5; i += 1) {
    const day = new Date(today);
    day.setDate(today.getDate() - i);
    if (day.getDay() === 0 || day.getDay() === 6) continue;
    const date = day.toISOString().slice(0, 10);
    employees.forEach((employee, index) => {
      records.push({
        id: randomUUID(),
        employeeId: employee.id,
        date,
        checkIn: index === 1 && i === 0 ? "09:42" : "09:05",
        checkOut: "18:00",
        status: index === 1 && i === 0 ? "late" : "present",
      });
    });
  }
  return records;
}

function seedPayroll(employees: Employee[]): PayrollRecord[] {
  const month = new Date().toISOString().slice(0, 7);
  return employees.map((employee) => ({
    id: randomUUID(),
    employeeId: employee.id,
    month,
    basic: employee.salary,
    allowances: Math.round(employee.salary * 0.1),
    deductions: Math.round(employee.salary * 0.05),
    net: Math.round(employee.salary * 1.05),
    status: "paid" as const,
  }));
}

export async function ensurePortalDb() {
  const db = await readDb();
  const adminUser = (process.env.ADMIN_USERNAME ?? "uhmadmin").toLowerCase();
  const adminPass = process.env.ADMIN_PASSWORD ?? "";

  if (adminPass) {
    const adminHash = hashPassword(adminPass);
    const admin = db.users.find((user) => user.username === adminUser && user.role === "admin");
    if (admin) {
      admin.salt = adminHash.salt;
      admin.passwordHash = adminHash.passwordHash;
    } else {
      db.users.push({
        id: randomUUID(),
        username: adminUser,
        role: "admin",
        employeeId: "",
        ...adminHash,
      });
    }
  }

  if (!db.employees.length) {
    db.employees = seedEmployees();
    db.attendance = seedAttendance(db.employees);
    db.payroll = seedPayroll(db.employees);
  }

  const employeePass = process.env.EMPLOYEE_DEMO_PASSWORD ?? "";
  if (employeePass && !db.users.some((user) => user.username === "aisha")) {
    const emp = hashPassword(employeePass);
    db.users.push({
      id: randomUUID(),
      username: "aisha",
      role: "employee",
      employeeId: "emp-aisha",
      ...emp,
    });
  }

  try {
    await writeDb(db);
  } catch (error) {
    console.error("Portal database write failed", error);
  }
  return db;
}

export async function authenticatePortalUser(username: string, password: string) {
  const db = await ensurePortalDb();
  const user = db.users.find((item) => item.username.toLowerCase() === username.trim().toLowerCase());
  if (!user || !verifyPassword(password, user.salt, user.passwordHash)) return null;
  return { username: user.username, role: user.role, employeeId: user.employeeId };
}

export async function listEmployees() {
  const db = await ensurePortalDb();
  return db.employees;
}

export async function getEmployee(id: string) {
  const db = await ensurePortalDb();
  return db.employees.find((item) => item.id === id) ?? null;
}

export async function createEmployee(input: Omit<Employee, "id">) {
  const db = await ensurePortalDb();
  const employee: Employee = { ...input, id: randomUUID() };
  db.employees.unshift(employee);
  await writeDb(db);
  return employee;
}

export async function updateEmployee(id: string, patch: Partial<Omit<Employee, "id">>) {
  const db = await ensurePortalDb();
  const employee = db.employees.find((item) => item.id === id);
  if (!employee) return null;
  Object.assign(employee, patch);
  await writeDb(db);
  return employee;
}

export async function listAttendance(employeeId?: string) {
  const db = await ensurePortalDb();
  const rows = employeeId ? db.attendance.filter((item) => item.employeeId === employeeId) : db.attendance;
  return rows.sort((a, b) => b.date.localeCompare(a.date));
}

export async function addAttendance(input: Omit<AttendanceRecord, "id">) {
  const db = await ensurePortalDb();
  const row: AttendanceRecord = { ...input, id: randomUUID() };
  db.attendance.unshift(row);
  await writeDb(db);
  return row;
}

export async function listPayroll(employeeId?: string) {
  const db = await ensurePortalDb();
  const rows = employeeId ? db.payroll.filter((item) => item.employeeId === employeeId) : db.payroll;
  return rows.sort((a, b) => b.month.localeCompare(a.month));
}

export async function addPayroll(input: Omit<PayrollRecord, "id" | "net">) {
  const db = await ensurePortalDb();
  const net = input.basic + input.allowances - input.deductions;
  const row: PayrollRecord = { ...input, id: randomUUID(), net };
  db.payroll.unshift(row);
  await writeDb(db);
  return row;
}

export function employeeName(employees: Employee[], id: string) {
  return employees.find((item) => item.id === id)?.name ?? "Unknown";
}

export async function portalStats() {
  const db = await ensurePortalDb();
  const active = db.employees.filter((item) => item.status === "active").length;
  const presentToday = db.attendance.filter((item) => item.date === new Date().toISOString().slice(0, 10) && item.status !== "absent").length;
  const payrollThisMonth = db.payroll
    .filter((item) => item.month === new Date().toISOString().slice(0, 7))
    .reduce((sum, item) => sum + item.net, 0);
  return {
    employees: db.employees.length,
    active,
    attendanceRows: db.attendance.length,
    presentToday,
    payrollRows: db.payroll.length,
    payrollThisMonth,
  };
}
