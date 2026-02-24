"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-work", label: "Our Work" },
  { href: "/floor-plans", label: "Floor Plans" },
  { href: "/contact", label: "Contact" },
];

const secondaryLinks = [
  { href: "/gallery", label: "Gallery" },
  { href: "/available", label: "Available" },
];

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;
      const pastThreshold = currentY > 96;

      setHidden(scrollingDown && pastThreshold);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-brand/95 text-white backdrop-blur transition-transform duration-300 ${
        hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" className="flex items-center">
          <span className="inline-flex h-[3.75rem] w-[9rem] items-center justify-center rounded-xl bg-white px-2 py-1">
            <Image
              src="/brand/logo.png"
              alt="North Cove Builders logo"
              width={180}
              height={96}
              quality={100}
              priority
              className="h-full w-full object-contain"
            />
          </span>
        </Link>

        <ul className="hidden items-center gap-4 text-sm font-medium lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition hover:text-white/80">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <details className="group relative">
              <summary className="list-none cursor-pointer transition hover:text-white/80">More</summary>
              <div className="absolute right-0 top-8 min-w-44 rounded-2xl bg-white p-2 text-brand shadow-lg">
                {secondaryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-xl px-3 py-2 text-sm font-semibold transition hover:bg-surface"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-full border border-white/40 px-3 py-2 text-sm font-semibold lg:hidden"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

          <Link href="/contact" className="rounded-full bg-white px-3 py-2.5 text-sm font-semibold text-brand transition hover:bg-white/90 sm:px-4">
            <span className="sm:hidden">Quote</span>
            <span className="hidden sm:inline">Get a Free Quote</span>
          </Link>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`fixed inset-x-0 bottom-0 top-20 z-40 bg-[#0f2f57] transition-opacity duration-300 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col px-5 pb-8 pt-4">
          <nav className="grid gap-2">
            {[...navLinks, ...secondaryLinks].map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-2xl border border-brand bg-white px-4 py-4 text-base font-semibold text-brand shadow-sm transition-all duration-300 ${
                  menuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 45}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
