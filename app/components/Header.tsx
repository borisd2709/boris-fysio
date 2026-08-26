"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link href="/" className="font-bold text-xl">
          Boris Drogt
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/werkwijze">Werkwijze</Link>
          <Link href="/voor-wie">Voor wie</Link>
          <Link href="/kennisbank">Kennisbank</Link>
          <Link href="/kennisclips">Kennisclips</Link>
          <Link href="/afspraak">Afspraak</Link>

          <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
  <span>📞</span>
  <a
    href="tel:+31612345678"
    className="hover:text-[#5E6F52]"
  >
    06-11628553
  </a>
          </div>

        </nav>

        {/* Mobiel */}
        <button onClick={() => setOpen(!open)}>
  {open ? <X /> : <Menu />}
</button>

      </div>

      {open && (
        <nav className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white">
          <Link href="/">Home</Link>
          <Link href="/werkwijze">Werkwijze</Link>
          <Link href="/voor-wie">Voor wie</Link>
          <Link href="/kennisbank">Kennisbank</Link>
          <Link href="/kennisclips">Kennisclips</Link>
          <Link href="/afspraak">Afspraak</Link>
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
  <span>📞</span>
  <a
    href="tel:+31612345678"
    className="hover:text-[#5E6F52]"
  >
    06-11628553
  </a>
          </div>
        </nav>
      )}
    </header>
  );
}