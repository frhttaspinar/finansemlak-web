import type { Metadata } from "next";
import "./globals.css";
import { playfair } from "./lib/fonts";
import { SITE_URL, BUSINESS, getBusinessJsonLd } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Finans Gayrimenkul | Amasya Gayrimenkul Danışmanlığı",
  description:
    "Finans Gayrimenkul Danışmanlık; Amasya’da satılık ve kiralık konut, arsa, iş yeri ve gayrimenkul danışmanlığı hizmetleri sunar.",
  applicationName: BUSINESS.name,
  alternates: {
    // Next.js kök adresi normalize eder; sitemap.xml ile birebir aynı biçim üretilir
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: BUSINESS.name,
    title: "Finans Gayrimenkul | Amasya Gayrimenkul Danışmanlığı",
    description:
      "Finans Gayrimenkul Danışmanlık; Amasya’da satılık ve kiralık konut, arsa, iş yeri ve gayrimenkul danışmanlığı hizmetleri sunar.",
    // Görsel, app/opengraph-image.tsx dosyasından otomatik üretilir (1200x630)
  },
  twitter: {
    card: "summary_large_image",
    title: "Finans Gayrimenkul | Amasya Gayrimenkul Danışmanlığı",
    description:
      "Amasya’da satılık ve kiralık konut, arsa, iş yeri ve gayrimenkul danışmanlığı.",
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
      className={`${playfair.variable} scroll-smooth antialiased bg-white text-slate-900`}
    >
      <body className="min-h-screen flex flex-col font-sans">
        {/*
          JavaScript devre dışıysa animasyonla gizlenen içerikler görünür kalır.
          Stylesheet içindeki !important, framer-motion'ın satır içi stilini geçersiz kılar.
        */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "[data-animate]{opacity:1!important;transform:none!important;filter:none!important;}",
            }}
          />
        </noscript>

        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBusinessJsonLd()),
          }}
        />
      </body>
    </html>
  );
}
