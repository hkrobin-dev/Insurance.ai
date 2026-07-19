import { UploadCloud, TrendingUp, ShieldCheck } from "lucide-react";

const STEPS = [
  {
    icon: UploadCloud,
    iconBg: "bg-gradient-to-br from-violet-500 to-indigo-600",
    title: "Upload Claim Info",
    description:
      "Quickly upload your claim details, documents, and adjuster emails — we'll handle the rest.",
    align: "right", // text sits to the right of the icon
  },
  {
    icon: TrendingUp,
    iconBg: "bg-gradient-to-br from-orange-400 to-amber-500",
    title: "Get Instant Responses",
    description:
      "ClaimMate reviews your case and instantly drafts emails, letters, or replies based on your policy and claim status.",
    align: "left", // text sits to the left of the icon
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-gradient-to-br from-pink-500 to-rose-500",
    title: "Push Back with Confidence",
    description:
      "Prepare for EUOs, reject lowball offers, and stay one step ahead — with expert guidance and AI-generated responses.",
    align: "right",
  },
   {
    icon: ShieldCheck,
    iconBg: "bg-gradient-to-br from-blue-400 to-blue-500",
    title: "Get Paid",
    description:
      "Maximize your payout and reduce stress with strategic tools designed to help you win .",
    align: "left", // text sits to the left of the icon
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface-light py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl font-extrabold text-brand-blue">
          How It Works
        </h2>
        <p className="mt-3 text-gray-500">How ClaimMate Helps You</p>
      </div>

      <div className="relative mx-auto mt-20 max-w-3xl px-6">
        {/* vertical dashed connector line */}
        <div
          aria-hidden
          className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 border-l-2 border-dashed border-gray-300"
        />

        <div className="flex flex-col gap-20">
          {STEPS.map((step) => {
            const Icon = step.icon;
            const textOnRight = step.align === "right";

            return (
              <div
                key={step.title}
                className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto_1fr]"
              >
                {/* left column */}
                <div
                  className={
                    textOnRight
                      ? "hidden md:block"
                      : "text-center md:text-right"
                  }
                >
                  {!textOnRight && (
                    <>
                      <h3 className="text-xl font-bold text-brand-navy">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-gray-500">{step.description}</p>
                    </>
                  )}
                </div>

                {/* center icon */}
                <div className="z-10 flex justify-center">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg ${step.iconBg}`}
                  >
                    <Icon size={28} />
                  </div>
                </div>

                {/* right column */}
                <div
                  className={
                    textOnRight ? "text-center md:text-left" : "hidden md:block"
                  }
                >
                  {textOnRight && (
                    <>
                      <h3 className="text-xl font-bold text-brand-navy">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-gray-500">{step.description}</p>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}