import type { MetadataRoute } from "next";
import { BLOG_INDEX_MODIFIED_AT, blogPosts, getBlogUrl } from "./lib/blog";
import { SITE_URL } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: BLOG_INDEX_MODIFIED_AT,
    },
    ...blogPosts.map((post) => ({
      url: getBlogUrl(post.slug),
      lastModified: post.modifiedAt,
    })),
  ];
}
