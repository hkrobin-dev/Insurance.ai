import Link from "next/link";

export function Footer() {
  return (
    <footer className=" bg-[#1A1F36]">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm text-gray-500">
          © {new Date().getFullYear()} ClaimMate.ai. All rights reserved.
        </span>
        <div className="flex gap-6 text-sm text-gray-500">
          <Link href="/about" className="hover:text-brand-navy">About</Link>
          <Link href="/services" className="hover:text-brand-navy">Services</Link>
          <Link href="/contact" className="hover:text-brand-navy">Contact</Link>
        </div>
      </div>
    </footer>
  );
}