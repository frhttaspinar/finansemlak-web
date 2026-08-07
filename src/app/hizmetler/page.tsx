import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../components/Header";
import WhatsAppButton from "../components/WhatsAppButton";
import BlogFooter from "../components/blog/BlogFooter";
import { SERVICES_INDEX_URL, getServiceUrl, services } from "../lib/services";
import { BUSINESS, SITE_URL } from "../lib/site";

const title = "Amasya Gayrimenkul Danışmanlık Hizmetleri | Finans";
const description =
  "Amasya’da konut, arsa, ticari mülk, değerleme rehberliği ile tapu ve kredi süreçlerinde Finans Gayrimenkul’ün sunduğu danışmanlık hizmetlerini inceleyin.";
const canonical = SERVICES_INDEX_URL;
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
        alt: `${BUSINESS.name} hizmetleri`,
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
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#business` },
      breadcrumb: { "@id": `${canonical}#breadcrumb` },
      mainEntity: { "@id": `${canonical}#services` },
    },
    {
      "@type": "ItemList",
      "@id": `${canonical}#services`,
      name: "Finans Gayrimenkul hizmetleri",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.title,
        url: getServiceUrl(service.slug),
      })),
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
          name: "Hizmetler",
          item: canonical,
        },
      ],
    },
  ],
};

export default function ServicesPage() {
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
                  Hizmetler
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
                Finans Gayrimenkul Hizmetleri
              </p>
              <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                Amasya’da Gayrimenkul Danışmanlık Hizmetlerimiz
              </h1>
              <div className="my-6 h-1 w-20 bg-brand-navy" aria-hidden="true" />
              <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
                Amasya Merkez’deki ofisimizden konut, arsa ve ticari mülk
                süreçlerini yürütüyoruz. Her hizmetin nasıl işlediğini, kimler
                için uygun olduğunu ve hangi başlıklara dikkat edilmesi
                gerektiğini ilgili sayfada ayrıntılı biçimde anlattık.
              </p>
            </div>
          </div>
        </section>

        <section aria-label="Hizmet sayfaları" className="bg-white py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const href = `/hizmetler/${service.slug}`;

                return (
                  <article
                    key={service.slug}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <Link
                      href={href}
                      aria-label={`${service.title} sayfasını inceleyin`}
                      className="relative block h-52 w-full overflow-hidden"
                    >
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 backdrop-blur-sm">
                        {service.category}
                      </span>
                    </Link>

                    <div className="flex flex-grow flex-col p-8">
                      <h2 className="mb-3 text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-navy">
                        <Link href={href}>{service.shortTitle}</Link>
                      </h2>
                      <p className="mb-6 flex-grow text-sm leading-relaxed text-slate-600 md:text-base">
                        {service.description}
                      </p>
                      <Link
                        href={href}
                        aria-label={`Hizmeti inceleyin: ${service.title}`}
                        className="mt-auto inline-flex min-h-11 items-center font-semibold text-brand-navy transition-colors hover:text-brand-navy-dark"
                      >
                        Hizmeti İncele
                        <ArrowRight
                          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mx-auto mt-20 max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900">
                Süreç nasıl başlıyor?
              </h2>
              <div className="my-6 h-1 w-20 bg-brand-navy" aria-hidden="true" />
              <div className="space-y-5 text-lg leading-8 text-slate-700">
                <p>
                  Hangi hizmet başlığıyla gelirseniz gelin, ilk adım aynıdır:
                  ihtiyacın ve bütçenin net biçimde konuşulması. Bu çerçeve
                  belirlendiğinde gezilecek mülk sayısı azalır, buna karşılık
                  gündeme gelen her seçenek gerçek bir aday hâline gelir.
                </p>
                <p>
                  İkinci adımda seçenekler aynı ölçütlerle karşılaştırılır;
                  belgeler ve mülkün fiilî durumu birlikte incelenir. Kredi,
                  resmî değerleme ve sözleşmenin hukuki denetimi gibi başlıklar
                  ilgili kurumların ve profesyonellerin yetki alanındadır. Biz bu
                  aşamalarda hangi soruyu kime sormanız gerektiğini netleştirir,
                  süreci düzenli tutarız.
                </p>
                <p>
                  Gayrimenkul süreçlerini daha ayrıntılı okumak isterseniz{" "}
                  <Link
                    href="/blog"
                    className="font-semibold text-brand-navy underline decoration-brand-gold/60 underline-offset-4 hover:text-brand-navy-dark"
                  >
                    gayrimenkul rehberi yazılarımıza
                  </Link>{" "}
                  göz atabilirsiniz.
                </p>
              </div>

              <section
                aria-labelledby="hizmet-iletisim"
                className="mt-12 rounded-3xl bg-brand-navy p-8 text-white shadow-xl md:p-10"
              >
                <h2 id="hizmet-iletisim" className="text-3xl font-bold">
                  Hangi hizmete ihtiyacınız olduğundan emin değil misiniz?
                </h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-white/85">
                  Durumunuzu kısaca anlatın; hangi adımdan başlamanız
                  gerektiğini birlikte belirleyelim.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={BUSINESS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    <FaWhatsapp className="mr-2 h-5 w-5" aria-hidden="true" />
                    WhatsApp’tan Danışın
                  </a>
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    aria-label={`Telefon ile arayın: ${BUSINESS.phoneDisplay}`}
                    className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                    {BUSINESS.phoneDisplay}
                  </a>
                </div>
              </section>
            </div>

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
