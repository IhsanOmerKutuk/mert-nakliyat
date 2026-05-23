"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const STATS = [
  { value: 500, suffix: "+", label: "Mutlu Müşteri" },
  { value: 10, suffix: "+", label: "Yıllık Deneyim" },
  { value: 81, suffix: "", label: "İle Hizmet" },
  { value: 100, suffix: "%", label: "Sigortalı Taşıma" },
];

function Counter({ to, suffix, duration = 2 }: { to: number; suffix: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setValue(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function WhyUs() {
  return (
    <section id="neden-biz" className="relative overflow-hidden bg-brand-navy-900 py-24 text-white sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange-400">
            Neden Mert Nakliyat?
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Rakamlarla güvenin adı
          </h2>
          <p className="mt-4 text-lg text-white/70">
            On yılı aşkın deneyimimizle binlerce eşyayı güvenle yeni adresine ulaştırdık.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur"
            >
              <div className="text-5xl font-bold tracking-tight text-brand-orange sm:text-6xl">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-sm font-medium uppercase tracking-wide text-white/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
