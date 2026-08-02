# Finans Gayrimenkul Danışmanlık

Amasya merkezli **Finans Gayrimenkul Danışmanlık** firmasının tek sayfalık kurumsal web sitesi.
[Next.js](https://nextjs.org) App Router, TypeScript ve Tailwind CSS ile geliştirilmiştir.

## Geliştirme

```bash
npm install
npm run dev
```

Ardından [http://localhost:3000](http://localhost:3000) adresini açın.

## Komutlar

| Komut           | Açıklama                          |
| --------------- | --------------------------------- |
| `npm run dev`   | Geliştirme sunucusu               |
| `npm run build` | Production derlemesi              |
| `npm run start` | Derlenmiş uygulamayı çalıştırır   |
| `npm run lint`  | ESLint denetimi                   |

## Proje yapısı

- `src/app/page.tsx` — ana sayfa (hero, hakkımızda, hizmetler, blog, iletişim/footer)
- `src/app/layout.tsx` — kök layout ve metadata
- `src/app/lib/site.ts` — **tek merkezi veri kaynağı**: domain, iletişim bilgileri, adres,
  logo yolları, harita bağlantıları ve JSON-LD yapılandırılmış verisi
- `src/app/components/` — arayüz bileşenleri
- `src/app/opengraph-image.tsx` — 1200x630 Open Graph görselini üretir
- `src/app/robots.ts`, `src/app/sitemap.ts` — SEO dosyaları

İşletme bilgisi (telefon, adres, sosyal medya, domain) değişirse yalnızca
`src/app/lib/site.ts` güncellenmelidir; diğer dosyalar bu veriyi oradan okur.

## Logolar

- `public/ustlogo.png` — header ve mobil menü
- `public/altlogo.png` — footer

Her iki dosya da 1024x1024 kare ve çevresi şeffaftır. Görünür alan
`src/app/components/BrandLogo.tsx` içinde yalnızca CSS ile kırpılır; görsel
dosyalarının kendisi değiştirilmez.
