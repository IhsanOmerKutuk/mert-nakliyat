"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const inputBase =
  "w-full rounded-xl border border-brand-navy-100 bg-white px-4 py-3 text-brand-navy placeholder:text-brand-navy/40 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30";

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Backend bağlanana kadar teklif talebini onay durumuyla gösteriyoruz.
    setSent(true);
  }

  return (
    <section id="teklif" className="relative overflow-hidden bg-brand-navy-900 py-24 text-white sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-orange/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange-400">
            Ücretsiz Teklif
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Dakikalar içinde teklif alın
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Bilgilerinizi bırakın, en kısa sürede sizi arayalım. Hiçbir ücret veya yükümlülük yok.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-10"
        >
          {sent ? (
            <div className="py-12 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-orange text-white">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-semibold">Talebiniz alındı!</h3>
              <p className="mt-3 text-white/70">
                En kısa sürede sizi arayıp ücretsiz teklifinizi ileteceğiz. Teşekkür ederiz.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 text-left sm:grid-cols-2">
              <div>
                <label htmlFor="ad" className="mb-1.5 block text-sm font-medium text-white/80">
                  Ad Soyad
                </label>
                <input
                  id="ad"
                  name="ad"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Adınız ve soyadınız"
                  className={inputBase}
                />
              </div>

              <div>
                <label htmlFor="telefon" className="mb-1.5 block text-sm font-medium text-white/80">
                  Telefon
                </label>
                <input
                  id="telefon"
                  name="telefon"
                  type="tel"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="05XX XXX XX XX"
                  className={inputBase}
                />
              </div>

              <div>
                <label htmlFor="nereden" className="mb-1.5 block text-sm font-medium text-white/80">
                  Nereden
                </label>
                <input
                  id="nereden"
                  name="nereden"
                  type="text"
                  required
                  autoComplete="address-level2"
                  placeholder="Örn. Kadıköy, İstanbul"
                  className={inputBase}
                />
              </div>

              <div>
                <label htmlFor="nereye" className="mb-1.5 block text-sm font-medium text-white/80">
                  Nereye
                </label>
                <input
                  id="nereye"
                  name="nereye"
                  type="text"
                  required
                  autoComplete="address-level2"
                  placeholder="Örn. Çankaya, Ankara"
                  className={inputBase}
                />
              </div>

              <div>
                <label htmlFor="tarih" className="mb-1.5 block text-sm font-medium text-white/80">
                  Taşınma Tarihi
                </label>
                <input
                  id="tarih"
                  name="tarih"
                  type="date"
                  className={`${inputBase} [color-scheme:dark]`}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="mesaj" className="mb-1.5 block text-sm font-medium text-white/80">
                  Mesajınız
                </label>
                <textarea
                  id="mesaj"
                  name="mesaj"
                  rows={4}
                  placeholder="Eşya miktarı, kat, asansör durumu gibi detayları yazabilirsiniz."
                  className={`${inputBase} resize-none`}
                />
              </div>

              <div className="sm:col-span-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-xl bg-brand-orange px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-brand-orange/30 transition hover:bg-brand-orange-600"
                >
                  Ücretsiz Teklif Al
                </motion.button>
                <p className="mt-3 text-center text-xs text-white/50">
                  Bilgileriniz yalnızca size teklif sunmak için kullanılır.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
