import Image from "next/image";
import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Pura Vida Daily — Login",
};

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-12">
      {/* Background photo — Hacienda Alsacia coffee estate */}
      <Image
        src="/images/coffee/cafe-britt.png"
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Warm roasted-brown overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(44,24,16,0.72) 0%, rgba(44,24,16,0.6) 45%, rgba(44,24,16,0.82) 100%)",
        }}
      />

      {/* Subtle kraft-paper / burlap weave texture */}
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(196,168,130,0.5) 0px, rgba(196,168,130,0.5) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(-45deg, rgba(139,94,60,0.5) 0px, rgba(139,94,60,0.5) 1px, transparent 1px, transparent 6px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl flex flex-col md:flex-row items-center md:items-start justify-center">
        {/* Cuzuco — points right, toward the password field */}
        <div className="flex-shrink-0 md:-mr-6 z-20 drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]">
          <Image
            src="/images/mascot/cuzuco-full.png"
            alt="Cuzuco the armadillo, pointing toward the password field"
            width={320}
            height={320}
            priority
            className="w-56 sm:w-64 md:w-72 h-auto object-contain"
          />
        </div>

        {/* Card */}
        <div
          className="paper-texture rounded-lg shadow-2xl px-8 py-9 sm:px-10 sm:py-10 w-full max-w-md mt-2 md:mt-10"
          style={{ border: "3px double var(--gold-sun)" }}
        >
          <h1
            className="font-headline text-4xl sm:text-5xl font-black leading-none tracking-tight mb-2"
            style={{ color: "var(--ink-dark)" }}
          >
            Pura Vida Daily
          </h1>
          <p
            className="font-editorial italic text-base sm:text-lg mb-7"
            style={{ color: "var(--brown-coffee)" }}
          >
            Enter the password to step inside ☕
          </p>

          <LoginForm />
        </div>
      </div>
    </div>
  );
}
