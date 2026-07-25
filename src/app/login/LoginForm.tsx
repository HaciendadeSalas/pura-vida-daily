"use client";

import { useActionState } from "react";
import { login } from "./actions";

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, undefined);

  return (
    <form action={formAction} className="w-full max-w-sm">
      <label
        htmlFor="password"
        className="font-body text-xs uppercase tracking-widest mb-2 block"
        style={{ color: "var(--ink-light)" }}
      >
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        required
        autoFocus
        placeholder="••••••••"
        className="w-full px-4 py-3 font-body text-lg rounded-sm outline-none transition-shadow"
        style={{
          background: "var(--bg-cream)",
          color: "var(--ink-dark)",
          border: "2px solid var(--border-aged)",
        }}
      />

      {state?.error && (
        <p
          className="font-body text-sm mt-3"
          style={{ color: "var(--red-volcano)" }}
          role="alert"
        >
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="font-headline text-xl font-bold tracking-wide mt-5 w-full py-3 rounded-sm transition-opacity disabled:opacity-60 cursor-pointer"
        style={{
          background: "var(--gold-sun)",
          color: "var(--ink-dark)",
        }}
      >
        {pending ? "Brewing…" : "Enter"}
      </button>
    </form>
  );
}
