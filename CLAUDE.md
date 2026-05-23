@AGENTS.md

# Mert Nakliyat

İstanbul merkezli nakliyat firması için tanıtım ve müşteri çekme amaçlı web sitesi.

## Firma Bilgileri

- **İsim:** Mert Nakliyat
- **Konum:** İstanbul
- **Hizmetler:**
  - Şehirler arası nakliyat
  - Evden eve nakliyat
  - Kurumsal taşıma

## Site Amacı

- Müşteri çekme
- Teklif alma (lead/quote form)
- Firma tanıtımı

## İçerik Dili

Tüm kullanıcıya görünen metinler **Türkçe** olmalıdır. UI metinleri, form etiketleri, hata mesajları, meta etiketler — hepsi Türkçe.

## Tasarım Sistemi

### Renkler

- **Turuncu (primary/accent):** `#F97316`
- **Lacivert (primary/dark):** `#1E3A5F`
- **Beyaz (background):** `#FFFFFF`

### Tipografi

Modern, geometrik sans-serif font kullan. Örnek tercihler: Inter, Poppins, Manrope, Outfit, Sora. Next.js'in `next/font` API'si ile yükle.

### Görsel Stil

- **3D efektler:** Three.js (`three`, `@react-three/fiber`, `@react-three/drei`) ile interaktif sahneler ve animasyonlar.
- **Premium görünüm:** Yumuşak gölgeler, derinlik, glassmorphism / gradient kullanımı, mikro etkileşimler.
- **Animasyon:** Scroll-driven, hover, parallax efektleri. Performansı koruyacak şekilde uygula (3D sahneler yalnızca görünür olduğunda render edilsin).

## Teknik Yığın

- **Next.js 16.2.6** — `AGENTS.md` uyarısı: bu Next.js sürümü senin bildiğinden farklı olabilir. Kod yazmadan önce `node_modules/next/dist/docs/` altındaki ilgili dokümanı oku.
- **React 19.2.4**
- **TailwindCSS 4** (`@tailwindcss/postcss`)
- **TypeScript 5**

## Mobil ve Erişilebilirlik

- Mobil-first responsive tasarım (nakliyat aramaları büyük oranda mobilden gelir).
- Form alanlarında uygun `inputmode` ve `autocomplete` kullan.
- WCAG AA kontrast oranlarını koru (turuncu üzerinde beyaz metin için kontrast doğrula).
