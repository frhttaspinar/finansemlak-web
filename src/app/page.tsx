import { Landmark, MapPin, Phone, ShieldCheck } from "lucide-react";
import {
  ADDRESS_DISPLAY,
  BUSINESS,
  MAPS_EMBED,
  MAPS_LINK,
} from "./lib/site";
import BrandLogo from "./components/BrandLogo";
import ServiceCards from "./components/ServiceCards";
import BlogCards from "./components/BlogCards";
import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsAppButton";
import ContactActions from "./components/ContactActions";
import AnimatedAboutImage from "./components/AnimatedAboutImage";
import Hero09 from "./components/Hero09";
import DeveloperCredit from "./components/DeveloperCredit";

export default function Home() {
  return (
    <>
      <Header />


      <main className="flex-1 pt-20">
        {/* 1. Hero Section (Hero09) */}
        <Hero09
          title="Finans Gayrimenkul Danışmanlığı"
          description="Amasya’da satılık ve kiralık konut, arsa ve iş yeri seçeneklerini keşfedin."
          heroImage="/hero.jpg"
          heroAlt="Finans Gayrimenkul için bahçeli müstakil konut görseli"
          bottomTitle="Finans Gayrimenkul ile"
          bottomTitleLine2="Doğru Yatırım."
          bottomText="Amasya Merkez’deki ofisimizde, şeffaf ve profesyonel bir danışmanlık anlayışıyla sizleri bekliyoruz."
          animation="subtle"
        />

        {/* 2. Hakkımızda */}
        <section id="hakkimizda" className="py-24 bg-white scroll-mt-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedAboutImage />
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Amasya’da,<br /> Gayrimenkul Danışmanlığının Güvenilir Adresi.
                </h2>
                <div className="w-20 h-1 bg-brand-navy mb-8" aria-hidden="true"></div>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Finans Gayrimenkul Danışmanlık olarak Amasya Merkez’deki ofisimizden, satılık ve kiralık konut, arsa ve iş yeri süreçlerinde dürüstlük ve şeffaflık ilkesiyle hizmet veriyoruz.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                  Gayrimenkulü yalnızca bir alım satım işlemi olarak değil, uzun vadeli bir karar olarak ele alıyoruz. Bölgeyi, mülkün gerçek değerini ve ihtiyacınızı birlikte değerlendirerek yol gösteriyoruz.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                        <ShieldCheck className="h-7 w-7 text-brand-navy" aria-hidden="true" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg">Şeffaf Süreç</h3>
                      <p className="text-sm text-slate-500 mt-1">Her aşamada açık iletişim</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                        <Landmark className="h-7 w-7 text-brand-navy" aria-hidden="true" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg">Yerel Uzmanlık</h3>
                      <p className="text-sm text-slate-500 mt-1">Amasya ve çevresine odaklı</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Hizmetlerimiz */}
        <section id="hizmetlerimiz" className="py-24 bg-slate-50 border-t border-slate-100 scroll-mt-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Profesyonel Hizmetlerimiz
              </h2>
              <div className="w-20 h-1 bg-brand-navy mx-auto mb-6" aria-hidden="true"></div>
              <p className="text-lg text-slate-600">
                Amasya ve çevresinde gayrimenkul ihtiyaçlarınıza yönelik kapsamlı ve profesyonel çözümler üretiyoruz.
              </p>
            </div>

            <ServiceCards />
          </div>
        </section>

        {/* 4. Blog & Makale */}
        <section id="blog" className="py-24 bg-white border-t border-slate-100 scroll-mt-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Gayrimenkul Rehberi
              </h2>
              <div className="w-20 h-1 bg-brand-navy mx-auto mb-6" aria-hidden="true"></div>
              <p className="text-lg text-slate-600">
                Gayrimenkul dünyasındaki en güncel gelişmeler, yatırım tavsiyeleri ve piyasa analizleriyle doğru kararlar almanıza yardımcı oluyoruz.
              </p>
            </div>

            <BlogCards />
          </div>
        </section>
      </main>

      {/* 5. İletişim & Footer */}
      <footer id="iletisim" className="relative bg-white border-t border-slate-200 text-slate-600 scroll-mt-28 overflow-hidden">
        {/* Arka planda çok hafif gri bir vurgu */}
        <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-slate-50 blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="mb-8">
                <BrandLogo variant="footer" className="h-16 md:h-20" />
              </div>
              <p className="text-slate-600 mb-10 max-w-md text-lg leading-relaxed">
                Amasya’da güvenilir ve şeffaf gayrimenkul danışmanlığı. Doğru mülke ulaşmak için bizimle iletişime geçin.
              </p>

              <address className="not-italic space-y-6 mb-10">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start group"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 mr-4 group-hover:bg-slate-200 transition-colors">
                    <MapPin className="h-5 w-5 text-brand-navy" aria-hidden="true" />
                  </span>
                  <span className="text-slate-700 text-lg pt-1.5 group-hover:text-slate-900 transition-colors">
                    {ADDRESS_DISPLAY}
                  </span>
                </a>
                <div className="flex items-center">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 mr-4">
                    <Phone className="h-5 w-5 text-brand-navy" aria-hidden="true" />
                  </span>
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    aria-label={`Telefon ile arayın: ${BUSINESS.phoneDisplay}`}
                    className="text-brand-navy hover:text-brand-navy-dark font-bold text-2xl tracking-tight transition-colors"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                </div>
              </address>

              <ContactActions />
            </div>

            {/* Google Maps iframe */}
            <div className="h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${BUSINESS.name} konum haritası`}
              ></iframe>
            </div>
          </div>

          <div className="border-t border-slate-200 mt-20 pt-8 flex flex-col justify-center items-center gap-1">
            <p className="text-slate-500 text-sm text-center">
              © {new Date().getFullYear()} {BUSINESS.name}. Tüm hakları saklıdır.
            </p>
            <DeveloperCredit />
          </div>
        </div>
      </footer>

      {/* 5. Sabit WhatsApp Butonu (Framer Motion nabız animasyonu) */}
      <WhatsAppButton />
    </>
  );
}
