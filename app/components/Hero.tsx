"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import HeroSceneLoader from "./HeroSceneLoader";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  // Sahne yalnızca hero görünürken render edilsin (performans).
  const inView = useInView(sectionRef, { margin: "0px 0px -20% 0px" });

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brand-navy-900 text-white"
    >
      {/* 3D partikül / yol animasyonu */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <HeroSceneLoader active={inView} />
      </div>

      {/* Derinlik için gradient katmanları */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_center,_#1e3a5f_0%,_#0e1b2a_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-brand-navy-900 to-transparent"
      />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange-400 sm:text-sm"
        >
          İstanbul · Türkiye Geneli Nakliyat
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl"
        >
          Eşyalarınız <span className="text-brand-orange">Güvenle</span> Taşınır
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75"
        >
          Evden eve, şehirler arası ve kurumsal taşımacılıkta deneyimli ekip,
          sigortalı taşıma ve ücretsiz keşif. Dakikalar içinde ücretsiz teklif alın.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#teklif"
            className="inline-flex h-13 items-center justify-center rounded-full bg-brand-orange px-8 py-3.5 font-semibold text-white shadow-xl shadow-brand-orange/30 transition hover:bg-brand-orange-600 hover:shadow-brand-orange/50"
          >
            Ücretsiz Teklif Al
          </a>
          <a
            href="tel:+902120000000"
            className="inline-flex h-13 items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-3.5 font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Hemen Ara
          </a>
        </motion.div>
      </div>

      {/* Aşağı kaydır oku */}
      <motion.a
        href="#hizmetler"
        aria-label="Aşağı kaydır"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 transition hover:text-white"
      >
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-11 w-7 items-start justify-center rounded-full border-2 border-white/40 p-1.5"
        >
          <span className="block h-2 w-1.5 rounded-full bg-brand-orange" />
        </motion.span>
      </motion.a>
    </section>
  );
}
