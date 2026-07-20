"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      // TODO: Connect Login API
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">

        {/* Left Image */}
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

        {/* Right Form */}
        <div className="flex items-center justify-center px-6 py-12 lg:px-12">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl transition-all duration-300 hover:shadow-3xl">

            <h1 className="text-3xl font-bold text-brand-navy">
              Log In
            </h1>

            <p className="mt-2 text-gray-500">
              Welcome back to ClaimMate.ai
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-4"
            >
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="rounded-xl border border-gray-200 px-4 py-3 transition-all duration-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="rounded-xl border border-gray-200 px-4 py-3 transition-all duration-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
              />

              <div className="flex justify-end">
                <Link
                  href="/forgot-password"
                  className="text-sm text-brand-blue transition hover:text-blue-700 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={status === "submitting"}
                className="mt-2 h-12 rounded-xl transition-all duration-300 hover:scale-[1.02]"
              >
                {status === "submitting"
                  ? "Logging in..."
                  : "Log In"}
              </Button>

              {status === "error" && (
                <p className="text-sm text-red-600">
                  Invalid email or password.
                </p>
              )}
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-brand-blue transition hover:text-blue-700 hover:underline"
              >
                Sign Up
              </Link>
            </p>

          </div>
        </div>

      </div>
    </main>
  );
}