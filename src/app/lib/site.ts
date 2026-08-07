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

/**
 * Ana sayfanın başlık ve açıklaması; hem metadata hem de WebPage JSON-LD
 * düğümü aynı metni kullansın diye tek yerde tutulur.
 */
export const HOME_TITLE = "Finans Gayrimenkul | Amasya Gayrimenkul Danışmanlığı";
export const HOME_DESCRIPTION =
  "Finans Gayrimenkul Danışmanlık; Amasya’da satılık ve kiralık konut, arsa, iş yeri ve gayrimenkul danışmanlığı hizmetleri sunar.";

/** Logo dosyaları: üstteki header/mobil menüde, alttaki footer'da kullanılır. */
export const LOGO_HEADER = "/ustlogo.png";
export const LOGO_FOOTER = "/altlogo.png";

/** Footer ve erişilebilirlik metinlerinde kullanılan tam adres satırı. */
export const ADDRESS_DISPLAY = `${BUSINESS.street}, ${BUSINESS.postalCode} ${BUSINESS.locality}/${BUSINESS.region}`;

/**
 * Google işletme kaydının CID'si. Harita bağlantıları adres metni araması yerine
 * doğrudan bu kayda gider; böylece harita genel bölge yerine işletmenin pinini açar.
 * Koordinat tahmini yapılmaz, uydurma veri kullanılmaz.
 */
const GOOGLE_CID = "2946854600536148059";

/** Google işletme profili — "Haritalarda aç" ve JSON-LD sameAs için. */
export const GOOGLE_MAPS_BUSINESS_URL = `https://www.google.com/maps?cid=${GOOGLE_CID}`;

/** Google'da yorum yazma bağlantısı (aynı işletme kaydına aittir). */
export const GOOGLE_REVIEW_URL = "https://g.page/r/CVvIrmWlVOUoEBM/review";

export const MAPS_LINK = GOOGLE_MAPS_BUSINESS_URL;
export const MAPS_EMBED = `https://maps.google.com/maps?cid=${GOOGLE_CID}&output=embed&z=18`;

/**
 * Emlak ofisine uygun RealEstateAgent şeması.
 * Puan, yorum sayısı, fiyat aralığı, çalışma saati ve koordinat gibi
 * doğrulanmamış alanlar bilinçli olarak eklenmemiştir.
 * "@context" bilinçli olarak yazılmaz; düğüm kök graph altında render edilir.
 */
export function getBusinessJsonLd() {
  return {
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
    /** Google işletme kaydının doğrudan haritadaki karşılığı (CID bağlantısı). */
    hasMap: GOOGLE_MAPS_BUSINESS_URL,
    /**
     * Yalnızca sitede gerçekten içerik üretilen ve ofiste verilen hizmet başlıkları.
     * Doğrulanamayan uzmanlık iddiası eklenmez.
     */
    knowsAbout: [
      "Konut",
      "Arsa",
      "Arazi",
      "Tarla",
      "Ticari Gayrimenkul",
      "Gayrimenkul Danışmanlığı",
      "Tapu Süreçleri",
    ],
    sameAs: [BUSINESS.instagram, GOOGLE_MAPS_BUSINESS_URL],
  };
}

/** Site genelini temsil eden WebSite düğümü; yayıncısı işletme kaydıdır. */
export function getWebSiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS.name,
    inLanguage: "tr-TR",
    publisher: { "@id": `${SITE_URL}/#business` },
  };
}

/**
 * Tüm sayfalarda bir kez render edilen kök graph.
 * Sayfaya özel WebPage/BreadcrumbList düğümleri ilgili sayfa dosyalarında
 * tanımlanır ve buradaki @id'lere bağlanır; aynı düğüm iki kez yazılmaz.
 */
export function getSiteGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [getBusinessJsonLd(), getWebSiteJsonLd()],
  };
}
