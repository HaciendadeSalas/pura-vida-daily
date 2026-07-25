import { createHmac, timingSafeEqual } from "crypto";

export const AUTH_COOKIE_NAME = "pv_auth";
export const AUTH_COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function getSecret(): string {
  const secret = process.env.SITE_PASSWORD;
  if (!secret) {
    throw new Error("SITE_PASSWORD environment variable is not set");
  }
  return secret;
}

// Derives a stable token from SITE_PASSWORD so the cookie never carries the
// plaintext password, but still can't be forged without knowing it.
export function signAuthToken(): string {
  return createHmac("sha256", getSecret()).update(AUTH_COOKIE_NAME).digest("hex");
}

export function verifyAuthToken(token: string | undefined): boolean {
  if (!token) return false;
  const expected = signAuthToken();
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function checkPassword(candidate: string): boolean {
  const secret = getSecret();
  const a = Buffer.from(candidate);
  const b = Buffer.from(secret);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
