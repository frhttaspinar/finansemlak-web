/**
 * Sitenin tek merkezi veri kaynağı.
 * Domain, iletişim bilgisi ve JSON-LD yapılandırılmış verisi yalnızca burada tanımlanır;
 * başka hiçbir dosyada işletme verisi tekrar edilmez.
 */

export const SITE_URL = "https://www.finansgayrimenkulamasya.com";

export const BUSINESS = {
  name: "Finans Gayrimenkul Danışmanlık",
  // Header/mobil menü gibi dar alanlarda kullanılan kısa marka adı
  shortName: "Finans Gayrimenkul",
  phone: "+905512309911",
  phoneDisplay: "0551 230 99 11",
  street: "Dere, Mustafa Kemal Paşa Cd. Merkez İşhanı No:30 Kapı No:102",
  locality: "Amasya Merkez",
  region: "Amasya",
  postalCode: "05100",
  country: "TR",
  instagram: "https://www.instagram.com/finansgayrimenkulamasya",
  whatsapp: `https://wa.me/905512309911?text=${encodeURIComponent(
    "Merhaba, Finans Gayrimenkul üzerinden bilgi almak istiyorum."
  )}`,
} as const;

/** Logo dosyaları: üstteki header/mobil menüde, alttaki footer'da kullanılır. */
export const LOGO_HEADER = "/ustlogo.png";
export const LOGO_FOOTER = "/altlogo.png";

/** Footer ve erişilebilirlik metinlerinde kullanılan tam adres satırı. */
export const ADDRESS_DISPLAY = `${BUSINESS.street}, ${BUSINESS.postalCode} ${BUSINESS.locality}/${BUSINESS.region}`;

/**
 * Harita bağlantıları koordinat içermez; yalnızca doğrulanmış açık adres üzerinden
 * arama yapar. Böylece uydurma enlem/boylam verisi kullanılmamış olur.
 */
const MAPS_QUERY = encodeURIComponent(
  `${BUSINESS.street}, ${BUSINESS.postalCode} ${BUSINESS.locality}, ${BUSINESS.region}`
);
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
export const MAPS_EMBED = `https://maps.google.com/maps?q=${MAPS_QUERY}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

/**
 * Emlak ofisine uygun RealEstateAgent şeması.
 * Puan, yorum sayısı, fiyat aralığı, çalışma saati ve koordinat gibi
 * doğrulanmamış alanlar bilinçli olarak eklenmemiştir.
 */
export function getBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: `${SITE_URL}${LOGO_HEADER}`,
    image: `${SITE_URL}${LOGO_HEADER}`,
    telephone: BUSINESS.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.locality,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
    areaServed: {
      "@type": "City",
      name: "Amasya",
    },
    sameAs: [BUSINESS.instagram],
  };
}
