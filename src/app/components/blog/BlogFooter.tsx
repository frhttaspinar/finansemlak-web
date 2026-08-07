import { MapPin, Phone } from "lucide-react";
import BrandLogo from "../BrandLogo";
import ContactActions from "../ContactActions";
import DeveloperCredit from "../DeveloperCredit";
import {
  ADDRESS_DISPLAY,
  BUSINESS,
  MAPS_EMBED,
  MAPS_LINK,
} from "../../lib/site";

export default function BlogFooter() {
  return (
    <footer
      id="iletisim"
      className="relative overflow-hidden border-t border-slate-200 bg-white text-slate-600 scroll-mt-28"
    >
      <div
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-slate-50 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-start gap-16 md:grid-cols-2">
          <div>
            <div className="mb-8">
              <BrandLogo variant="footer" className="h-16 md:h-20" />
            </div>
            <p className="mb-10 max-w-md text-lg leading-relaxed text-slate-600">
              Amasya’da güvenilir ve şeffaf gayrimenkul danışmanlığı. Doğru mülke
              ulaşmak için bizimle iletişime geçin.
            </p>

            <address className="mb-10 space-y-6 not-italic">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-11 items-start"
              >
                <span className="mr-4 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 transition-colors group-hover:bg-slate-200">
                  <MapPin className="h-5 w-5 text-brand-navy" aria-hidden="true" />
                </span>
                <span className="pt-1.5 text-lg text-slate-700 transition-colors group-hover:text-slate-900">
                  {ADDRESS_DISPLAY}
                </span>
              </a>
              <div className="flex items-center">
                <span className="mr-4 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-slate-100">
                  <Phone className="h-5 w-5 text-brand-navy" aria-hidden="true" />
                </span>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  aria-label={`Telefon ile arayın: ${BUSINESS.phoneDisplay}`}
                  className="min-h-11 text-2xl font-bold tracking-tight text-brand-navy transition-colors hover:text-brand-navy-dark"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </address>

            <ContactActions />
          </div>

          <div className="h-[450px] w-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl">
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${BUSINESS.name} konum haritası`}
            />
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-center gap-1 border-t border-slate-200 pt-8">
          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} {BUSINESS.name}. Tüm hakları saklıdır.
          </p>
          <DeveloperCredit />
        </div>
      </div>
    </footer>
  );
}
