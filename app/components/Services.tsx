"use client";

import { motion } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const SERVICES = [
  {
    title: "Evden Eve Nakliyat",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
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

        <div className="mt-16 grid gap-8 [perspective:1200px] sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 60, rotateX: -18 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: EASE }}
              whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
              className="group relative overflow-hidden rounded-3xl border border-brand-navy-100 bg-gradient-to-b from-white to-brand-navy-50/40 p-8 shadow-[0_10px_40px_-15px_rgba(30,58,95,0.25)] transition-shadow [transform-style:preserve-3d] hover:shadow-[0_25px_60px_-15px_rgba(249,115,22,0.35)]"
            >
              <div className="relative -mx-8 -mt-8 mb-6 h-40 overflow-hidden rounded-t-3xl">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-900/55 via-brand-navy-900/10 to-transparent" />
                <span className="absolute bottom-4 left-6 inline-grid h-12 w-12 place-items-center rounded-2xl bg-brand-orange text-white shadow-lg shadow-brand-orange/40">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                    {s.icon}
                  </svg>
                </span>
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
