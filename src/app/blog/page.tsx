import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlogCards from "../components/BlogCards";
import Header from "../components/Header";
import WhatsAppButton from "../components/WhatsAppButton";
import BlogFooter from "../components/blog/BlogFooter";
import { BUSINESS, SITE_URL } from "../lib/site";

const title = "Gayrimenkul Rehberi | Finans Gayrimenkul Amasya";
const description =
  "Amasya’da konut, arsa, ticari gayrimenkul, ekspertiz, kira ve yatırım süreçlerine ilişkin Finans Gayrimenkul rehberlerini inceleyin.";
const canonical = `${SITE_URL}/blog`;
const socialImage = `${SITE_URL}/opengraph-image`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
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
    url: canonical,
    siteName: BUSINESS.name,
    title,
    description,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: `${BUSINESS.name} Gayrimenkul Rehberi`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: title,
      description,
      inLanguage: "tr-TR",
      breadcrumb: { "@id": `${canonical}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonical}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: canonical,
        },
      ],
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <Header />

      <main className="flex-1 pt-[100px]">
        <section className="border-b border-slate-100 bg-slate-50 py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="İçerik yolu" className="mb-8 text-sm text-slate-600">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="min-h-11 py-3 hover:text-brand-navy">
                    Ana Sayfa
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="font-semibold text-brand-navy">
                  Blog
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
                Finans Gayrimenkul Blog
              </p>
              <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                Gayrimenkul Rehberi
              </h1>
              <div className="my-6 h-1 w-20 bg-brand-navy" aria-hidden="true" />
              <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
                Amasya’da konut, arsa, ticari mülk, kira ve finansman süreçlerini
                daha bilinçli değerlendirmek için hazırladığımız özgün rehberleri
                inceleyin.
              </p>
            </div>
          </div>
        </section>

        <section aria-label="Gayrimenkul yazıları" className="bg-white py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <BlogCards headingLevel="h2" />

            <div className="mt-14 flex justify-center">
              <Link
                href="/"
                className="inline-flex min-h-11 items-center rounded-full border border-slate-200 px-6 py-3 font-semibold text-brand-navy transition-colors hover:border-brand-navy/30 hover:bg-slate-50"
              >
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Ana Sayfaya Dön
              </Link>
            </div>
          </div>
        </section>
      </main>

      <BlogFooter />
      <WhatsAppButton />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
