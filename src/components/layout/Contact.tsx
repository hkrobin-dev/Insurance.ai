"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      // TODO: wire to real API route in Phase 8 (e.g. POST /api/contact)
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", country: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-surface-light py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-brand-blue">
            Contact Us
          </h2>
          <p className="mt-3 text-gray-500">
            Contact us for expert assistance – we&apos;re here to help!
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          {/* Left: copy */}
          <div>
            <h3 className="text-3xl font-extrabold text-brand-navy">
              Absolutely FREE
            </h3>
            <p className="mt-6 text-gray-600">
              Have a question or need support?
            </p>
            <p className="mt-4 text-gray-600">
              Our team is here to help you understand ClaimMate, explore our
              features, or get assistance with your account.
            </p>
            <p className="mt-4 text-gray-600">
              Fill out the form and we&apos;ll be in touch shortly.
            </p>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="relative flex flex-col gap-4 rounded-2xl bg-white/50 p-2"
          >
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              required
              className="rounded-xl border border-transparent bg-white px-5 py-4 text-gray-700 shadow-sm outline-none focus:border-brand-blue"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              required
              className="rounded-xl border border-transparent bg-white px-5 py-4 text-gray-700 shadow-sm outline-none focus:border-brand-blue"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
              required
              className="rounded-xl border border-transparent bg-white px-5 py-4 text-gray-700 shadow-sm outline-none focus:border-brand-blue"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={form.country}
              onChange={handleChange}
              required
              className="rounded-xl border border-transparent bg-white px-5 py-4 text-gray-700 shadow-sm outline-none focus:border-brand-blue"
            />
            <textarea
              name="message"
              placeholder="Describe your knowledge of online marketing"
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
              className="resize-none rounded-xl border border-transparent bg-white px-5 py-4 text-gray-700 shadow-sm outline-none focus:border-brand-blue"
            />

            <Button
              type="submit"
              size="lg"
              disabled={status === "submitting"}
              className="mt-2 self-end !rounded-xl !bg-brand-blue hover:!bg-blue-600"
            >
              {status === "submitting" ? "Sending..." : "Submit"}
            </Button>

            {status === "success" && (
              <p className="text-sm text-green-600">
                Thanks — we&apos;ll be in touch shortly!
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}