import { NextResponse } from "next/server";
import { requireApiSession } from "@/lib/portal-api";
import { createEmployee, listEmployees } from "@/lib/portal-db";

export const runtime = "nodejs";

export async function GET() {
  const { session, error } = await requireApiSession();
  if (error || !session) return error;
  const employees = await listEmployees();
  if (session.role === "employee") {
    return NextResponse.json({ ok: true, employees: employees.filter((item) => item.id === session.employeeId) });
  }
  return NextResponse.json({ ok: true, employees });
}

export async function POST(request: Request) {
  const { error } = await requireApiSession("admin");
  if (error) return error;
  const body = (await request.json().catch(() => null)) as Record<string, string> | null;
  if (!body?.name || !body.email || !body.department) {
    return NextResponse.json({ ok: false, message: "Name, email, and department are required." }, { status: 422 });
  }
  const employee = await createEmployee({
    name: body.name,
    email: body.email,
    phone: body.phone ?? "",
    department: body.department,
    title: body.title ?? "",
    status: body.status === "inactive" ? "inactive" : "active",
    joinDate: body.joinDate || new Date().toISOString().slice(0, 10),
    salary: Number(body.salary || 0),
  });
  return NextResponse.json({ ok: true, employee });
}
