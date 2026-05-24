import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Öneri Mert Nakliyat — İstanbul Evden Eve ve Şehirler Arası Nakliyat",
    template: "%s · Öneri Mert Nakliyat",
  },
  description:
    "Öneri Mert Nakliyat ile İstanbul içi ve şehirler arası evden eve, kurumsal taşımacılık. Sigortalı taşıma, ücretsiz keşif ve hızlı teklif.",
  metadataBase: new URL("https://mertnakliyat.example"),
  openGraph: {
    title: "Öneri Mert Nakliyat — Güvenli ve Profesyonel Taşımacılık",
    description:
      "İstanbul merkezli, Türkiye geneli evden eve ve kurumsal nakliyat hizmeti. Ücretsiz teklif alın.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
