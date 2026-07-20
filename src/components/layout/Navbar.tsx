import Link from "next/link";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
  { label: "FAQ", href: "/#faq" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">📋</span>
          <span className="text-xl font-extrabold leading-tight">
            <span className="text-brand-green">Insurance</span>
            <br />
            <span className="text-brand-blue">Mate.ai</span>
          </span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-brand-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="outline" size="sm">
              Log In
            </Button>
          </Link>
          <Link href="/register">
            <Button variant="primary" size="sm">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
