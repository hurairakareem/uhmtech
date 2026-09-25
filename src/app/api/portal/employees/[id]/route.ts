import { NextResponse } from "next/server";
import { requireApiSession } from "@/lib/portal-api";
import { getEmployee, updateEmployee } from "@/lib/portal-db";

export const runtime = "nodejs";

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { session, error } = await requireApiSession();
  if (error || !session) return error;
  const { id } = await params;
  if (session.role === "employee" && session.employeeId !== id) {
    return NextResponse.json({ ok: false, message: "Forbidden." }, { status: 403 });
  }
  const employee = await getEmployee(id);
  if (!employee) return NextResponse.json({ ok: false, message: "Not found." }, { status: 404 });
  return NextResponse.json({ ok: true, employee });
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { error } = await requireApiSession("admin");
  if (error) return error;
  const { id } = await params;
  const body = (await request.json().catch(() => null)) as Record<string, string> | null;
  if (!body) return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  const employee = await updateEmployee(id, {
    ...(body.name ? { name: body.name } : {}),
    ...(body.email ? { email: body.email } : {}),
    ...(body.phone !== undefined ? { phone: body.phone } : {}),
    ...(body.department ? { department: body.department } : {}),
    ...(body.title !== undefined ? { title: body.title } : {}),
    ...(body.status === "active" || body.status === "inactive" ? { status: body.status } : {}),
    ...(body.joinDate ? { joinDate: body.joinDate } : {}),
    ...(body.salary ? { salary: Number(body.salary) } : {}),
  });
  if (!employee) return NextResponse.json({ ok: false, message: "Not found." }, { status: 404 });
  return NextResponse.json({ ok: true, employee });
}
