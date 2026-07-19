"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Testimonial = {
  name: string;
  quote: string;
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rachel M.",
    quote:
      "I was drowning in paperwork and adjuster emails. ClaimMate not only helped me respond — they helped me win. I got paid faster than expected.",
    avatar: "/images/testimonial-rachel.jpg",
  },
  {
    name: "Alina S.",
    quote:
      "ClaimMate is like having a personal assistant for your insurance nightmare. Clear, smart, and so easy to use.",
    avatar: "/images/testimonial-rachel.jpg",
  },
  {
    name: "James D.",
    quote:
      "The EUO toolkit gave me confidence going into the exam. I had answers ready, and I could tell the adjuster wasn't expecting that.",
    avatar: "/images/testimonial-rachel.jpg",
  },
  {
    name: "Marcus T.",
    quote:
      "After my house fire, I had no idea where to start. ClaimMate walked me through every letter and every deadline.",
    avatar: "/images/testimonial-rachel.jpg",
  },
  {
    name: "Priya K.",
    quote:
      "The policy analyzer caught an exclusion my adjuster never mentioned. That alone saved me thousands.",
    avatar: "/images/testimonial-rachel.jpg",
  },
  {
    name: "Diego R.",
    quote:
      "Fast, clear, and it actually felt like someone had my back for once.",
    avatar: "/images/testimonial-rachel.jpg",
  },
];

const PER_SLIDE = 3;

export function Testimonials() {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(TESTIMONIALS.length / PER_SLIDE);
  const canGoPrev = page > 0;
  const canGoNext = page < totalPages - 1;

  const visible = TESTIMONIALS.slice(
    page * PER_SLIDE,
    page * PER_SLIDE + PER_SLIDE
  );

  return (
    <section className="bg-surface-light py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-brand-navy">
          Testimonial
        </span>
        <h2 className="mt-4 text-4xl font-extrabold text-brand-blue">
          What Our Clients Say
        </h2>
      </div>

      <div className="relative mx-auto mt-16 max-w-6xl px-6">
        {/* Prev arrow */}
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={!canGoPrev}
          aria-label="Previous testimonials"
          className={cn(
            "absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition",
            canGoPrev
              ? "text-brand-navy hover:bg-gray-50"
              : "cursor-not-allowed text-gray-300"
          )}
        >
          <ChevronLeft size={20} />
        </button>

        <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-8">
          {visible.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl bg-gray-100 px-8 pb-8 pt-16 text-center"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full border-4 border-white object-cover shadow-md"
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-navy">
                {t.name}
              </h3>
              <p className="mt-4 text-gray-600">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* Next arrow */}
        <button
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={!canGoNext}
          aria-label="Next testimonials"
          className={cn(
            "absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition",
            canGoNext
              ? "text-brand-navy hover:bg-gray-50"
              : "cursor-not-allowed text-gray-300"
          )}
        >
          <ChevronRight size={20} />
        </button>

        {/* Page dots */}
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "h-2 w-2 rounded-full transition",
                  i === page ? "bg-brand-blue w-6" : "bg-gray-300"
                )}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}