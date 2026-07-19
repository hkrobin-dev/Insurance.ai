import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  tagline: string;
  price: string;
  priceSuffix: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
};

const PLANS: Plan[] = [
  {
    name: "Monthly",
    tagline: "Ongoing claims or proactive support",
    price: "$99",
    priceSuffix: "/per month",
    features: [
      "Unlimited email responses",
      "AI Letter Generator",
      "Proof of Loss Formatter",
      "Access to Document Export Tools",
      "Basic access to Benji (inbox guidance only)",
    ],
  },
  {
    name: "One-Time Claim",
    tagline: "Urgent, single claim support",
    price: "$349",
    priceSuffix: "/one-time",
    highlighted: true,
    badge: "Save 25%",
    features: [
      "Full access to one claim case +",
      "Unlimited AI email responses for that claim",
      "AI Letter Generator",
      "Proof of Loss PDF Tool",
      "Policy Document Analyzer",
      "Smart Timeline, Receipts, Templates",
      "Full access to Benji for this claim",
    ],
  },
  {
    name: "Yearly",
    tagline: "Long-term claim support or professionals",
    price: "$899",
    priceSuffix: "/per year",
    features: [
      "Everything in Monthly +",
      "Priority Support",
      "Full access to all smart tools",
      "Full Benji integration",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-surface-light py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl font-extrabold text-brand-blue">
          Pricing &amp; Feature Breakdown
        </h2>
        <p className="mt-4 text-gray-500">
          Choose the plan that fits your needs. All plans include essential
          features to get you started, with options to scale as you grow. No
          hidden fees and the flexibility to change anytime.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative rounded-2xl border bg-white p-8 transition-all duration-300 ease-out",
              "hover:-translate-y-3 hover:shadow-2xl hover:border-brand-blue",
              plan.highlighted
                ? "border-2 border-brand-gold shadow-xl md:-translate-y-4 hover:md:-translate-y-7"
                : "border-gray-200 shadow-sm"
            )}
          >
            {plan.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-gold px-4 py-1 text-sm font-semibold text-brand-navy">
                {plan.badge}
              </div>
            )}

            <h3 className="text-xl font-bold text-brand-navy">{plan.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{plan.tagline}</p>

            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-extrabold text-brand-navy">
                {plan.price}
              </span>
              <span className="pb-1 text-gray-500">{plan.priceSuffix}</span>
            </div>

            <ul className="mt-8 flex flex-col gap-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check
                    size={18}
                    className="mt-0.5 shrink-0 text-brand-blue"
                  />
                  <span className="text-sm text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant={plan.highlighted ? "primary" : "outline"}
              className="mt-8 w-full"
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}