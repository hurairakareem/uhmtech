export const ADMIN_PORTAL = "/admin-portal";
export const EMPLOYEE_PORTAL = "/employee-portal";
export const PORTAL_COOKIE = "uhm_portal";
export type PortalRole = "admin" | "employee";

export type PortalSession = {
  username: string;
  role: PortalRole;
  employeeId: string;
};

const SESSION_DAYS = 7;

function secret() {
  return process.env.ADMIN_SESSION_SECRET ?? "";
}

function bytesEqual(a: Uint8Array, b: Uint8Array) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a[i] ^ b[i];
  return diff === 0;
}

function textEqual(a: string, b: string) {
  return a.length === b.length && bytesEqual(new TextEncoder().encode(a), new TextEncoder().encode(b));
}

function toBase64Url(buffer: ArrayBuffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

async function sign(payload: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  return toBase64Url(signature);
}

export function portalSecretConfigured() {
  return Boolean(secret());
}

export async function createPortalToken(session: PortalSession) {
  const exp = Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000;
  const employeeId = session.employeeId || "_";
  const payload = `${session.username}.${session.role}.${employeeId}.${exp}`;
  const sig = await sign(payload);
  return `${payload}.${sig}`;
}

export async function readPortalToken(token: string | undefined): Promise<PortalSession | null> {
  if (!token || !secret()) return null;
  const parts = token.split(".");
  if (parts.length !== 5) return null;
  const [username, role, employeeId, expRaw, sig] = parts;
  if (role !== "admin" && role !== "employee") return null;
  const payload = `${username}.${role}.${employeeId}.${expRaw}`;
  const expected = await sign(payload);
  if (!textEqual(sig, expected)) return null;
  const exp = Number(expRaw);
  if (!Number.isFinite(exp) || exp < Date.now()) return null;
  return { username, role, employeeId: employeeId === "_" ? "" : employeeId };
}

export function portalCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_DAYS * 24 * 60 * 60,
  };
}

export function isPortalPath(pathname: string) {
  return (
    pathname.startsWith(ADMIN_PORTAL) ||
    pathname.startsWith(EMPLOYEE_PORTAL) ||
    pathname.startsWith("/uhm-console")
  );
}

export function isPortalLoginPath(pathname: string) {
  return pathname === `${ADMIN_PORTAL}/login` || pathname === `${EMPLOYEE_PORTAL}/login` || pathname === "/uhm-console/login";
}
