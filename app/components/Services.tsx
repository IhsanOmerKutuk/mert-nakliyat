"use client";

import { motion } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const SERVICES = [
  {
    title: "Evden Eve Nakliyat",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    desc: "Eşyalarınız uzman ekip tarafından profesyonelce paketlenir, özel donanımlı araçlarla taşınır ve yeni evinize özenle yerleştirilir.",
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
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600",
    desc: "81 ile düzenli sefer ağı. Eşyalarınız anlaşmalı, özel donanımlı araçlarla zamanında ve hasarsız adresine ulaşır.",
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
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600",
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
  {
    title: "Etkinlik ve Organizasyon Taşımacılığı",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600",
    desc: "Konserler, mitingler, fuarlar ve özel etkinlikler için profesyonel ekipman ve malzeme taşıma hizmeti.",
    icon: (
      <>
        <path
          d="M9 17V5l10-2v12"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="6" cy="17" r="3" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="16" cy="15" r="3" stroke="currentColor" strokeWidth="1.7" />
      </>
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
            İhtiyacınıza uygun, güvenilir ve profesyonel nakliyat hizmetleri.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.1, ease: EASE } }}
              whileHover={{ y: -8, transition: { duration: 0.2, ease: EASE } }}
              viewport={{ once: true, margin: "-60px" }}
              className="group relative overflow-hidden rounded-3xl border border-brand-navy-100 bg-gradient-to-b from-white to-brand-navy-50/40 p-8 shadow-[0_10px_40px_-15px_rgba(30,58,95,0.25)] transition-shadow duration-200 hover:shadow-[0_25px_60px_-15px_rgba(249,115,22,0.35)]"
            >
              <div className="relative -mx-8 -mt-8 mb-6 h-40 overflow-hidden rounded-t-3xl">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-900/55 via-brand-navy-900/10 to-transparent" />
                <span className="absolute bottom-4 left-6 inline-grid h-12 w-12 place-items-center rounded-2xl bg-brand-orange text-white shadow-lg shadow-brand-orange/40">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                    {s.icon}
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy transition-colors duration-200 group-hover:text-brand-orange">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-brand-navy/70">{s.desc}</p>
              <a
                href="#teklif"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange"
              >
                Teklif al
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
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
