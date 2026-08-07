import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock3, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../../components/Header";
import WhatsAppButton from "../../components/WhatsAppButton";
import BlogFooter from "../../components/blog/BlogFooter";
import {
  blogPosts,
  formatBlogDate,
  getBlogPost,
  getBlogUrl,
  getRelatedPosts,
} from "../../lib/blog";
import { getServicesForBlogPost } from "../../lib/services";
import { BUSINESS, SITE_URL } from "../../lib/site";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Yazı Bulunamadı | Finans Gayrimenkul",
      robots: { index: false, follow: false },
    };
  }

  const canonical = getBlogUrl(post.slug);

  return {
    title: post.metadataTitle,
    description: post.description,
    authors: [{ name: post.author, url: SITE_URL }],
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
      type: "article",
      locale: "tr_TR",
      url: canonical,
      siteName: BUSINESS.name,
      title: post.metadataTitle,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.modifiedAt,
      section: post.category,
      authors: [BUSINESS.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metadataTitle,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const canonical = getBlogUrl(post.slug);
  const relatedPosts = getRelatedPosts(post.slug);
  // Yazının konusuyla örtüşen hizmet sayfalarına doğal iç bağlantı
  const relatedServices = getServicesForBlogPost(post.slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${canonical}#article`,
        headline: post.title,
        description: post.description,
        image: {
          "@type": "ImageObject",
          url: post.image,
          caption: post.imageAlt,
        },
        datePublished: post.publishedAt,
        dateModified: post.modifiedAt,
        author: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#business`,
          name: BUSINESS.name,
        },
        publisher: { "@id": `${SITE_URL}/#business` },
        mainEntityOfPage: { "@id": `${canonical}#webpage` },
        articleSection: post.category,
        inLanguage: "tr-TR",
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
            item: `${SITE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: canonical,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: post.metadataTitle,
        description: post.description,
        inLanguage: "tr-TR",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${canonical}#breadcrumb` },
        mainEntity: { "@id": `${canonical}#article` },
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
                    <Link href="/" className="inline-flex min-h-11 items-center hover:text-brand-navy">
                      Ana Sayfa
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href="/blog" className="inline-flex min-h-11 items-center hover:text-brand-navy">
                      Blog
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-slate-500">
                    {post.title}
                  </li>
                </ol>
              </nav>

              <span className="inline-flex rounded-full bg-brand-navy px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                {post.category}
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                {post.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
                {post.description}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
                <span>
                  Yayın: <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                </span>
                <span>
                  Güncelleme: <time dateTime={post.modifiedAt}>{formatBlogDate(post.modifiedAt)}</time>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="h-4 w-4" aria-hidden="true" />
                  {post.readingTime}
                </span>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-slate-100 shadow-xl">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 1024px"
              />
            </div>

            <div className="mx-auto mt-14 max-w-3xl">
              <div className="space-y-12 text-lg leading-8 text-slate-700">
                {post.sections.map((section, sectionIndex) => {
                  const sectionId = `${post.slug}-bolum-${sectionIndex + 1}`;

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
                      {section.subsections?.map((subsection) => (
                        <div key={subsection.heading} className="mt-8">
                          <h3 className="mb-4 text-2xl font-bold text-slate-900">
                            {subsection.heading}
                          </h3>
                          <div className="space-y-5">
                            {subsection.paragraphs.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                          {subsection.bullets && (
                            <ul className="mt-5 list-disc space-y-3 pl-6 marker:text-brand-gold">
                              {subsection.bullets.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </section>
                  );
                })}
              </div>

              {relatedServices.length > 0 && (
                <section
                  aria-labelledby="ilgili-hizmetler"
                  className="mt-14 border-t border-slate-200 pt-10"
                >
                  <h2 id="ilgili-hizmetler" className="text-2xl font-bold text-slate-900">
                    Bu konuda size nasıl yardımcı olabiliriz?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-700">
                    Yazıda ele alınan başlıkları Amasya’daki kendi durumunuz için
                    konuşmak isterseniz ilgili hizmet sayfalarımızı
                    inceleyebilirsiniz.
                  </p>
                  <ul className="mt-5 space-y-3 text-base leading-relaxed text-slate-700">
                    {relatedServices.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/hizmetler/${service.slug}`}
                          className="inline-flex min-h-11 items-center font-semibold text-brand-navy underline decoration-brand-gold/60 underline-offset-4 hover:text-brand-navy-dark"
                        >
                          {service.shortTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section aria-labelledby="kaynaklar" className="mt-14 border-t border-slate-200 pt-10">
                <h2 id="kaynaklar" className="text-2xl font-bold text-slate-900">
                  Kaynaklar
                </h2>
                <ul className="mt-5 space-y-3 text-base leading-relaxed text-slate-700">
                  {post.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center font-semibold text-brand-navy underline decoration-brand-gold/60 underline-offset-4 hover:text-brand-navy-dark"
                      >
                        {source.title} — {source.publisher}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              <aside className="mt-10 rounded-2xl border border-brand-gold/30 bg-amber-50/60 p-6 text-base leading-relaxed text-slate-700">
                <p className="font-semibold">{post.disclaimer}</p>
              </aside>

              <section
                aria-labelledby="danisma"
                className="mt-12 rounded-3xl bg-brand-navy p-8 text-white shadow-xl md:p-10"
              >
                <h2 id="danisma" className="text-3xl font-bold">
                  Amasya’daki seçenekleri birlikte değerlendirelim
                </h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-white/85">
                  Finans Gayrimenkul’e dönün veya sorularınız için WhatsApp ve telefon
                  üzerinden doğrudan bize ulaşın.
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

              <div className="mt-10">
                <Link
                  href="/blog"
                  className="inline-flex min-h-11 items-center rounded-full border border-slate-200 px-6 py-3 font-semibold text-brand-navy transition-colors hover:border-brand-navy/30 hover:bg-slate-50"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                  Tüm Yazılara Dön
                </Link>
              </div>
            </div>
          </div>
        </article>

        <section aria-labelledby="ilgili-yazilar" className="border-t border-slate-100 bg-slate-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
                  Okumaya Devam Edin
                </p>
                <h2 id="ilgili-yazilar" className="text-3xl font-bold text-slate-900">
                  İlişkili Yazılar
                </h2>
              </div>
              <Link href="/blog" className="inline-flex min-h-11 items-center font-semibold text-brand-navy">
                Tümünü Gör
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.slug} className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
                  <Link href={`/blog/${relatedPost.slug}`} className="relative block aspect-[16/10] overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.imageAlt}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 767px) 100vw, 33vw"
                    />
                  </Link>
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                      {relatedPost.category}
                    </p>
                    <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900">
                      <Link href={`/blog/${relatedPost.slug}`} className="hover:text-brand-navy">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      aria-label={`Yazıyı okuyun: ${relatedPost.title}`}
                      className="mt-5 inline-flex min-h-11 items-center font-semibold text-brand-navy"
                    >
                      Yazıyı Oku
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
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
