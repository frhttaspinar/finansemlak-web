import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../../components/Header";
import WhatsAppButton from "../../components/WhatsAppButton";
import BlogFooter from "../../components/blog/BlogFooter";
import { getBlogPost } from "../../lib/blog";
import {
  SERVICES_INDEX_URL,
  SERVICE_DISCLAIMER,
  getService,
  getServiceUrl,
  services,
} from "../../lib/services";
import { BUSINESS, SITE_URL } from "../../lib/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Hizmet Bulunamadı | Finans Gayrimenkul",
      robots: { index: false, follow: false },
    };
  }

  const canonical = getServiceUrl(service.slug);

  return {
    title: service.metaTitle,
    description: service.metaDescription,
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
      title: service.metaTitle,
      description: service.metaDescription,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const canonical = getServiceUrl(service.slug);
  const relatedPosts = service.relatedBlogSlugs
    .map((blogSlug) => getBlogPost(blogSlug))
    .filter((post) => post !== undefined);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: service.metaTitle,
        description: service.metaDescription,
        inLanguage: "tr-TR",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#business` },
        breadcrumb: { "@id": `${canonical}#breadcrumb` },
        mainEntity: { "@id": `${canonical}#service` },
        dateModified: service.updatedAt,
      },
      {
        // Fiyat veya teklif bilgisi bilinçli olarak eklenmez.
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: service.title,
        description: service.description,
        serviceType: service.serviceType,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: {
          "@type": "City",
          name: "Amasya",
        },
        url: canonical,
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
            item: SERVICES_INDEX_URL,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="flex-1 bg-white pt-[100px]">
        <article>
          <header className="border-b border-slate-100 bg-slate-50 py-12 md:py-16">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <nav aria-label="İçerik yolu" className="mb-8 text-sm text-slate-600">
                <ol className="flex flex-wrap items-center gap-2">
                  <li>
                    <Link
                      href="/"
                      className="inline-flex min-h-11 items-center hover:text-brand-navy"
                    >
                      Ana Sayfa
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link
                      href="/hizmetler"
                      className="inline-flex min-h-11 items-center hover:text-brand-navy"
                    >
                      Hizmetler
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-slate-500">
                    {service.shortTitle}
                  </li>
                </ol>
              </nav>

              <span className="inline-flex rounded-full bg-brand-navy px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                {service.category}
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
                {service.description}
              </p>
            </div>
          </header>

          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-slate-100 shadow-xl">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 1024px"
              />
            </div>

            <div className="mx-auto mt-14 max-w-3xl">
              <div className="space-y-5 text-lg leading-8 text-slate-700">
                {service.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12 space-y-12 text-lg leading-8 text-slate-700">
                {service.sections.map((section, sectionIndex) => {
                  const sectionId = `${service.slug}-bolum-${sectionIndex + 1}`;

                  return (
                    <section key={section.heading} aria-labelledby={sectionId}>
                      <h2
                        id={sectionId}
                        className="mb-5 text-3xl font-bold leading-tight text-slate-900"
                      >
                        {section.heading}
                      </h2>
                      <div className="space-y-5">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      {section.bullets && (
                        <ul className="mt-6 list-disc space-y-3 pl-6 marker:text-brand-gold">
                          {section.bullets.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </section>
                  );
                })}
              </div>

              <aside className="mt-12 rounded-2xl border border-brand-gold/30 bg-amber-50/60 p-6 text-base leading-relaxed text-slate-700">
                <p className="font-semibold">{SERVICE_DISCLAIMER}</p>
              </aside>

              <section
                aria-labelledby="hizmet-danisma"
                className="mt-12 rounded-3xl bg-brand-navy p-8 text-white shadow-xl md:p-10"
              >
                <h2 id="hizmet-danisma" className="text-3xl font-bold">
                  Amasya’daki seçenekleri birlikte değerlendirelim
                </h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-white/85">
                  Durumunuzu kısaca anlatın; bu hizmet kapsamında nasıl
                  ilerleyebileceğimizi birlikte konuşalım.
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
                  <Link
                    href="/"
                    className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Finans Gayrimenkul’e Dön
                  </Link>
                </div>
              </section>

              {relatedPosts.length > 0 && (
                <section
                  aria-labelledby="ilgili-yazilar"
                  className="mt-14 border-t border-slate-200 pt-10"
                >
                  <h2 id="ilgili-yazilar" className="text-2xl font-bold text-slate-900">
                    Bu hizmetle ilgili rehber yazılarımız
                  </h2>
                  <ul className="mt-5 space-y-4 text-base leading-relaxed text-slate-700">
                    {relatedPosts.map((post) => (
                      <li key={post.slug}>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex min-h-11 items-center font-semibold text-brand-navy underline decoration-brand-gold/60 underline-offset-4 hover:text-brand-navy-dark"
                        >
                          {post.title}
                        </Link>
                        <p className="text-slate-600">{post.excerpt}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <div className="mt-10">
                <Link
                  href="/hizmetler"
                  className="inline-flex min-h-11 items-center rounded-full border border-slate-200 px-6 py-3 font-semibold text-brand-navy transition-colors hover:border-brand-navy/30 hover:bg-slate-50"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                  Tüm Hizmetlere Dön
                </Link>
              </div>
            </div>
          </div>
        </article>

        <section
          aria-labelledby="diger-hizmetler"
          className="border-t border-slate-100 bg-slate-50 py-20"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
                  Diğer Hizmetlerimiz
                </p>
                <h2 id="diger-hizmetler" className="text-3xl font-bold text-slate-900">
                  Amasya’da Sunduğumuz Diğer Başlıklar
                </h2>
              </div>
              <Link
                href="/hizmetler"
                className="inline-flex min-h-11 items-center font-semibold text-brand-navy"
              >
                Tümünü Gör
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {services
                .filter((other) => other.slug !== service.slug)
                .map((other) => (
                  <article
                    key={other.slug}
                    className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
                  >
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                      {other.category}
                    </p>
                    <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900">
                      <Link
                        href={`/hizmetler/${other.slug}`}
                        className="hover:text-brand-navy"
                      >
                        {other.shortTitle}
                      </Link>
                    </h3>
                    <Link
                      href={`/hizmetler/${other.slug}`}
                      aria-label={`Hizmeti inceleyin: ${other.title}`}
                      className="mt-auto inline-flex min-h-11 items-center pt-4 font-semibold text-brand-navy"
                    >
                      Hizmeti İncele
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </article>
                ))}
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
