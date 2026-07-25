"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE_NAME, AUTH_COOKIE_MAX_AGE, checkPassword, signAuthToken } from "@/lib/auth";

export type LoginState = { error: string } | undefined;

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const password = formData.get("password");

  if (typeof password !== "string" || password.length === 0 || !checkPassword(password)) {
    return { error: "That's not quite it — give it another try." };
  }

  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE_NAME, signAuthToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: AUTH_COOKIE_MAX_AGE,
    path: "/",
  });

  redirect("/");
}
