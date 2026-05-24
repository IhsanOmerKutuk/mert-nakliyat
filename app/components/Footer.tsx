const NAV_LINKS = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#neden-biz", label: "Neden Biz" },
  { href: "#nasil-calisir", label: "Nasıl Çalışır" },
  { href: "#yorumlar", label: "Yorumlar" },
  { href: "#teklif", label: "Teklif Al" },
];

const SERVICE_LINKS = [
  "Evden Eve Nakliyat",
  "Şehirler Arası Nakliyat",
  "Kurumsal Taşıma",
  "Ücretsiz Keşif",
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo + tanıtım */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-orange shadow-lg shadow-brand-orange/40">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
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
              Öneri Mert Nakliyat
            </div>
            <p className="mt-4 max-w-sm leading-relaxed text-white/60">
              İstanbul merkezli, Türkiye geneli evden eve, şehirler arası ve kurumsal
              nakliyat hizmeti. Güvenli taşımacılık ve ücretsiz keşif ile yanınızdayız.
            </p>
          </div>

          {/* Site linkleri */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">Site</h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/60 transition hover:text-brand-orange">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">İletişim</h3>
            <ul className="mt-4 space-y-3 text-white/60">
              <li>
                <a href="tel:+902120000000" className="transition hover:text-brand-orange">
                  +90 212 000 00 00
                </a>
              </li>
              <li>
                <a href="mailto:info@mertnakliyat.com" className="transition hover:text-brand-orange">
                  info@mertnakliyat.com
                </a>
              </li>
              <li>İstanbul, Türkiye</li>
              <li>Hafta içi 08:00 – 20:00</li>
            </ul>
            <div className="mt-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">Hizmetler</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/50">
                {SERVICE_LINKS.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Öneri Mert Nakliyat. Tüm hakları saklıdır.</p>
          <p>İstanbul · Türkiye geneli güvenli taşımacılık</p>
        </div>
      </div>
    </footer>
  );
}
