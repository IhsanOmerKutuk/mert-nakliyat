"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "./Reveal";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const STEPS = [
  {
    no: "01",
    title: "Teklif Al",
    desc: "Formu doldurun veya bizi arayın. İhtiyacınızı dinleyip ücretsiz, net bir fiyat teklifi sunalım.",
    icon: (
      <path
        d="M8 10h8M8 14h5M5 4h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9l-4 3V5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    no: "02",
    title: "Planla",
    desc: "Taşınma gününü ve detayları birlikte belirleyelim. Ücretsiz keşif ile her şeyi önceden planlayalım.",
    icon: (
      <path
        d="M7 3v3m10-3v3M4 8h16M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm4 8 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    no: "03",
    title: "Taşın",
    desc: "Uzman ekibimiz eşyalarınızı paketler, taşır ve yeni adresinize özenle yerleştirir. Siz keyfinize bakın.",
    icon: (
      <path
        d="M3 16V8.5A1.5 1.5 0 0 1 4.5 7H13v9M13 10h3.5a2 2 0 0 1 1.7 1l1.5 2.4a2 2 0 0 1 .3 1V16M7 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm8 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="bg-brand-navy-50/50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Nasıl Çalışır?
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
            3 adımda taşınma
          </h2>
          <p className="mt-4 text-lg text-brand-navy/70">
            Teklif almaktan eşyanızın yeni adresinde olmasına kadar, her şey kolay.
          </p>
        </motion.div>

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative mt-16 grid gap-10 md:grid-cols-3"
        >
          {/* adımları birleştiren çizgi (masaüstü) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent md:block"
          />

          {STEPS.map((step) => (
            <motion.li key={step.no} variants={staggerItem} className="relative text-center">
              <div className="relative z-10 mx-auto grid h-18 w-18 place-items-center rounded-2xl bg-white text-brand-orange shadow-[0_10px_30px_-10px_rgba(30,58,95,0.35)] ring-1 ring-brand-navy-100">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
                  {step.icon}
                </svg>
                <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-brand-orange text-xs font-bold text-white shadow">
                  {step.no}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-brand-navy">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs leading-relaxed text-brand-navy/70">{step.desc}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
