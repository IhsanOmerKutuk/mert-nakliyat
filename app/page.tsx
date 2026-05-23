import HeroSceneLoader from "./components/HeroSceneLoader";

export default function Home() {
  return (
    <main className="flex-1 relative isolate overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none opacity-90"
      >
        <HeroSceneLoader />
      </div>

      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-b from-brand-orange-50 via-white to-white"
      />

      <section className="mx-auto max-w-6xl px-6 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-brand-orange font-semibold">
          İstanbul · Türkiye geneli nakliyat
        </p>
        <h1 className="mt-5 text-5xl sm:text-7xl font-semibold tracking-tight text-brand-navy leading-[1.02]">
          Eşyalarınız <br />
          <span className="text-brand-orange">güvenle</span> taşınır.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-brand-navy/80 leading-relaxed">
          Mert Nakliyat ile evden eve, şehirler arası ve kurumsal taşımacılıkta
          deneyimli ekip, sigortalı taşıma ve ücretsiz keşif. Dakikalar içinde
          ücretsiz teklif alın.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#teklif"
            className="inline-flex h-12 items-center justify-center rounded-full bg-brand-orange px-7 text-white font-medium shadow-lg shadow-brand-orange/30 transition hover:bg-brand-orange-600"
          >
            Ücretsiz teklif al
          </a>
          <a
            href="tel:+900000000000"
            className="inline-flex h-12 items-center justify-center rounded-full border border-brand-navy/20 bg-white/70 backdrop-blur px-7 text-brand-navy font-medium hover:bg-brand-navy/5 transition"
          >
            Hemen ara
          </a>
        </div>
      </section>
    </main>
  );
}
