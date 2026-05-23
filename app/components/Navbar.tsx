"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#neden-biz", label: "Neden Biz" },
  { href: "#nasil-calisir", label: "Nasıl Çalışır" },
  { href: "#yorumlar", label: "Yorumlar" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-navy-900/85 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-2 text-white font-semibold text-lg">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-orange text-white shadow-lg shadow-brand-orange/40">
            {/* kamyon ikonu */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M3 6.5A1.5 1.5 0 0 1 4.5 5h8A1.5 1.5 0 0 1 14 6.5V8h3.4a2 2 0 0 1 1.7.96l1.6 2.7a2 2 0 0 1 .3 1.04V16a1 1 0 0 1-1 1h-1"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M3 17V6.5M3 17h2m9 0H9m5 0h2m-2 0V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="7" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="17" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </span>
          Mert Nakliyat
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#teklif"
            className="rounded-full bg-brand-orange px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-orange/40 transition hover:bg-brand-orange-600"
          >
            Teklif Al
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-white md:hidden"
          aria-label="Menüyü aç/kapat"
          aria-expanded={open}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-brand-navy-900/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-white/85"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#teklif"
              onClick={() => setOpen(false)}
              className="rounded-full bg-brand-orange px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Ücretsiz Teklif Al
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
