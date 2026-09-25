import { redirect } from "next/navigation";
import { ADMIN_PORTAL } from "@/lib/portal-auth";

export default function EmployeeLoginRedirect() {
  redirect(`${ADMIN_PORTAL}/login`);
}
