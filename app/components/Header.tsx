"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/werkwijze", label: "Werkwijze" },
    { href: "/voor-wie", label: "Voor wie" },
    { href: "/kennisbank", label: "Kennisbank" },
    { href: "/kennisclips", label: "Kennisclips" },
    { href: "/afspraak", label: "Afspraak" },
  ];

  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          Boris Drogt
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[#5E6F52]">
              {item.label}
            </Link>
          ))}

          <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
            <span aria-hidden="true">📞</span>
            <a href="tel:+31611628553" className="hover:text-[#5E6F52]">
              06-11628553
            </a>
          </div>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label={open ? "Sluit menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-gray-900 text-xl">
              {item.label}
            </Link>
          ))}

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span aria-hidden="true">📞</span>
            <a href="tel:+31612345678" className="hover:text-[#5E6F52]">
              06-11628553
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}