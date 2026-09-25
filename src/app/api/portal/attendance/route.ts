import { NextResponse } from "next/server";
import { requireApiSession } from "@/lib/portal-api";
import { addAttendance, listAttendance } from "@/lib/portal-db";

export const runtime = "nodejs";

export async function GET() {
  const { session, error } = await requireApiSession();
  if (error || !session) return error;
  const rows = await listAttendance(session.role === "employee" ? session.employeeId : undefined);
  return NextResponse.json({ ok: true, attendance: rows });
}

export async function POST(request: Request) {
  const { error } = await requireApiSession("admin");
  if (error) return error;
  const body = (await request.json().catch(() => null)) as Record<string, string> | null;
  if (!body?.employeeId || !body.date) {
    return NextResponse.json({ ok: false, message: "Employee and date are required." }, { status: 422 });
  }
  const row = await addAttendance({
    employeeId: body.employeeId,
    date: body.date,
    checkIn: body.checkIn ?? "",
    checkOut: body.checkOut ?? "",
    status: (body.status as "present" | "late" | "leave" | "absent") || "present",
  });
  return NextResponse.json({ ok: true, attendance: row });
}
