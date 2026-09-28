"use client";

import Link from "next/link";

import { Menu, X } from "lucide-react";

import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
  { href: "/", label: "Home" },
  { href: "/werkwijze", label: "Werkwijze" },
  { href: "/voor-wie", label: "Voor wie" },

  {
    label: "Behandelingen",
    children: [
      {
        href: "/behandelingen/kaakfysiotherapie",
        label: "Kaakfysiotherapie",
      },
      {
        href: "/behandelingen/manuele_therapie",
        label: "Manuele therapie",
      },
      {
        href: "/behandelingen/herstel",
        label: "Leefstijl, ademhaling en herstel",
      },
    ],
  },

  {
label: "Online",
children: [
{
href: "/online/tinnitus",
label: "Tinnitus",
},
{
href: "https://kaakfysio-3.vercel.app",
label: "Kaakfysio App",
},
],
},
  { href: "/kennisbank", label: "Kennisbank" },
  { href: "/kennisclips", label: "Kennisclips" },
  { href: "/afspraak", label: "Afspraak" },
];

  useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpenDropdown(null);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, []);

  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          Boris Drogt
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} ref={dropdownRef} className="relative">
                <button
onClick={() =>
setOpenDropdown(
openDropdown === item.label
? null
: item.label
)
}
className="hover:text-[#5E6F52] flex items-center gap-1"
>
{item.label}
<span>
{openDropdown === item.label ? "▲" : "▼"}
</span>
</button>

                {openDropdown === item.label && (
                  <div className="absolute left-0 top-full mt-2 bg-white border shadow-md min-w-64 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#5E6F52]"
              >
                {item.label}
              </Link>
            )
          )}

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

    {navItems.map((item) =>
      item.children ? (
        <div key={item.label} ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
            className="font-semibold text-gray-900 text-xl flex items-center gap-2"
          >
            {item.label}
            <span>{openDropdown === item.label ? "▲" : "▼"}</span>
          </button>

          {openDropdown === item.label && (
            <div className="pl-4 mt-2 flex flex-col gap-3">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-[#5E6F52]"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setOpen(false)}
          className="hover:text-[#5E6F52]"
        >
          {item.label}
        </Link>
      )
    )}

    <div className="flex items-center gap-2 text-sm text-gray-600">
      <span aria-hidden="true">📞</span>
      <a href="tel:+31611628553" className="hover:text-[#5E6F52]">
        06-11628553
      </a>
    </div>

  </nav>
)}
    </header>
  );
}