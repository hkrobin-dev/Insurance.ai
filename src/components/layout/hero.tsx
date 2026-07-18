import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background layers */}
      <Image
        src="/images/hero-grid-pattern.png"
        alt=""
        fill
        priority
        className="pointer-events-none select-none object-cover object-top opacity-70"
      />
      <Image
        src="/images/hero-diagonal.png"
        alt=""
        width={1100}
        height={800}
        className="pointer-events-none absolute bottom-0 right-0 h-[85%] w-auto select-none object-contain"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-0 pt-16 md:grid-cols-2 md:pt-24">
        {/* Left: copy */}
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold leading-tight text-brand-navy sm:text-5xl">
            Your AI-Powered Insurance
            <br />
            Claim Companion.
          </h1>

          <p className="mt-6 max-w-xl text-gray-600">
            Navigate your insurance claim with confidence. From stolen cars to
            house fires, ClaimMate guides you every step of the way — with AI
            tools that make claims less stressful and more successful.
          </p>

          <Button size="lg" className="mt-8">
            Get Started →
          </Button>

          <div className="mt-16 flex items-center gap-3">
            <Image
              src="/images/customer-avatars.png"
              alt="1,000,000+ customers"
              width={220}
              height={40}
              className="h-auto w-auto"
            />
          </div>
        </div>

        {/* Right: model photo */}
        <div className="relative z-10 flex justify-center md:justify-end">
          <Image
            src="/images/hero-model.png"
            alt="ClaimMate customer using the app on her phone"
            width={524}
            height={953}
            priority
            className="h-auto w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}