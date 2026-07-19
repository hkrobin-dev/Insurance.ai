"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQS: FaqItem[] = [
  {
    question: "What is ClaimMate.ai?",
    answer:
      "ClaimMate is your AI-powered claim assistant. From generating emails and letters to analyzing your insurance policy, it helps you respond strategically and get paid faster.",
  },
  {
    question: "How do I register or start a claim?",
    answer:
      "Click Sign Up in the top navigation, create your account, and choose the plan that fits your situation. Once registered, you can start a new claim from your dashboard and begin uploading claim details right away.",
  },
  {
    question: "Can I upload my insurance policy?",
    answer:
      "Yes. Upload your policy document and our Policy Analyzer will automatically extract key coverages, exclusions, and limitations so you know exactly what you're entitled to.",
  },
  {
    question: "What is Proof of Loss (POL), and how do I manage it?",
    answer:
      "A Proof of Loss is a formal document insurers require to process your claim. ClaimMate's Proof of Loss Formatter auto-fills and formats this document for you, so it meets insurer requirements the first time.",
  },
  {
    question: "What's included in the paid plans?",
    answer:
      "It depends on your plan. Monthly and Yearly plans give ongoing access to our AI tools, while the One-Time Claim plan gives full access to every tool for a single claim. See the Pricing section above for the full breakdown.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section id="faq" className="bg-surface-light py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-4xl font-extrabold text-brand-blue">
          Frequently asked questions
        </h2>

        <div className="mt-14 flex flex-col gap-4">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-2xl bg-white px-8 py-6 shadow-sm"
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="text-lg font-semibold text-brand-navy">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={22}
                    className={cn(
                      "shrink-0 text-brand-blue transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen
                      ? "mt-4 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <p className="overflow-hidden text-gray-500">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}