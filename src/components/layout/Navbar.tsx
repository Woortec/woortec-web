"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/calendar", label: "Calendar" },
  { href: "/highlights", label: "Highlights" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex-shrink-0" onClick={(e) => handleNavClick(e, "/")}>
          <Image
            src="/logos/logo.png"
            alt="Woortec"
            width={150}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-black transition-colors hover:text-woortec-text"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://app.woortec.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-5 text-sm font-semibold text-woortec-text shadow-[0_3px_3px_#00000012] transition-colors hover:shadow-md"
          >
            Get Started
            <Image src="/icons/arrow.svg" alt="" width={16} height={16} />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="text-black md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="text-2xl font-bold">{mobileOpen ? "✕" : "≡"}</span>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t border-neutral-300 bg-white px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium text-black"
              onClick={(e) => {
                setMobileOpen(false);
                handleNavClick(e, link.href);
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://app.woortec.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-6 py-5 text-sm font-semibold text-woortec-text shadow-[0_3px_3px_#00000012]"
          >
            Get Started
            <Image src="/icons/arrow.svg" alt="" width={16} height={16} />
          </a>
        </nav>
      )}
    </header>
  );
}
