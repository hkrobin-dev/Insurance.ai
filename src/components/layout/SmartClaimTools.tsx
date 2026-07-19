import Image from "next/image";
import { Sparkles, PieChart, Briefcase, FileText } from "lucide-react";

const TOOLS = [
  {
    icon: Sparkles,
    iconBg: "bg-violet-500",
    title: "AI Email Response Generator",
    description:
      "Get smart, personalized responses to insurer emails — in your tone, with legal strategy built in.",
  },
  {
    icon: PieChart,
    iconBg: "bg-blue-500",
    title: "Letter Generator",
    description:
      "Auto-generate powerful formal letters to push back on denials, delays, and bad-faith behavior.",
  },
  {
    icon: Briefcase,
    iconBg: "bg-orange-500",
    title: "Policy Analyzer",
    description:
      "Upload your insurance policy and let our AI extract key coverages, exclusions, and limitations.",
  },
  {
    icon: FileText,
    iconBg: "bg-indigo-600",
    title: "Proof of Loss Formatter",
    description:
      "Auto-fill and format your Proof of Loss documents so they meet insurer requirements the first time.",
  },
  {
    icon: FileText,
    iconBg: "bg-indigo-600",
    title: "EUO Toolkit",
    description:
      "Get prepared for Examination Under Oath with practice Q&As, guidance, and red flag warnings." },
  // Figma screenshot was cut off after "Proof of Loss Formatter" —
  // add any remaining tools here once you confirm the full list
];

export function SmartClaimTools() {
  return (
    <section id="features" className="bg-surface-light py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-brand-navy">
            Features
          </span>
          <h2 className="mt-4 text-4xl font-extrabold text-brand-blue">
            Smart Claim Tools
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          {/* Left: tool list */}
          <div className="flex flex-col gap-10">
            {TOOLS.map((tool) => {
              const Icon = tool.icon;
              return (
                <div key={tool.title} className="flex gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white ${tool.iconBg}`}
                  >
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy">
                      {tool.title}
                    </h3>
                    <p className="mt-1 text-gray-500">{tool.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: image */}
          <div className="relative">
            <Image
              src="/images/features-photo.jpg"
              alt="ClaimMate policy analysis in action"
              width={700}
              height={800}
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}