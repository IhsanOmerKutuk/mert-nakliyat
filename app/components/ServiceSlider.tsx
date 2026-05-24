"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;
const AUTO_PLAY_MS = 3000;

type Slide = {
  title: string;
  desc: string;
  img: string;
  icon: React.ReactNode;
};

const SLIDES: Slide[] = [
  {
    title: "Evden Eve Nakliyat",
    desc: "Paketleme, taşıma ve montaj dahil anahtar teslim ev taşıma hizmeti.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
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
    desc: "81 ile özel donanımlı araçlarla zamanında ve hasarsız adrese teslimat.",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800",
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
    desc: "Ofis ve depo taşımacılığında iş akışınızı durdurmayan planlı çözümler.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
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
    title: "Konser Organizasyonu",
    desc: "Sahne, ses ve ışık ekipmanlarının güvenli kurulum ve taşıması.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
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
  {
    title: "Miting Organizasyonu",
    desc: "Büyük etkinliklerde ekipman ve malzemenin hızlı, koordineli sevkiyatı.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800",
    icon: (
      <>
        <path
          d="M4 10v4a1 1 0 0 0 1 1h2l4 4V5L7 9H5a1 1 0 0 0-1 1Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M15 9a4 4 0 0 1 0 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M18 6.5a7 7 0 0 1 0 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </>
    ),
  },
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export default function ServiceSlider() {
  // [aktif slayt, yön] — yön (1: ileri, -1: geri) animasyonun nereden geleceğini belirler.
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((next: number, dir: number) => {
    setState([(next + SLIDES.length) % SLIDES.length, dir]);
  }, []);

  const paginate = useCallback(
    (dir: number) => goTo(index + dir, dir),
    [goTo, index],
  );

  // 3 saniyede bir otomatik geçiş; hover sırasında duraklar.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => paginate(1), AUTO_PLAY_MS);
    return () => clearInterval(id);
  }, [paginate, paused]);

  const active = SLIDES[index];

  return (
    <section className="bg-white py-16 sm:py-20" aria-label="Hizmet vitrini">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div
          className="relative w-full overflow-hidden rounded-3xl border border-brand-navy-100 bg-white shadow-[0_20px_60px_-20px_rgba(30,58,95,0.3)]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence custom={direction} initial={false} mode="popLayout">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: EASE }}
              className="flex flex-col"
            >
              {/* Görsel — kartın üstünde, net görünür */}
              <div className="relative h-64 w-full sm:h-80 lg:h-96">
                <img
                  src={active.img}
                  alt={active.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-900/40 to-transparent" />
                <span className="absolute bottom-4 left-4 inline-grid h-14 w-14 place-items-center rounded-2xl bg-brand-orange text-white shadow-lg shadow-brand-orange/40 sm:left-6">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
                    {active.icon}
                  </svg>
                </span>
              </div>

              {/* Başlık + açıklama — görselin altında */}
              <div className="px-6 py-8 text-center sm:px-10 sm:py-10">
                <h3 className="text-2xl font-semibold tracking-tight text-brand-navy sm:text-3xl">
                  {active.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xl leading-relaxed text-brand-navy/70">
                  {active.desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Sol / sağ ok butonları */}
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Önceki hizmet"
            className="absolute left-3 top-[clamp(8rem,18vw,12rem)] z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-brand-navy-100 bg-white/90 text-brand-navy shadow-md backdrop-blur transition hover:bg-brand-orange hover:text-white sm:left-5"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Sonraki hizmet"
            className="absolute right-3 top-[clamp(8rem,18vw,12rem)] z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-brand-navy-100 bg-white/90 text-brand-navy shadow-md backdrop-blur transition hover:bg-brand-orange hover:text-white sm:right-5"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Sayfa noktaları */}
          <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => goTo(i, i > index ? 1 : -1)}
                aria-label={`${slide.title} slaytına git`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-brand-orange" : "w-2 bg-brand-navy/20 hover:bg-brand-navy/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
