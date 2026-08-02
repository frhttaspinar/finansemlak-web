import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "./lib/site";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı | Finans Gayrimenkul Danışmanlık",
  description: "Aradığınız sayfa bulunamadı.",
  // Kök layout'tan miras kalan "index, follow" değerini ezer.
  // Aksi hâlde sayfada çelişkili iki robots etiketi oluşur.
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-6xl font-bold tracking-tight text-brand-gold">404</p>

      <h1 className="mt-6 text-3xl md:text-4xl font-bold text-slate-900">
        Sayfa Bulunamadı
      </h1>

      <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-600">
        Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Ana sayfadan
        devam edebilir ya da bize doğrudan ulaşabilirsiniz.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="rounded-full bg-brand-navy px-8 py-3.5 font-medium text-white transition-colors hover:bg-brand-navy-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
        >
          Ana Sayfaya Dön
        </Link>
        <a
          href={BUSINESS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-slate-200 px-8 py-3.5 font-medium text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        >
          WhatsApp’tan Ulaşın
        </a>
      </div>
    </main>
  );
}
