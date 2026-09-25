import { NextResponse } from "next/server";
import { requireApiSession } from "@/lib/portal-api";
import { addPayroll, listPayroll } from "@/lib/portal-db";

export const runtime = "nodejs";

export async function GET() {
  const { session, error } = await requireApiSession();
  if (error || !session) return error;
  const rows = await listPayroll(session.role === "employee" ? session.employeeId : undefined);
  return NextResponse.json({ ok: true, payroll: rows });
}

export async function POST(request: Request) {
  const { error } = await requireApiSession("admin");
  if (error) return error;
  const body = (await request.json().catch(() => null)) as Record<string, string> | null;
  if (!body?.employeeId || !body.month) {
    return NextResponse.json({ ok: false, message: "Employee and month are required." }, { status: 422 });
  }
  const row = await addPayroll({
    employeeId: body.employeeId,
    month: body.month,
    basic: Number(body.basic || 0),
    allowances: Number(body.allowances || 0),
    deductions: Number(body.deductions || 0),
    status: body.status === "paid" ? "paid" : "draft",
  });
  return NextResponse.json({ ok: true, payroll: row });
}
