"use client";

import { motion } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const SERVICES = [
  {
    title: "Evden Eve Nakliyat",
    desc: "Eşyalarınız uzman ekip tarafından profesyonelce paketlenir, sigortalı araçlarla taşınır ve yeni evinize özenle yerleştirilir.",
    icon: (
      <path
        d="M4 11.5 12 5l8 6.5M6 10v9h12v-9M10 19v-5h4v5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Şehirler Arası Nakliyat",
    desc: "81 ile düzenli sefer ağı. Eşyalarınız anlaşmalı, sigortalı araçlarla zamanında ve hasarsız adresine ulaşır.",
    icon: (
      <path
        d="M3 16V8.5A1.5 1.5 0 0 1 4.5 7H13v9M13 10h3.5a2 2 0 0 1 1.7 1l1.5 2.4a2 2 0 0 1 .3 1V16M3 16h2m6 0H8m9 0h2m-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-12 0a2 2 0 1 1 0 .1Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Kurumsal Taşıma",
    desc: "Ofis, mağaza ve depo taşımacılığında iş akışınızı durdurmadan, planlı ve hızlı çözümler sunuyoruz.",
    icon: (
      <path
        d="M5 20V6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14M13 11h5a1 1 0 0 1 1 1v8M3 20h18M8 8h2M8 11h2M8 14h2M16 14h0M16 17h0"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Hizmetlerimiz
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
            Her taşınma ihtiyacına çözüm
          </h2>
          <p className="mt-4 text-lg text-brand-navy/70">
            İhtiyacınıza uygun, sigortalı ve güvenilir nakliyat hizmetleri.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 [perspective:1200px] md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 60, rotateX: -18 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: EASE }}
              whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
              className="group relative rounded-3xl border border-brand-navy-100 bg-gradient-to-b from-white to-brand-navy-50/40 p-8 shadow-[0_10px_40px_-15px_rgba(30,58,95,0.25)] transition-shadow [transform-style:preserve-3d] hover:shadow-[0_25px_60px_-15px_rgba(249,115,22,0.35)]"
            >
              <div className="mb-6 inline-grid h-14 w-14 place-items-center rounded-2xl bg-brand-orange text-white shadow-lg shadow-brand-orange/30 transition group-hover:scale-110">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                  {s.icon}
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-brand-navy/70">{s.desc}</p>
              <a
                href="#teklif"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange transition group-hover:gap-3"
              >
                Teklif al
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
