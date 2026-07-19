import { Contact } from "@/components/layout/Contact";
import { Faq } from "@/components/layout/faq";
import { Hero } from "@/components/layout/hero";
import { HowItWorks } from "@/components/layout/HowItWorks ";
import { Pricing } from "@/components/layout/pricing";
import { SmartClaimTools } from "@/components/layout/SmartClaimTools";
import { Testimonials } from "@/components/layout/Testimonials";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks></HowItWorks>
      <SmartClaimTools/>
      <Pricing/>
      <Testimonials/>
      <Contact/>
      <Faq/>
      {/* How It Works, Features, Pricing, Testimonials, Contact, FAQ sections go here next */}
    </main>
  );
}