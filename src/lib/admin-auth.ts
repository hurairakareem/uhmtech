export const ADMIN_PATH = "/uhm-console";
export const ADMIN_COOKIE = "uhm_admin";
const SESSION_DAYS = 7;

function secret() {
  return process.env.ADMIN_SESSION_SECRET ?? "";
}

function expectedUser() {
  return process.env.ADMIN_USERNAME ?? "";
}

function expectedPassword() {
  return process.env.ADMIN_PASSWORD ?? "";
}

function bytesEqual(a: Uint8Array, b: Uint8Array) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a[i] ^ b[i];
  return diff === 0;
}

function textEqual(a: string, b: string) {
  return bytesEqual(new TextEncoder().encode(a), new TextEncoder().encode(b)) && a.length === b.length;
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

export function adminCredentialsConfigured() {
  return Boolean(secret() && expectedUser() && expectedPassword());
}

export function verifyAdminCredentials(username: string, password: string) {
  if (!adminCredentialsConfigured()) return false;
  return textEqual(username, expectedUser()) && textEqual(password, expectedPassword());
}

export async function createAdminToken() {
  const exp = Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000;
  const payload = `${expectedUser()}.${exp}`;
  const sig = await sign(payload);
  return `${payload}.${sig}`;
}

export async function readAdminToken(token: string | undefined) {
  if (!token || !secret() || !expectedUser()) return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [user, expRaw, sig] = parts;
  const payload = `${user}.${expRaw}`;
  const expected = await sign(payload);
  if (!textEqual(sig, expected)) return null;
  const exp = Number(expRaw);
  if (!Number.isFinite(exp) || exp < Date.now()) return null;
  if (!textEqual(user, expectedUser())) return null;
  return { user };
}

export function adminCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_DAYS * 24 * 60 * 60,
  };
}
