import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Üst dizindeki başka bir lockfile nedeniyle yanlış proje kökü seçilmesini engeller
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    // 65: LCP hero görseli için (gözle fark edilmeyen ama belirgin bayt kazancı), 75: varsayılan
    qualities: [65, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
