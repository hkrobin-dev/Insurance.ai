"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
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
      // TODO: Connect API
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">

        {/* Left */}
        <div className="flex items-center justify-center px-6 py-12 lg:px-12">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

            <h1 className="text-3xl font-bold text-brand-navy">
              Create Account
            </h1>

            <p className="mt-2 text-gray-500">
              Create your ClaimMate.ai account
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-4"
            >
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="w-1/2 rounded-xl border border-gray-200 px-4 py-3 transition focus:border-brand-blue focus:outline-none"
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="w-1/2 rounded-xl border border-gray-200 px-4 py-3 transition focus:border-brand-blue focus:outline-none"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="rounded-xl border border-gray-200 px-4 py-3 transition focus:border-brand-blue focus:outline-none"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                minLength={8}
                className="rounded-xl border border-gray-200 px-4 py-3 transition focus:border-brand-blue focus:outline-none"
              />

              <Button
                type="submit"
                size="lg"
                disabled={status === "submitting"}
                className="mt-2 h-12 rounded-xl"
              >
                {status === "submitting"
                  ? "Creating account..."
                  : "Sign Up"}
              </Button>

              {status === "error" && (
                <p className="text-sm text-red-600">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-brand-blue hover:underline"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="hidden items-center justify-center p-8 lg:flex">
          <div className="relative h-[650px] w-full max-w-[470px] overflow-hidden rounded-[32px] shadow-2xl">

            <Image
              src="/images/hero-model.png"
              alt="ClaimMate"
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-10 left-8 right-8 text-white animate-[fadeInUp_.8s_ease]">
              <h2 className="text-3xl font-bold">
                Join ClaimMate.ai
              </h2>

              <p className="mt-3 text-white/90 leading-relaxed">
                Smart AI tools that help you manage insurance claims
                faster, easier, and with confidence.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}