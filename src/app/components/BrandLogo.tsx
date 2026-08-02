import Image from "next/image";
import { BUSINESS, LOGO_FOOTER, LOGO_HEADER } from "../lib/site";

/**
 * Logo dosyaları 1024x1024 kare ve çevresi tamamen şeffaf.
 * Dosyalar olduğu gibi bırakılıp görünür alan yalnızca CSS ile kırpılır;
 * böylece logo gerçek yüksekliğinde görünür, en-boy oranı korunur ve
 * görsel dosyalarının içeriğine dokunulmamış olur.
 *
 * Aşağıdaki değerler her dosyanın saydam olmayan piksel sınırlarından
 * (bounding box) hesaplanmış, çevresine bir miktar nefes payı bırakılmıştır.
 */
const VARIANTS = {
  header: {
    src: LOGO_HEADER,
    // Kırpma penceresi: x 273-730, y 227-628 (1024x1024 içinde)
    box: { w: 457, h: 401, left: 273, top: 227 },
    sizes: "(max-width: 768px) 200px, 260px",
  },
  footer: {
    src: LOGO_FOOTER,
    // Kırpma penceresi: x 225-776, y 228-724 (1024x1024 içinde)
    box: { w: 551, h: 496, left: 225, top: 228 },
    sizes: "(max-width: 768px) 220px, 300px",
  },
} as const;

export default function BrandLogo({
  variant,
  className = "",
  priority = false,
}: Readonly<{
  variant: keyof typeof VARIANTS;
  /** Yalnızca yükseklik sınıfı verin; genişlik en-boy oranından türetilir. */
  className?: string;
  priority?: boolean;
}>) {
  const { src, box, sizes } = VARIANTS[variant];

  return (
    <span
      className={`relative block overflow-hidden ${className}`}
      style={{ aspectRatio: `${box.w} / ${box.h}` }}
    >
      <Image
        src={src}
        alt={BUSINESS.name}
        width={1024}
        height={1024}
        sizes={sizes}
        priority={priority}
        className="absolute max-w-none"
        style={{
          width: `${(1024 / box.w) * 100}%`,
          height: `${(1024 / box.h) * 100}%`,
          left: `${(-box.left / box.w) * 100}%`,
          top: `${(-box.top / box.h) * 100}%`,
        }}
      />
    </span>
  );
}
