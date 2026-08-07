import type { MetadataRoute } from "next";
import { BLOG_INDEX_MODIFIED_AT, blogPosts, getBlogUrl } from "./lib/blog";
import {
  SERVICES_INDEX_URL,
  SERVICES_MODIFIED_AT,
  getServiceUrl,
  services,
} from "./lib/services";
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
    {
      url: SERVICES_INDEX_URL,
      lastModified: SERVICES_MODIFIED_AT,
    },
    ...services.map((service) => ({
      url: getServiceUrl(service.slug),
      lastModified: service.updatedAt,
    })),
  ];
}
