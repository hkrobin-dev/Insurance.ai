"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      // TODO Phase 8: POST to /api/auth/forgot-password
      // Backend should always respond success (even if email doesn't exist)
      // to avoid leaking which emails are registered.
      await new Promise((r) => setTimeout(r, 600));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="grid min-h-screen bg-surface-light grid-cols-1 md:grid-cols-2">
      {/* Left: image panel */}
      <div className="hidden items-center justify-center p-8 lg:flex">
                <div className="group relative h-[650px] w-full max-w-[470px] overflow-hidden rounded-[32px] shadow-2xl">
      
                  <Image
                    src="/images/hero-model.png"
                    alt="ClaimMate"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
      
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent" />
      
                  <div className="absolute bottom-10 left-8 right-8 text-white transition-all duration-700 group-hover:-translate-y-1">
                    <h2 className="text-3xl font-bold">
                      Welcome Back
                    </h2>
      
                    <p className="mt-3 leading-relaxed text-white/90">
                      Continue managing your insurance claims with the power of AI.
                    </p>
                  </div>
                </div>
              </div>

      {/* Right: form */}
      <div className="flex items-center justify-center bg-surface-light px-6 py-24">
        <div className="w-full max-w-md">
          {status !== "sent" ? (
            <>
              <h1 className="text-3xl font-extrabold text-brand-navy">
                Forgot Password
              </h1>
              <p className="mt-2 text-gray-500">
                Enter the email linked to your account and we&apos;ll send you
                a link to reset your password.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-xl border border-gray-200 px-5 py-3 outline-none focus:border-brand-blue"
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "submitting"}
                  className="mt-2"
                >
                  {status === "submitting" ? "Sending..." : "Send Reset Link"}
                </Button>

                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </>
          ) : (
            <div>
              <h1 className="text-3xl font-extrabold text-brand-navy">
                Check your email
              </h1>
              <p className="mt-4 text-gray-600">
                If an account exists for <strong>{email}</strong>, we&apos;ve
                sent a link to reset your password. It should arrive within a
                few minutes.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Didn&apos;t get it? Check your spam folder, or{" "}
                <button
                  onClick={() => setStatus("idle")}
                  className="font-semibold text-brand-blue hover:underline"
                >
                  try a different email
                </button>
                .
              </p>
            </div>
          )}

          <p className="mt-6 text-center text-sm text-gray-500">
            Remembered your password?{" "}
            <Link href="/login" className="font-semibold text-brand-blue hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}