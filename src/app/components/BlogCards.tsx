"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BUSINESS } from "../lib/site";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Amasya'da 2026 Emlak Yatırım Rehberi",
    excerpt:
      "Amasya'nın değer kazanan bölgeleri ve doğru emlak yatırımının püf noktaları. Geleceğe yatırım yaparken dikkat etmeniz gereken kritik detaylar.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    date: "24 Temmuz 2026",
    category: "Yatırım",
  },
  {
    id: 2,
    title: "Konut Kredisi Faiz Oranları ve Etkileri",
    excerpt:
      "Merkez Bankası kararları sonrası güncellenen konut kredisi faiz oranlarının gayrimenkul piyasasına ve alım gücüne olan doğrudan etkileri.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
    date: "18 Temmuz 2026",
    category: "Finans",
  },
  {
    id: 3,
    title: "Topraktan Konut Almanın Avantajları",
    excerpt:
      "Proje aşamasından gayrimenkul satın almanın avantajları ve riskleri. Müteahhit seçiminde ve sözleşme sürecinde hayat kurtaran tavsiyeler.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    date: "12 Temmuz 2026",
    category: "Rehber",
  },
  {
    id: 4,
    title: "Ekspertiz Raporu Nedir, Neden Önemlidir?",
    excerpt:
      "Gayrimenkul alım satım süreçlerinde yasal zorunluluk haline gelen ekspertiz raporunun doğru okunması ve gerçek değer tespitinin önemi.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    date: "05 Temmuz 2026",
    category: "Hukuk",
  },
  {
    id: 5,
    title: "Ticari Gayrimenkul Yatırımının Sırları",
    excerpt:
      "Dükkan, ofis ve ticari mülk yatırımlarında kira çarpanı hesaplaması ve lokasyon seçiminin işletme karlılığına olan uzun vadeli etkisi.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    date: "28 Haziran 2026",
    category: "Ticari",
  },
  {
    id: 6,
    title: "Kira Sözleşmesi Hazırlarken Bilmeniz Gerekenler",
    excerpt:
      "Hem ev sahibi hem de kiracı haklarını koruyan, güncel yasal mevzuatlara uygun, eksiksiz bir kira sözleşmesinin nasıl hazırlanması gerektiği.",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    date: "20 Haziran 2026",
    category: "Genel",
  },
];

// Hizmet kartlarıyla birebir aynı stagger giriş animasyonu
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function BlogCards() {
  // Hareket azaltma tercihinde kartlar animasyonsuz, doğrudan görünür gelir
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {blogPosts.map((post) => (
        <motion.div
          key={post.id}
          data-animate
          variants={reduceMotion ? undefined : cardVariants}
          whileHover={reduceMotion ? undefined : { scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-300 border border-slate-100 flex flex-col h-full"
        >
          <div className="relative h-60 w-full overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-slate-900 uppercase tracking-wider">
              {post.category}
            </div>
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <div className="text-sm text-slate-500 mb-3">{post.date}</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-brand-navy transition-colors">
              {post.title}
            </h3>
            <p className="text-slate-600 mb-6 line-clamp-3 text-sm md:text-base flex-grow">
              {post.excerpt}
            </p>
            {/* Ayrı blog sayfası bulunmadığı için CTA doğrudan WhatsApp danışma hattına gider */}
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp üzerinden danışın: ${post.title}`}
              className="inline-flex items-center text-brand-navy font-semibold hover:text-brand-navy-dark transition-colors mt-auto"
            >
              Bu Konuda Danışın
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
