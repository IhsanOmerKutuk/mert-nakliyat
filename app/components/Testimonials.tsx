"use client";

import { motion } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const REVIEWS = [
  {
    name: "Ayşe K.",
    role: "Kadıköy → Beşiktaş",
    rating: 5,
    text: "Evden eve taşınmamızı çok profesyonel yaptılar. Hiçbir eşyamız zarar görmedi, ekip son derece nazikti. Kesinlikle tavsiye ederim.",
  },
  {
    name: "Mehmet D.",
    role: "İstanbul → İzmir",
    rating: 5,
    text: "Şehirler arası taşımada söz verdikleri saatte geldiler ve eşyalarımı sapasağlam teslim ettiler. Fiyat da gayet uygundu.",
  },
  {
    name: "Zeynep T.",
    role: "Ofis Taşıma · Levent",
    rating: 5,
    text: "Ofisimizi hafta sonu taşıdılar, Pazartesi hiçbir aksama olmadan çalışmaya başladık. Kurumsal taşımada gerçekten işini bilen bir ekip.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} / 5 yıldız`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={i < rating ? "#f97316" : "none"}
          stroke="#f97316"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.5 9.2l5.9-.9L12 3Z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="yorumlar" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Müşteriler Ne Diyor?
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
            Memnuniyet bizim için her şey
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.15, ease: EASE }}
              className="flex h-full flex-col rounded-3xl border border-brand-navy-100 bg-brand-navy-50/40 p-8 shadow-[0_10px_40px_-20px_rgba(30,58,95,0.3)]"
            >
              <Stars rating={r.rating} />
              <blockquote className="mt-5 flex-1 leading-relaxed text-brand-navy/80">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-brand-navy-100 pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-orange/15 font-semibold text-brand-orange">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <div className="font-semibold text-brand-navy">{r.name}</div>
                  <div className="text-sm text-brand-navy/60">{r.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
