import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

/**
 * Site tek sayfa olduğu için yalnızca gerçekten var olan ve
 * HTTP 200 dönen URL listelenir.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
