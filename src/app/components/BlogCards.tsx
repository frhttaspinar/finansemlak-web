import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import { blogPosts, formatBlogDate } from "../lib/blog";

export default function BlogCards({
  headingLevel = "h3",
}: Readonly<{
  headingLevel?: "h2" | "h3";
}>) {
  const Heading = headingLevel;

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post) => (
        <article
          key={post.slug}
          className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <Link
            href={`/blog/${post.slug}`}
            aria-label={`${post.title} yazısını okuyun`}
            className="relative block h-60 w-full overflow-hidden"
          >
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            />
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 backdrop-blur-sm">
              {post.category}
            </span>
          </Link>

          <div className="flex flex-grow flex-col p-8">
            <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
              <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-4 w-4" aria-hidden="true" />
                {post.readingTime}
              </span>
            </div>

            <Heading className="mb-3 line-clamp-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-brand-navy">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </Heading>
            <p className="mb-6 line-clamp-3 flex-grow text-sm text-slate-600 md:text-base">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              aria-label={`Yazıyı okuyun: ${post.title}`}
              className="mt-auto inline-flex min-h-11 items-center font-semibold text-brand-navy transition-colors hover:text-brand-navy-dark"
            >
              Yazıyı Oku
              <ArrowRight
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
