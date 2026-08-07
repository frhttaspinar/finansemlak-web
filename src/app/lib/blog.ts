import { BUSINESS, SITE_URL } from "./site";

export type BlogSource = {
  readonly title: string;
  readonly publisher: string;
  readonly url: string;
};

export type BlogSubsection = {
  readonly heading: string;
  readonly paragraphs: readonly string[];
  readonly bullets?: readonly string[];
};

export type BlogSection = {
  readonly heading: string;
  readonly paragraphs: readonly string[];
  readonly bullets?: readonly string[];
  readonly subsections?: readonly BlogSubsection[];
};

export type BlogPost = {
  readonly slug: string;
  readonly title: string;
  readonly metadataTitle: string;
  readonly description: string;
  readonly excerpt: string;
  readonly category: string;
  readonly publishedAt: string;
  readonly modifiedAt: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly readingTime: string;
  readonly author: string;
  readonly sections: readonly BlogSection[];
  readonly sources: readonly BlogSource[];
  readonly disclaimer: string;
};

export const BLOG_DISCLAIMER =
  "Bu içerik genel bilgilendirme amacıyla hazırlanmıştır; hukuki, finansal veya yatırım danışmanlığı niteliği taşımaz.";

export const BLOG_INDEX_MODIFIED_AT = "2026-08-07";

export const blogPosts = [
  {
    slug: "amasya-emlak-yatirim-rehberi",
    title: "Amasya'da 2026 Emlak Yatırım Rehberi",
    metadataTitle: "Amasya Emlak Yatırım Rehberi | Finans Gayrimenkul",
    description:
      "Amasya’da konut, arsa ve iş yeri değerlendirirken lokasyon, tapu, bütçe ve kullanım amacı bakımından izlenebilecek adımları dikkatle inceleyin.",
    excerpt:
      "Amasya'nın değer kazanan bölgeleri ve doğru emlak yatırımının püf noktaları. Geleceğe yatırım yaparken dikkat etmeniz gereken kritik detaylar.",
    category: "Yatırım",
    publishedAt: "2026-07-24",
    modifiedAt: "2026-08-07",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "Bahçesi ve geniş pencereleri bulunan modern bir müstakil konut",
    readingTime: "8 dk okuma",
    author: BUSINESS.name,
    sections: [
      {
        heading: "Amasya’da yatırım kararına nereden başlanır?",
        paragraphs: [
          "Gayrimenkul seçimi, yalnızca ilandaki fiyatı benzer ilanlarla karşılaştırmaktan ibaret değildir. Amasya’da merkezdeki gündelik yaşam, mahalleler arasındaki ulaşım biçimi, yapıların yaşı, otopark imkânı ve arazinin eğimi aynı bütçeyle çok farklı kullanım deneyimleri doğurabilir. Bu nedenle ilk adım, satın alınacak mülkün yatırım amacı kadar gerçek kullanım amacını da açıkça yazmaktır: oturmak, kiraya vermek, iş yeri olarak kullanmak veya uzun vadeli birikim tutmak gibi.",
          "Amaç belirlendikten sonra bütçeyi yalnızca satış bedeli üzerinden kurmamak gerekir. Tapu ve finansman sürecinde ortaya çıkabilecek masraflar, gerekli tadilatlar, taşınma, sigorta, aidat ve düzenli bakım giderleri toplam maliyetin parçasıdır. Bütçede beklenmeyen giderler için bir pay bırakmak, aceleyle verilen kararların önüne geçer. Kredi kullanılacaksa ödeme planının hane veya işletme nakit akışıyla uyumu ayrıca değerlendirilmelidir.",
        ],
      },
      {
        heading: "Lokasyonu ilan metninden daha geniş okuyun",
        paragraphs: [
          "Amasya Merkez’de bir konut için çarşıya yakınlık önemli olabilir; ancak günlük rota çoğu kişi için okul, iş, hastane, toplu taşıma, market ve sosyal alanlarla birlikte anlam kazanır. Aynı sokak günün farklı saatlerinde trafik, gürültü ve park yeri bakımından başka bir karakter gösterebilir. Mülkü hafta içi ve hafta sonu, mümkünse gündüz ve akşam görmek; çevreyi yalnızca fotoğraflardan değerlendirmekten daha sağlıklı bir tablo sunar.",
          "Arsa ya da gelişme alanındaki bir taşınmaz için yol bağlantısı, parselin biçimi, eğim, altyapı durumu ve plan kararları birlikte incelenmelidir. Yakında görülen bir proje, tek başına değer artışı garantisi değildir. Projenin resmî durumu, uygulama takvimi ve taşınmaza gerçek etkisi yetkili kurumlardan teyit edilmelidir. Söylentiye dayalı beklenti yerine bugünkü kullanım kabiliyeti ve belgelendirilebilir bilgiler üzerinden ilerlemek riski azaltır.",
        ],
      },
      {
        heading: "Konut, arsa ve iş yeri aynı ölçütlerle değerlendirilmez",
        paragraphs: [
          "Konut değerlendirmesinde net kullanım alanı, oda yerleşimi, ışık alma, ısınma, kat, asansör, otopark ve binanın ortak alanları öne çıkar. Amasya’nın mevsim koşullarında yalıtım ve ısınma sistemi, aylık gider kadar konforu da etkiler. Dairenin cepheleri ve çevresindeki yapılaşma gün ışığını değiştirebilir. Yalnızca brüt metrekareye odaklanmak yerine fiilen kullanılabilen alanı ve planın günlük yaşama uygunluğunu görmek gerekir.",
          "Arsada imar durumu, parsel sınırları, hisseli mülkiyet, yola cephe ve yapılaşma koşulları; ticari mülkte ise görünürlük, yaya ve araç akışı, yükleme imkânı, kullanım niteliği ve hedef müşteri profili daha belirleyici olabilir. Bir dükkânın yoğun bir noktada bulunması her faaliyet için uygun olduğu anlamına gelmez. Yapılacak işin gerektirdiği ruhsat ve fiziksel koşullar ilgili kurumlar ve uzmanlarla kontrol edilmelidir.",
        ],
      },
      {
        heading: "Belge kontrolünü tekliften önce planlayın",
        paragraphs: [
          "Tapu kaydı, malik bilgisi, taşınmazın niteliği, pay durumu ve kayıtlardaki şerh ya da kısıtlamalar satın alma sürecinin temel kontrol alanlarıdır. Parsel bilgileri TKGM’nin resmî araçlarından ön incelemeye tabi tutulabilir; ancak ekrandaki genel bilgi, tapu kaydının ve yetkili incelemenin yerine geçmez. Vekâletle işlem, miras, hisseli tapu veya devam eden bir hukuki süreç varsa belge seti daha ayrıntılı değerlendirilmelidir.",
          "Yapılı taşınmazlarda ruhsat, yapı kullanma izin belgesi, onaylı proje ve mevcut kullanımın projeyle uyumu önem taşır. Belediye ve tapu kayıtlarındaki bilgilerle fiziksel durum arasında fark görülürse, bunun mali ve hukuki etkisi anlaşılmadan kapora verilmemelidir. Belge talebini son güne bırakmamak hem alıcıya inceleme zamanı verir hem de satıcının hazırlık düzeyini görmeye yardımcı olur.",
        ],
        bullets: [
          "Tapu ve parsel bilgilerinin yetkili kanallardan teyidi",
          "Yapı ve kullanım belgelerinin taşınmazla karşılaştırılması",
          "Aidat, vergi ve düzenli giderlerin güncel durumunun sorulması",
          "Kapora ve teklif koşullarının yazılı, açık ve izlenebilir tutulması",
        ],
      },
      {
        heading: "Fiyatı değil, karşılaştırılabilir değeri araştırın",
        paragraphs: [
          "İlan fiyatları satıcının beklentisini gösterir; gerçekleşmiş satış bedelini veya tek başına piyasa değerini göstermez. Karşılaştırma yapılırken aynı mahallede bulunmak yeterli değildir. Bina yaşı, kat, cephe, manzara, yenileme düzeyi, otopark, asansör, arsa payı ve satış koşulları mümkün olduğunca benzer olmalıdır. Çok farklı özelliklere sahip ilanların metrekare fiyatını ortalamak yanıltıcı sonuç verebilir.",
          "Kira geliri hedefleniyorsa olası brüt gelirin yanında boş kalma süresi, bakım, aidat, vergi ve kiracı değişim maliyetleri düşünülmelidir. Gelecekteki satış kolaylığı için hedef alıcı kitlesinin genişliği, mülkün standartlara uygunluğu ve finansmana erişilebilirliği önem kazanır. Bu ölçütler kesin getiri üretmez; farklı seçenekleri aynı çerçevede karşılaştırmaya yarayan bir karar disiplini sağlar.",
        ],
      },
      {
        heading: "Saha incelemesini sistemli yapın",
        paragraphs: [
          "İlk ziyarette etkileyici görünen bir detay, yapısal veya işlevsel bir sorunu gölgeleyebilir. İnceleme sırasında duvar ve tavanlarda nem izi, pencere ve kapıların çalışması, su basıncı, elektrik panosu, ısıtma sistemi, ortak alanlar ve çevresel gürültü gözden geçirilmelidir. Bu gözlemler teknik inceleme değildir; uzman çağrılması gereken noktaları belirleyen bir ön kontroldür.",
          "Fotoğraf ve notları her mülk için aynı başlıklarla tutmak, birkaç seçenek gezildiğinde hafızaya güvenme sorununu azaltır. Satıcıya sorulan soruların yanıtları ve sonradan gönderilecek belgeler yazılı biçimde takip edilebilir. Yapının güvenliği veya tesisatın durumu hakkında kuşku varsa ilgili mühendis, mimar ya da yetkili uzmanlardan görüş alınması uygun olur.",
        ],
      },
      {
        heading: "Kararı senaryolarla sınayın",
        paragraphs: [
          "Satın alma kararını tek bir iyimser senaryoya bağlamak yerine birkaç olasılıkla düşünmek yararlıdır. Taşınmaz bir süre kiralanamazsa, beklenen tadilat uzarsa veya hane geliri değişirse ödeme planı sürdürülebilir mi? Kullanım ihtiyacı birkaç yıl içinde değişirse mülk kolayca uyarlanabilir mi? Bu soruların amacı kararı ertelemek değil, taşıyabileceğiniz risk sınırını görünür kılmaktır.",
          "Amasya’da yerel bilgi, saha gözlemi ve resmî belge kontrolü birlikte kullanıldığında daha dengeli bir değerlendirme yapılabilir. Kısa özetle: amacı netleştirin, toplam bütçeyi hesaplayın, lokasyonu farklı zamanlarda görün, belgeleri teyit edin, karşılaştırılabilir seçenekler bulun ve gerekli uzman görüşlerini işlemden önce alın. Finans Gayrimenkul, seçenekleri bu çerçevede ele almanız için yerel süreçte size eşlik edebilir.",
          "Son karardan önce seçenekleri tek sayfalık bir karşılaştırma tablosuna aktarmak da faydalıdır. Satış bedeli, toplam başlangıç gideri, aylık gider, belge durumu, ulaşım, fiziksel ihtiyaçlar ve olası onarım başlıklarına aynı ölçekte not verin. Duygusal olarak öne çıkan mülkün temel ihtiyaçları karşılayıp karşılamadığı böylece daha görünür olur. Eksik belge veya yanıtlanan bir soru olduğunda karar puanını güncelleyin; sözlü bilgiyi doğrulanmış kayıtla aynı ağırlıkta değerlendirmeyin ve notları tarihleriyle birlikte saklayın.",
        ],
      },
    ],
    sources: [
      {
        title: "Tapu İşlemlerinde Dikkat Edilecek Hususlar",
        publisher: "Tapu ve Kadastro Genel Müdürlüğü",
        url: "https://www.tkgm.gov.tr/tapu-islemlerinde-dikkat-edilecek-hususlar",
      },
      {
        title: "Parsel Sorgu",
        publisher: "Tapu ve Kadastro Genel Müdürlüğü",
        url: "https://www.tkgm.gov.tr/parsel-sorgu-4",
      },
      {
        title: "Konut Fiyat Endeksi",
        publisher: "Türkiye Cumhuriyet Merkez Bankası",
        url: "https://www.tcmb.gov.tr/wps/wcm/connect/tr/tcmb%2Btr/main%2Bmenu/istatistikler/reel%2Bsektor%2Bistatistikleri/konut%2Bfiyat%2Bendeksi/",
      },
    ],
    disclaimer: BLOG_DISCLAIMER,
  },
  {
    slug: "konut-kredisi-faizlerinin-emlak-piyasasina-etkisi",
    title: "Konut Kredisi Faiz Oranları ve Etkileri",
    metadataTitle: "Konut Kredisi ve Emlak Piyasası | Finans Gayrimenkul",
    description:
      "Konut kredisi maliyetlerinin alım gücü, konut talebi, satıcı beklentisi ve Amasya’daki gayrimenkul kararları üzerindeki etkisini bu rehberle anlayın.",
    excerpt:
      "Merkez Bankası kararları sonrası güncellenen konut kredisi faiz oranlarının gayrimenkul piyasasına ve alım gücüne olan doğrudan etkileri.",
    category: "Finans",
    publishedAt: "2026-07-18",
    modifiedAt: "2026-08-07",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
    imageAlt: "Masa üzerinde hesap makinesi, kalem ve finansal planlama belgeleri",
    readingTime: "8 dk okuma",
    author: BUSINESS.name,
    sections: [
      {
        heading: "Faiz oranı neden tek başına yeterli değildir?",
        paragraphs: [
          "Konut kredisi konuşulurken çoğu zaman ilk bakılan bilgi ilan edilen aylık oran olur. Oysa bir hanenin gerçek kararını vade, peşinat, kredi tutarı, ücretler, sigorta kalemleri ve toplam geri ödeme birlikte belirler. Aynı oran, farklı vade ve kredi tutarlarında bütçeye farklı yük bindirebilir. Bu nedenle güncel sayısal bir oranı genelleyerek ‘uygun’ veya ‘pahalı’ sonucuna varmak yerine kişiye sunulan teklifin tamamını okumak gerekir.",
          "Bankaların değerlendirme ölçütleri, kampanyaları ve müşteriye özel koşulları zaman içinde değişebilir. İnternette görülen temsilî hesaplar nihai teklif değildir. Krediyle ev almayı düşünen kişinin güncel koşulları doğrudan bankalardan karşılaştırması; gerektiğinde finansal danışman veya ilgili uzmandan destek alması daha sağlıklıdır. Bu yazı, oran tahmini yapmak yerine kredi maliyetinin emlak kararlarına hangi kanallardan yansıdığını açıklar.",
        ],
      },
      {
        heading: "Aylık ödeme ve alım gücü ilişkisi",
        paragraphs: [
          "Borçlanma maliyeti yükseldiğinde aynı gelirle taşınabilecek kredi tutarı genellikle daralır veya aynı tutarın aylık ödemesi artar. Alıcı, daha yüksek peşinat hazırlamak, daha küçük bir konuta yönelmek, farklı bir lokasyon değerlendirmek ya da kararını ertelemek zorunda kalabilir. Maliyetler gerilediğinde ise daha fazla hane krediye erişebilir; ancak bu durum konut fiyatlarının otomatik olarak düşeceği ya da yükseleceği anlamına gelmez.",
          "Amasya’da merkezi konum, yapı yaşı, kat, otopark, ısınma ve ulaşım gibi özellikler seçeneklerin fiyatını ayrıştırır. Kredi kapasitesi azaldığında bu özellikler arasında öncelik sırası kurmak önem kazanır. ‘En yüksek krediye ulaşmak’ yerine, gelirde dalgalanma olduğunda da sürdürülebilecek aylık ödemeyi belirlemek daha güvenli bir başlangıçtır. Hane bütçesindeki temel giderler ve acil durum payı korunmalıdır.",
        ],
      },
      {
        heading: "Konut talebi ve satıcı beklentileri nasıl etkilenir?",
        paragraphs: [
          "Finansman maliyetindeki değişimler talebi etkileyebilir, fakat piyasanın tepkisi her mülkte ve her dönemde aynı olmaz. Krediye daha az ihtiyaç duyan alıcılar, belirli nitelikteki konutlara olan ihtiyaç, yeni arzın sınırlılığı ve satıcıların bekleme gücü fiyat davranışını farklılaştırır. Bu yüzden ulusal bir eğilimi Amasya’daki her mahalleye veya her taşınmaza aynen uygulamak doğru değildir.",
          "Satıcı tarafında da finansman koşulları pazarlık alanını tek başına belirlemez. Satışın aciliyeti, mülkün boş ya da kiracılı olması, tapu ve yapı belgelerinin hazır olması, tadilat ihtiyacı ve benzer seçeneklerin sayısı önemlidir. Piyasanın yavaşladığı düşünülen bir dönemde bile doğru fiyatlanan, belgeleri düzenli ve kullanıma hazır bir konut ilgi görebilir. Karşılaştırma, ilan süresi ve gerçek nitelikler üzerinden yapılmalıdır.",
        ],
      },
      {
        heading: "Toplam kredi maliyetini nasıl karşılaştırabilirsiniz?",
        paragraphs: [
          "Farklı banka tekliflerini yalnızca aylık oranla karşılaştırmak eksik kalır. Aynı kredi tutarı ve aynı vade üzerinden aylık taksit, toplam geri ödeme, tahsis ücreti, ekspertiz ve sigorta gibi kalemler yan yana yazılmalıdır. Erken ödeme veya yeniden yapılandırma düşünülüyorsa uygulanabilecek koşullar sözleşme ve banka açıklamaları üzerinden öğrenilmelidir. Tüketiciye sunulan ön bilgilendirme belgeleri dikkatle okunmalıdır.",
          "Peşinatın tamamını kullanmak da her zaman en dayanıklı seçenek olmayabilir; taşınma, tadilat ve beklenmeyen giderler için nakit payı gerekebilir. Öte yandan daha düşük kredi tutarı toplam finansman yükünü azaltabilir. Bu denge kişinin gelir düzenine, mevcut borçlarına ve planlanan kullanım süresine bağlıdır. Kişisel karar için banka teklifi ve profesyonel değerlendirme gerekir.",
        ],
        bullets: [
          "Teklifleri aynı tutar ve vade üzerinden karşılaştırın.",
          "Aylık taksitle birlikte toplam geri ödemeyi inceleyin.",
          "Ücret, sigorta ve ekspertiz kalemlerini ayrı ayrı sorun.",
          "Gelir azalması veya ek gider senaryosunda bütçeyi yeniden test edin.",
        ],
      },
      {
        heading: "Ekspertiz değeri ile satış fiyatını karıştırmayın",
        paragraphs: [
          "Kredi sürecinde banka tarafından yaptırılan değerleme, taşınmazın özelliklerini ve ilgili verileri belirli bir yöntemle inceleyen profesyonel bir çalışmadır. Satıcının istediği bedel, tarafların anlaştığı satış fiyatı ve değerleme sonucundaki değer aynı olmak zorunda değildir. Bankanın kullandırabileceği tutar da yalnızca alıcının gelirine değil, kendi kredi politikalarına ve değerleme sonucuna bağlı olabilir.",
          "Bu nedenle kapora vermeden önce finansman olasılığını ve değer farkı halinde bütçenin nasıl tamamlanacağını konuşmak önemlidir. Raporda tapu, proje veya fiziksel durumla ilgili bir tespit varsa, bunun anlamı banka ve lisanslı değerleme uzmanıyla netleştirilebilir. Kredi çıkacağı varsayımına dayanarak geri dönüşü zor bir sözleşme kurmak yerine, finansman koşullarını yazılı ve açık biçimde yönetmek gerekir.",
        ],
      },
      {
        heading: "Faiz değişimini beklemek mi, ihtiyaca göre hareket etmek mi?",
        paragraphs: [
          "Gelecekteki faiz oranını veya konut fiyatını kesin biçimde öngörmek mümkün değildir. Bekleme kararı verilirken mevcut kira gideri, taşınma ihtiyacı, peşinatın korunması, uygun mülkün bulunabilirliği ve aylık ödeme gücü birlikte düşünülmelidir. Sırf oranların değişeceği beklentisiyle bütçe dışına çıkmak da uygun bir konutu hiçbir hazırlık yapmadan ertelemek de risk taşıyabilir.",
          "Bir karar takvimi oluşturmak belirsizliği yönetmeye yardımcı olur: bütçe üst sınırını belirlemek, bankalardan güncel teklif almak, uygun mülkleri belge ve nitelik açısından karşılaştırmak, belirli aralıklarla koşulları yeniden değerlendirmek. Böylece karar tek bir haber başlığına değil, güncel kişisel verilere dayanır. Finans Gayrimenkul mülk karşılaştırmasında destek olabilir; kredi kararı için banka ve yetkili uzmanların güncel bilgisi esas alınmalıdır.",
        ],
      },
      {
        heading: "Kısa özet: dayanıklı bir finansman planı kurun",
        paragraphs: [
          "Konut kredisi maliyeti alım gücünü, talebi ve pazarlık koşullarını etkiler; fakat lokasyon, arz, mülk niteliği ve satıcı ihtiyacıyla birlikte çalışır. Sağlıklı değerlendirme için ilan edilen oran yerine toplam maliyeti, ödeme planını ve kredi dışındaki giderleri görünür hale getirin. Kredi teklifi ile satış sürecinin zamanlamasını uyumlu yönetin ve ekspertiz sonucunun bütçeye olası etkisini önceden düşünün.",
          "Amasya’da seçenekleri gezerken konutun gerçek kullanım değerini kredi kapasitesinden bağımsız olarak sınayın. Aylık ödeme sınırı, acil durum payı ve uzun vadeli ihtiyaçlar korunuyorsa karar daha dayanıklı olur. Güncel oran ve uygunluk koşulları için bankalardan yazılı bilgi alın; sözleşme veya kişisel finansman konusunda gerektiğinde ilgili profesyonellere başvurun.",
          "Banka görüşmelerini aynı hafta içinde ve aynı varsayımlarla yapmak, tekliflerin karşılaştırılmasını kolaylaştırır. Görüşme tarihini, vade ve kredi tutarını, toplam geri ödemeyi ve teklifin geçerlilik süresini not edin. Satın alınacak mülk değiştiğinde ekspertiz ve kullandırım koşullarının da değişebileceğini hesaba katın. Ön onay veya örnek hesaplamayı kesin finansman taahhüdü gibi görmeyin; satış takvimini bankanın yazılı süreciyle uyumlu kurun ve her değişiklikte bütçe sınırınızı yeniden kontrol ederek sonucu yazılı kayda alın.",
        ],
      },
    ],
    sources: [
      {
        title: "Konut Fiyat Endeksi",
        publisher: "Türkiye Cumhuriyet Merkez Bankası",
        url: "https://www.tcmb.gov.tr/wps/wcm/connect/tr/tcmb%2Btr/main%2Bmenu/istatistikler/reel%2Bsektor%2Bistatistikleri/konut%2Bfiyat%2Bendeksi/",
      },
      {
        title: "Konut ve İş Yeri Satış İstatistikleri",
        publisher: "Türkiye İstatistik Kurumu",
        url: "https://veriportali.tuik.gov.tr/tr/press/58344/metadata",
      },
      {
        title: "Tüketicinin Korunması Hakkında Kanun",
        publisher: "Mevzuat Bilgi Sistemi",
        url: "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6502.pdf",
      },
    ],
    disclaimer: BLOG_DISCLAIMER,
  },
  {
    slug: "topraktan-konut-almanin-avantajlari",
    title: "Topraktan Konut Almanın Avantajları",
    metadataTitle: "Topraktan Konut Almanın Avantajları | Finans Gayrimenkul",
    description:
      "Proje aşamasında konut alırken fiyat, ödeme planı, sözleşme, proje belgeleri ve teslim risklerini Amasya bağlamında dengeli biçimde değerlendirin.",
    excerpt:
      "Proje aşamasından gayrimenkul satın almanın avantajları ve riskleri. Müteahhit seçiminde ve sözleşme sürecinde hayat kurtaran tavsiyeler.",
    category: "Rehber",
    publishedAt: "2026-07-12",
    modifiedAt: "2026-08-07",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    imageAlt: "Şantiye alanında yükselen konut yapısı ve inşaat vinçleri",
    readingTime: "8 dk okuma",
    author: BUSINESS.name,
    sections: [
      {
        heading: "Topraktan konut almak ne anlama gelir?",
        paragraphs: [
          "Günlük kullanımda ‘topraktan konut’ ifadesi, yapımı başlamamış veya devam eden bir projeden bağımsız bölüm edinmeyi anlatır. Alıcı tamamlanmış bir daireyi değil, sözleşmede tanımlanan gelecekteki teslimi ve projedeki haklarını değerlendirir. Bu nedenle örnek daire, broşür ve görseller karar için tek başına yeterli değildir; arsa, ruhsat, proje, satış modeli ve sözleşme bir bütün olarak incelenmelidir.",
          "Amasya’da yeni konut arayanlar için proje aşaması farklı ödeme seçenekleri veya ihtiyaçlara uygun bir daire seçme fırsatı sunabilir. Bunun karşılığında teslim zamanı, yapım kalitesi, proje değişiklikleri ve yüklenicinin işi tamamlama kapasitesi gibi belirsizlikler üstlenilir. Avantaj ve risk aynı işlemin iki yönüdür; yalnızca başlangıç fiyatına bakmak dengeli bir değerlendirme sağlamaz.",
        ],
      },
      {
        heading: "Olası avantajları gerçekçi biçimde değerlendirin",
        paragraphs: [
          "Projenin erken aşamasında kat, cephe veya plan seçeneği daha geniş olabilir. Ödeme takvimi, satış koşullarına göre zamana yayılabilir ve alıcı taşınma tarihini önceden planlayabilir. Tamamlanmış benzer konutlarla fiyat farkı bulunması mümkündür; ancak bu fark garanti edilmiş kazanç değildir. Bekleme süresi, finansman maliyeti ve proje riski hesaba katıldığında karşılaştırmanın sonucu değişebilir.",
          "Yeni yapılarda güncel kullanım beklentilerine uygun ortak alanlar, otopark, yalıtım veya tesisat çözümleri planlanmış olabilir. Yine de broşürde belirtilen her özellik teslim edilen bağımsız bölüme aynı şekilde yansımayabilir. Teknik şartname, onaylı proje ve sözleşme ekleri, tanıtım metninden daha belirleyicidir. Seçiminizi ‘gelecekte kesin değerlenir’ düşüncesi yerine kullanım ihtiyacı ve belgelenmiş taahhütler üzerinden yapın.",
        ],
      },
      {
        heading: "Arsa ve proje belgeleri neden önemlidir?",
        paragraphs: [
          "Projenin üzerinde yükseldiği taşınmazın tapu bilgileri, malikleri, yüklenicinin satış yetkisi ve varsa takyidatlar araştırılmalıdır. Arsa sahibi ile yüklenici farklıysa taraflar arasındaki ilişkinin satışa etkisi önem kazanır. Parsel bilgisi TKGM araçlarıyla ön incelemeye açılabilir; resmî kayıt ve sözleşme değerlendirmesi için yetkili kanallar ile hukuk uzmanı desteği gerekebilir.",
          "Yapı ruhsatı, onaylı mimari proje, bağımsız bölüm numarası ve projenin ilgili belediyedeki durumu teslim edilecek şeyin sınırlarını anlamaya yardımcı olur. Henüz oluşmamış bir bağımsız bölüm için kullanılan satış modelinin hukuki niteliği ayrıca incelenmelidir. Belge gösterilmemesi, ‘sonra tamamlanacak’ denmesi veya sözlü güvencelerin yazılı metne alınmaması önemli bir uyarı işaretidir.",
        ],
        bullets: [
          "Tapu, parsel ve malik bilgileri",
          "Yapı ruhsatı ve onaylı proje",
          "Bağımsız bölümün plandaki yeri, cephesi ve net kullanım alanı",
          "Teknik şartname ile teslimde kullanılacak malzeme ve donanımlar",
          "Satış yapan tarafın yetkisi ve imza belgeleri",
        ],
      },
      {
        heading: "Yükleniciyi yalnızca önceki görsellerle değerlendirmeyin",
        paragraphs: [
          "Yüklenicinin tamamladığı projeleri yerinde görmek, teslim tarihleri ve satış sonrası yaklaşımı hakkında fikir verebilir. Şirketin ticari bilgileri, yetki belgeleri, devam eden proje sayısı ve işin finansman modeli araştırılabilir. Önceki bir projenin başarılı olması yeni teslimi garanti etmez; ancak doğrulanabilir geçmiş, yalnızca reklama dayanan bir karardan daha güçlü veri sağlar.",
          "Şantiyedeki ilerlemenin ödeme takvimiyle ilişkisi sorulmalıdır. Ödemelerin kişisel hesaplara yönlendirilmesi, belgesiz tahsilat veya acele baskısı risk oluşturur. Makbuz, fatura ve sözleşmeyle uyumlu banka kayıtları saklanmalıdır. Projenin teknik yönü için mimar veya mühendis, hukuki yapı için gayrimenkul alanında çalışan bir avukat, finansman için banka veya ilgili uzman görüşü gerekebilir.",
        ],
      },
      {
        heading: "Sözleşmede hangi başlıklar açık olmalı?",
        paragraphs: [
          "Sözleşme, bağımsız bölümü tereddüde yer bırakmayacak biçimde tanımlamalıdır: blok, kat, numara, cephe, brüt ve net alan, eklentiler ve arsa payına ilişkin bilgiler mümkün olduğunca açık olmalıdır. Toplam bedel, ödeme tarihleri, teslim tarihi, teslimin hangi koşullarda gerçekleşmiş sayılacağı ve tapu devrinin zamanı yazılmalıdır. Teknik şartname ve planların sözleşme eki olması uyuşmazlık riskini azaltır.",
          "Gecikme, proje değişikliği, alan farkı, ayıplı teslim, cayma veya sözleşmenin sona ermesi halinde uygulanacak yöntemler uzmanla değerlendirilmelidir. Tek taraflı ve sınırsız değişiklik yetkisi veren hükümler alıcı açısından belirsizlik yaratabilir. Tüketici işlemi niteliğindeki satışlarda uygulanabilecek mevzuat ve şekil şartları somut olaya göre değişebileceğinden, imza öncesi profesyonel hukuki görüş alınması uygundur.",
        ],
      },
      {
        heading: "Teslim tarihini bir takvim değil, süreç olarak görün",
        paragraphs: [
          "İnşaatın fiziksel olarak bitmesi, konutun tüm yönleriyle kullanıma hazır olduğu anlamına gelmeyebilir. Ortak alanlar, altyapı bağlantıları, asansör, çevre düzeni ve gerekli idari belgeler teslim deneyimini etkiler. Anahtar tesliminde bağımsız bölüm teknik şartnameyle karşılaştırılmalı; eksik ve ayıplar fotoğraf ve tutanakla kayıt altına alınmalıdır. Gerekirse teknik uzmanla kontrol yapılmalıdır.",
          "Mevcut kira sözleşmesini sonlandırmak veya taşınma planını kesin tarihe bağlamak için teslim riskine karşı pay bırakmak yararlıdır. Gecikme halinde geçici konaklama, kira ve depolama gibi maliyetlerin bütçeye etkisi düşünülmelidir. Proje ilerledikçe düzenli saha ziyareti yapmak, yazılı ilerleme bilgisi istemek ve ödeme belgelerini dosyalamak süreci görünür tutar.",
        ],
      },
      {
        heading: "Fiyat karşılaştırmasını toplam maliyetle yapın",
        paragraphs: [
          "Proje fiyatı ile bitmiş bir konutun fiyatını karşılaştırırken bekleme süresindeki kira, finansman maliyeti, olası teslim gecikmesi, sonradan yapılacak donanım ve taşınma giderleri hesaba katılmalıdır. Vade farkı içeren ödeme planlarında toplam ödenecek tutar açıkça görülmelidir. İndirim veya kampanya söyleminin hangi liste fiyatına göre hesaplandığı sorulmalıdır.",
          "Amasya’daki alternatifleri aynı lokasyon, erişim, yapı niteliği ve kullanım amacı üzerinden yan yana koyun. Proje tamamlandığında çevrenin ve ulaşımın nasıl olacağına ilişkin varsayımları resmî belgelerden ayrıştırın. Muhtemel gelecek değeri kesin gelir gibi bütçeye yazmayın. Karar, proje tamamlanmasa veya gecikse bile taşıyabileceğiniz mali sınırlar içinde kalmalıdır.",
        ],
      },
      {
        heading: "Kısa özet: belgelenmiş taahhütlere güvenin",
        paragraphs: [
          "Topraktan konut, daha geniş seçim ve farklı ödeme planı gibi imkânlar sunabilir; aynı zamanda teslim ve sözleşme riski taşır. Arsa ve proje kayıtlarını, satış yetkisini, yüklenici geçmişini, teknik şartnameyi ve ödeme akışını birlikte inceleyin. Sözlü vaatleri yazılı eklerde görmeden karar vermeyin; kapora ve ödemeleri izlenebilir belgelerle yürütün.",
          "Konutun kullanım uygunluğunu Amasya’daki günlük yaşam ihtiyaçlarınızla sınayın ve teslim sonrası toplam maliyeti hesaplayın. Teknik, hukuki veya finansal belirsizlik varsa ilgili lisanslı ya da yetkili uzmana başvurun. Finans Gayrimenkul, proje seçeneklerini ve yerel konum özelliklerini karşılaştırmanızda danışmanlık sunabilir; nihai sözleşme incelemesi profesyonel hukuk hizmeti gerektirebilir.",
          "İnceleme dosyanızda güncel tapu ve proje belgelerini, imzalanacak sözleşme ile tüm eklerini, ödeme kayıtlarını ve yükleniciyle yapılan yazışmaları birlikte saklayın. Teslim tarihine kadar önemli değişiklikleri yalnızca telefon görüşmesine bırakmayın. Düzenli kayıt, taahhütlerin hangi tarihte ve hangi kapsamda verildiğini görmeyi kolaylaştırır; tek başına teslim güvencesi oluşturmasa da uzman incelemesi ve olası başvurular için daha açık bir süreç sağlar.",
        ],
      },
    ],
    sources: [
      {
        title: "Tapu İşlemlerinde Dikkat Edilecek Hususlar",
        publisher: "Tapu ve Kadastro Genel Müdürlüğü",
        url: "https://www.tkgm.gov.tr/tapu-islemlerinde-dikkat-edilecek-hususlar",
      },
      {
        title: "Tüketicinin Korunması Hakkında Kanun",
        publisher: "Mevzuat Bilgi Sistemi",
        url: "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6502.pdf",
      },
      {
        title: "Yapı İzin İstatistikleri",
        publisher: "Türkiye İstatistik Kurumu",
        url: "https://veriportali.tuik.gov.tr/tr/press/58303",
      },
    ],
    disclaimer: BLOG_DISCLAIMER,
  },
  {
    slug: "ekspertiz-raporu-nedir",
    title: "Ekspertiz Raporu Nedir, Neden Önemlidir?",
    metadataTitle: "Ekspertiz Raporu Nedir? | Finans Gayrimenkul Amasya",
    description:
      "Gayrimenkul ekspertiz raporunun kapsamını, değer yaklaşımını, tapu ve proje incelemelerini ve rapor okunurken dikkat edilecek noktaları öğrenin.",
    excerpt:
      "Gayrimenkul alım satım süreçlerinde yasal zorunluluk haline gelen ekspertiz raporunun doğru okunması ve gerçek değer tespitinin önemi.",
    category: "Hukuk",
    publishedAt: "2026-07-05",
    modifiedAt: "2026-08-07",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "Masada raporları inceleyen ve not alan gayrimenkul uzmanları",
    readingTime: "8 dk okuma",
    author: BUSINESS.name,
    sections: [
      {
        heading: "Ekspertiz raporu neyi anlatır?",
        paragraphs: [
          "Gayrimenkul ekspertiz raporu, bir taşınmazın belirli bir tarihteki özelliklerini, hukuki ve fiziksel verilerini, çevresini ve değerleme yaklaşımını sistemli biçimde ele alan profesyonel çalışmadır. Rapor yalnızca tek bir fiyat rakamından oluşmaz. Değere nasıl ulaşıldığını, hangi belgelerin incelendiğini, hangi varsayımların kullanıldığını ve taşınmazla ilgili hangi sınırlamaların görüldüğünü anlamak için bütün olarak okunmalıdır.",
          "Değerleme sonucu sonsuza kadar geçerli bir etiket değildir. Piyasa koşulları, taşınmazın durumu, çevredeki arz ve rapor tarihinden sonra ortaya çıkan bilgiler sonucu etkileyebilir. Ayrıca satış fiyatı, satıcı beklentisi ve tarafların pazarlığı ekspertiz değerinden farklı olabilir. Rapor, kararın yerini alan bir garanti değil; karar verirken kullanılan bağımsız ve belgeli bir değerlendirme aracıdır.",
        ],
      },
      {
        heading: "Kim hazırlar ve hangi amaçlarla kullanılır?",
        paragraphs: [
          "Sermaye Piyasası Kurulu düzenlemeleri kapsamında gayrimenkul değerleme hizmeti veren kuruluşlar ve lisanslı uzmanlar için yetki ve çalışma çerçevesi bulunur. Banka kredilerinde değerleme süreci genellikle bankanın yetkilendirdiği kanal üzerinden yürütülür. Bireysel alım satım, ortaklığın giderilmesi, şirket işlemleri veya portföy değerlendirmesi gibi farklı amaçlarda raporun kapsamı ve dayandığı tarih değişebilir.",
          "Her gayrimenkul satışında aynı tür raporun otomatik olarak zorunlu olduğu varsayılmamalıdır. İşlemin tarafları, vatandaşlık durumu, finansman şekli ve yürürlükteki düzenlemeler farklı gereklilikler doğurabilir. Somut işlemin güncel şartları banka, tapu müdürlüğü, lisanslı değerleme kuruluşu veya hukukçu gibi yetkili kaynaklardan teyit edilmelidir. Kart açıklamasındaki genel ifade bu ayrımı tek başına yansıtmayabilir.",
        ],
      },
      {
        heading: "Raporda hangi bilgiler yer alır?",
        paragraphs: [
          "Raporlarda taşınmazın adresi, tapu niteliği, parsel ve bağımsız bölüm bilgileri, yapı özellikleri, kullanım durumu, çevresel bağlantılar ve değerleme yöntemine ilişkin açıklamalar görülebilir. Yapılı bir mülkte onaylı proje ile mevcut durumun karşılaştırılması, ruhsat ve yapı kullanma izin bilgileri değerlendirmeye dâhil olabilir. İnceleme kapsamı, raporun amacı ve erişilebilen belgelere göre değişebilir.",
          "Amasya’daki bir konutta kat, cephe, manzara, erişim, yapı yaşı, ısınma ve otopark gibi özellikler karşılaştırmayı etkiler. Arsa için imar, eğim, biçim, yola cephe ve altyapı; ticari mülk için kullanım niteliği, görünürlük ve pazar koşulları öne çıkabilir. Rapordaki her veri aynı ağırlıkta değildir; uzmanın hangi unsuru neden dikkate aldığını açıklama bölümlerinden okumak gerekir.",
        ],
        bullets: [
          "Tapu ve konum bilgileri",
          "Yapı, bağımsız bölüm ve kullanım özellikleri",
          "İmar, proje ve ruhsat incelemeleri",
          "Bölge ve emsal araştırması",
          "Kullanılan değerleme yaklaşımı ile sonuç",
          "Varsayım, sınırlama ve uyarılar",
        ],
      },
      {
        heading: "Değerleme yöntemleri nasıl düşünülmeli?",
        paragraphs: [
          "Pazar yaklaşımında benzer nitelikteki taşınmazlara ilişkin veriler karşılaştırılır ve farklılıklar değerlendirilir. Gelir yaklaşımı, özellikle kira veya işletme geliri üreten mülklerde gelecekteki gelir ve risk unsurlarını dikkate alabilir. Maliyet yaklaşımı ise yapının yeniden oluşturulma maliyeti ile arsa ve yıpranma gibi bileşenleri ele alır. Her yöntem her mülk için aynı uygunlukta değildir.",
          "Emsal listesindeki ilanların gerçekleşmiş satış olmaması, bilgilerinin doğrulanma düzeyi veya konu taşınmazdan farklı özellikler taşıması sonucu etkileyebilir. Bu nedenle yalnızca ‘metrekare değeri’ satırına bakmak yeterli olmaz. Raporun yöntem seçimi, düzeltmeleri ve veri kısıtları okunmalıdır. Anlaşılmayan bir varsayım varsa raporu hazırlayan kuruluş veya lisanslı uzmanla açıklığa kavuşturulması istenebilir.",
        ],
      },
      {
        heading: "Tapu ve proje uyumsuzluklarına dikkat edin",
        paragraphs: [
          "Bağımsız bölümün fiilî kullanımı onaylı projeden farklı olabilir. Balkonun kapatılması, ortak alanın içeri alınması, duvar yerlerinin değiştirilmesi veya bağımsız bölümlerin birleştirilmesi gibi durumlar raporda uyarı olarak yer alabilir. Bu tespitin krediye, sigortaya, gelecekteki satışa veya idari sürece etkisi somut duruma göre değişir. Etkiyi varsaymak yerine banka ve ilgili uzmanlarla görüşmek gerekir.",
          "Tapudaki nitelik ile kullanım biçimi arasındaki fark da önemlidir. Mesken olarak kullanılan bir yerin kayıtta farklı nitelikte olması ya da ticari kullanımın proje ve ruhsatla uyumsuz bulunması ek inceleme gerektirir. Rapor bir sorun işaret ediyorsa, ‘sonradan çözülür’ sözüne dayanarak ilerlemek yerine çözümün yetkili kurumlarca mümkün olup olmadığı ve maliyeti yazılı bilgiyle araştırılmalıdır.",
        ],
      },
      {
        heading: "Banka ekspertizi alıcının tüm incelemesi değildir",
        paragraphs: [
          "Banka için hazırlanan rapor, bankanın teminat ve kredi değerlendirmesine hizmet eder. Alıcının yaşam beklentisi, planlanan tadilat, komşuluk, gürültü, aidat yönetimi veya gelecekteki kullanım değişikliği gibi kişisel konuları tam olarak değerlendirmeyebilir. Teknik tesisat, deprem performansı ya da ayrıntılı yapı güvenliği incelemesi de standart değerleme kapsamından farklı uzmanlık gerektirebilir.",
          "Bu nedenle rapor olumlu olsa bile taşınmazı yerinde görmek, yönetim ve gider bilgilerini sormak, gerekli belgeleri incelemek ve kuşku varsa mühendislik veya hukuk desteği almak önemlidir. Raporun bulunması ayıp, borç, hukuki uyuşmazlık veya gelecekteki değer kaybı olmayacağı anlamına gelmez. Satın alma kontrol listesi ekspertiz raporunu içerir, fakat onunla sınırlı kalmaz.",
        ],
      },
      {
        heading: "Raporu okurken pratik kontrol sırası",
        paragraphs: [
          "Önce raporun tarihi, amacı ve değerlenen bağımsız bölümün sizin gördüğünüz mülkle aynı olup olmadığını kontrol edin. Ardından tapu ve proje bilgilerini, fiziksel özellikleri, kullanım durumunu ve varsa uyarıları okuyun. Değer sonucuna geçmeden önce raporun hangi verileri doğrulayamadığını ve hangi varsayımları kullandığını görün. Fotoğrafların ve konum tarifinin mülkle uyumunu karşılaştırın.",
          "Son bölümde değer yaklaşımını, emsal farklarını ve sonuç tarihini değerlendirin. Belirsiz bir ifade, proje aykırılığı veya sınırlama varsa yazılı açıklama isteyin. Kredi kullanılıyorsa bankanın rapora göre hangi tutar ve koşulları değerlendireceği ayrıca sorulmalıdır. Hukuki yorum gerektiren konu için avukat, teknik konu için ilgili mühendis veya mimar, değerleme yöntemi için lisanslı uzman desteği alınabilir.",
        ],
      },
      {
        heading: "Kısa özet: rakamdan önce raporun gerekçesini okuyun",
        paragraphs: [
          "Ekspertiz raporu, taşınmazın değerini etkileyen verileri belirli bir tarihte düzenli ve izlenebilir hâle getirir. En yararlı tarafı yalnızca sonuç rakamı değil; tapu, proje, fiziksel durum, emsaller, varsayımlar ve uyarılar arasındaki bağlantıyı göstermesidir. Rapor tarihini ve amacını bilmeden sonucu başka bir işlem için doğrudan kullanmak yanıltıcı olabilir.",
          "Amasya’da konut, arsa veya ticari mülk değerlendirirken raporu saha gözlemi ve diğer belge kontrolleriyle birlikte okuyun. Soruları işlemden önce netleştirin ve raporun kapsamını aşan konularda ilgili uzmana başvurun. Finans Gayrimenkul, mülkün yerel özelliklerini ve satış sürecini anlamanızda yardımcı olabilir; değerleme ve hukuki değerlendirme için lisanslı profesyonellerin görüşü esas alınmalıdır.",
          "Raporun bir kopyasını teklif, tapu ve proje belgeleriyle aynı dosyada tutun. Yeni bir bilgi, tadilat veya zaman farkı ortaya çıktığında eski raporun hâlâ amaca uygun olup olmadığını değerleme kuruluşuna sorun. Başka bir mülk için hazırlanmış rapordaki metrekare değerini doğrudan kullanmayın; konum, tarih ve nitelik farkları sonuç üzerinde belirleyici olabilir.",
        ],
      },
    ],
    sources: [
      {
        title: "Gayrimenkul Değerleme Kuruluşları Tanıtım Rehberi",
        publisher: "Sermaye Piyasası Kurulu",
        url: "https://spk.gov.tr/kurumlar/gayrimenkul-degerleme-kuruluslari/tanitim-rehberi",
      },
      {
        title: "Gayrimenkul Değerleme Kuruluşları Listesi",
        publisher: "Sermaye Piyasası Kurulu",
        url: "https://spk.gov.tr/kurumsal-iletisim/gayrimenkul-degerleme-kuruluslari",
      },
      {
        title: "Tapu İşlemlerinde Dikkat Edilecek Hususlar",
        publisher: "Tapu ve Kadastro Genel Müdürlüğü",
        url: "https://www.tkgm.gov.tr/tapu-islemlerinde-dikkat-edilecek-hususlar",
      },
    ],
    disclaimer: BLOG_DISCLAIMER,
  },
  {
    slug: "ticari-gayrimenkul-yatirimi",
    title: "Ticari Gayrimenkul Yatırımının Sırları",
    metadataTitle: "Ticari Gayrimenkul Yatırımı | Finans Gayrimenkul",
    description:
      "Amasya’da dükkân ve ofis yatırımı için lokasyon, kiracı, kira geliri, işletme gideri, belge ve çıkış stratejisi ölçütlerini birlikte inceleyin.",
    excerpt:
      "Dükkan, ofis ve ticari mülk yatırımlarında kira çarpanı hesaplaması ve lokasyon seçiminin işletme karlılığına olan uzun vadeli etkisi.",
    category: "Ticari",
    publishedAt: "2026-06-28",
    modifiedAt: "2026-08-07",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    imageAlt: "Geniş pencereli, çalışma masaları bulunan modern bir ofis alanı",
    readingTime: "8 dk okuma",
    author: BUSINESS.name,
    sections: [
      {
        heading: "Ticari mülkü konuttan ayıran temel nokta",
        paragraphs: [
          "Ticari gayrimenkulün değeri, fiziksel özellikleri kadar içinde yürütülebilecek faaliyet ve bu faaliyetin lokasyonla uyumuna bağlıdır. Bir dükkân, ofis veya depo aynı metrekaredeki konuttan farklı gelir, gider ve boş kalma dinamiklerine sahiptir. Yüksek görünen kira tek başına iyi yatırım anlamına gelmez; kiracının sürdürülebilirliği, sözleşme koşulları, kullanım kısıtları ve yeniden kiralama kolaylığı birlikte düşünülmelidir.",
          "Amasya’da çarşı içindeki yaya hareketi, ana caddelerdeki görünürlük, mahalle ölçeğindeki günlük ihtiyaçlar ve araç erişimi farklı iş modellerine hizmet eder. Her yoğun nokta her işletme için doğru değildir. Hedef kiracı veya kendi işiniz için müşteri profili belirlenmeden yalnızca ‘işlek cadde’ söylemine göre seçim yapmak, kullanım ile lokasyon arasında uyumsuzluk yaratabilir.",
        ],
      },
      {
        heading: "Lokasyonu hedef faaliyet üzerinden okuyun",
        paragraphs: [
          "Perakende için vitrin genişliği, yaya akışı, görünürlük ve kısa süreli park imkânı önemli olabilir. Ofis kullanımında toplu taşıma, yön bulma kolaylığı, kat, asansör ve sessizlik öne çıkabilir. Depo veya üretim niteliğinde kullanımda araç manevrası, yükleme alanı, tavan yüksekliği, elektrik altyapısı ve çevredeki kullanım türleri belirleyici olur. İnceleme ölçütleri hedef faaliyete göre değişmelidir.",
          "Sokağı farklı gün ve saatlerde gözlemlemek, yalnızca toplam hareketi değil hareketin niteliğini anlamayı sağlar. Yakındaki kamu kurumu, okul, sağlık birimi veya pazar belirli saatlerde yoğunluk yaratabilir; fakat günün kalanında hareket azalabilir. Mevsimsel değişim ve yol çalışmaları da erişimi etkileyebilir. Gözlem notlarını mevcut işletmecilerden alınan bilgiler ve resmî planlarla karşılaştırmak yararlıdır.",
        ],
      },
      {
        heading: "Kira gelirini brüt rakamdan ibaret görmeyin",
        paragraphs: [
          "Brüt yıllık kira, ilk karşılaştırma için kullanılabilir; fakat yatırımcının elinde kalan sonucu göstermez. Boş kalma dönemleri, bakım, ortak gider, vergi, sigorta, kiralama komisyonu ve büyük onarım ihtiyacı ayrıca hesaba katılmalıdır. Kiracının yaptığı özel dekorasyonun sonraki kullanıcı için söküm veya dönüşüm maliyeti doğurması da mümkündür. Gelir hesabı birkaç senaryoyla kurulmalıdır.",
          "Kira çarpanı gibi basit göstergeler benzer mülkleri karşılaştırmaya yardımcı olabilir, ancak gelecekteki getiriyi garanti etmez. Hesapta kullanılan kiranın güncel, tahsil edilebilir ve sözleşmeyle uyumlu olması gerekir. İlan edilen kira beklentisini gerçekleşmiş gelir gibi kabul etmek yanıltıcıdır. Kiracılı taşınmazda ödeme geçmişi ve sözleşme; boş taşınmazda benzer alanların kiralanma süresi araştırılmalıdır.",
        ],
        bullets: [
          "Brüt kira geliri ve tahsilat düzeni",
          "Olası boş kalma süresi",
          "Aidat, bakım, vergi, sigorta ve yenileme giderleri",
          "Kiracıya özel tadilatın yeniden kullanım maliyeti",
          "Satın alma ve finansman maliyetleri",
        ],
      },
      {
        heading: "Kiracı kalitesi ve sözleşme yapısı",
        paragraphs: [
          "Ticari mülkte kiracının ödeme kapasitesi, faaliyet geçmişi ve alanı ne kadar süre kullanmayı planladığı nakit akışını etkiler. Uzun süreli sözleşme istikrar sağlayabilir; fakat piyasa koşulları değiştiğinde esnekliği azaltabilir. Kısa sözleşme ise daha sık yeniden kiralama ve boşluk riski yaratabilir. Süre, artış, teminat, kullanım amacı ve gider paylaşımı birlikte değerlendirilmelidir.",
          "Kiracılı bir mülk satın alınırken mevcut sözleşmenin tüm ekleri, teminatlar, ödeme kayıtları ve tarafların yazılı bildirimleri incelenmelidir. Satışın kira ilişkisine etkisi ve yeni malikin hakları somut sözleşme ile mevzuata göre hukukçu tarafından değerlendirilmelidir. Sözlü beyanla yetinmek yerine devralınan yükümlülüklerin açıkça anlaşılması, beklenmeyen uyuşmazlık riskini azaltır.",
        ],
      },
      {
        heading: "Fiziksel uygunluk ve resmî kullanım",
        paragraphs: [
          "Tapudaki nitelik, belediyedeki proje, yapı kullanma durumu ve fiilî kullanım birbiriyle karşılaştırılmalıdır. Planlanan faaliyetin ruhsatlandırılabilir olması; yangın güvenliği, erişilebilirlik, havalandırma, baca, elektrik gücü veya hijyen gibi özel koşulları karşılaması gerekebilir. Bu koşullar sektöre ve taşınmaza göre değişir. Kiracı bulunacağı varsayımı, kullanım uygunluğu teyit edilmeden kurulamaz.",
          "Cephe ve iç mekân ölçülerinin yerinde kontrolü, kolon yerleri, giriş yüksekliği, ıslak hacimler, depo alanı ve ortak kullanım sınırlarının anlaşılması önemlidir. Tadilatla çözüleceği düşünülen bir engel, teknik veya idari açıdan mümkün olmayabilir. Planlanan değişiklikler için belediye, yönetim, mimar, mühendis ve diğer yetkili kaynaklardan görüş alınmalıdır.",
        ],
      },
      {
        heading: "Tek kiracı ve tek sektör riskini görün",
        paragraphs: [
          "Bir mülk yalnızca çok özel bir faaliyet için uygunsa, o kiracı ayrıldığında yeniden kiralama süresi uzayabilir. Esnek plan, uygun tesisat ve erişilebilir konum farklı kullanıcı gruplarına hitap edebilir. Bununla birlikte her tür faaliyete uygun olduğu iddiası da gerçekçi değildir. Hedef sektörlerin sayısını, bölgede bu sektörlere yönelik mevcut arzı ve dönüşüm maliyetini araştırmak gerekir.",
          "Portföyün büyük bölümünü tek mülke, tek kiracıya veya tek caddeye bağlamak gelir dalgalanmasını artırabilir. Yatırımcının risk taşıma kapasitesi ve diğer varlıkları bu kararın parçasıdır. Bu yazı portföy dağılımı önermez; yalnızca yoğunlaşmanın etkisini görünür kılar. Kişisel finansal değerlendirme için yetkili bir uzmana başvurulmalıdır.",
        ],
      },
      {
        heading: "Çıkış stratejisini satın alırken düşünün",
        paragraphs: [
          "Ticari mülklerin alıcı kitlesi konuta göre daha dar olabilir. Gelecekte satış gerektiğinde mülkün boş veya kiracılı olması, kira sözleşmesinin süresi, tapu ve proje düzeni, finansmana uygunluk ve hedeflenen getiri alıcı ilgisini etkiler. Satın alma sırasında belgeleri düzenli tutmak ve yapılan tadilatları kayıt altına almak, ilerideki incelemeyi kolaylaştırır.",
          "Satış için tek senaryoya güvenmeyin. Mülkün mevcut kiracıyla devam etmesi, boş teslim edilmesi veya farklı kullanıma uyarlanması halinde değer ve süre nasıl değişebilir? Bu soruların kesin cevabı yoktur; ancak çıkış seçeneklerinin sayısı likidite riskini anlamaya yardımcı olur. Amasya’daki benzer ticari mülklerin ilan süresi ve nitelikleri dönemsel olarak takip edilebilir.",
        ],
      },
      {
        heading: "Kısa özet: gelir kadar kullanılabilirliğe odaklanın",
        paragraphs: [
          "Ticari gayrimenkulde sağlıklı karar; lokasyon, hedef faaliyet, resmî kullanım, fiziksel uygunluk, kiracı, sözleşme ve giderlerin birlikte incelenmesine dayanır. Brüt kira veya tek bir çarpan, bu unsurların yerini tutmaz. Taşınmazı farklı saatlerde gözlemleyin, gelir ve boşluk senaryoları kurun, mevcut sözleşme ile belgeleri uzmanlara inceletin.",
          "Amasya’da dükkân ya da ofis ararken bugünkü kiracıyı değil, alanın farklı koşullardaki kullanım kabiliyetini de değerlendirin. Teknik ve ruhsat konularında ilgili kurum ve uzmanlardan, sözleşmede hukukçudan, kişisel yatırım kararında finansal uzmandan destek alın. Finans Gayrimenkul yerel seçeneklerin niteliklerini ve kullanım senaryolarını karşılaştırmanıza yardımcı olabilir.",
          "Saha dosyasına yaya ve araç gözlemlerini, ölçüleri, mevcut kira belgelerini, ortak giderleri ve yapılması gereken tadilatları ekleyin. Her seçenekte makul, zayıf ve boş kalma senaryosu için ayrı nakit akışı kurun. Hesaplamada varsayım olan rakamları doğrulanmış sözleşme verilerinden ayırın. Böyle bir kayıt sistemi kesin sonuç vermez; fakat farklı mülkleri aynı sorularla karşılaştırmanızı ve kararın hangi varsayıma dayandığını görmenizi sağlar.",
        ],
      },
    ],
    sources: [
      {
        title: "Ticari Gayrimenkul Fiyat Endeksi",
        publisher: "Türkiye Cumhuriyet Merkez Bankası",
        url: "https://www.tcmb.gov.tr/wps/wcm/connect/tr/tcmb%2Btr/main%2Bmenu/istatistikler/reel%2Bsektor%2Bistatistikleri/tgfe",
      },
      {
        title: "Gayrimenkul Değerleme Kuruluşları Tanıtım Rehberi",
        publisher: "Sermaye Piyasası Kurulu",
        url: "https://spk.gov.tr/kurumlar/gayrimenkul-degerleme-kuruluslari/tanitim-rehberi",
      },
      {
        title: "Türk Borçlar Kanunu",
        publisher: "Mevzuat Bilgi Sistemi",
        url: "https://www.mevzuat.gov.tr/mevzuatmetin/1.5.6098.pdf",
      },
    ],
    disclaimer: BLOG_DISCLAIMER,
  },
  {
    slug: "kira-sozlesmesi-hazirlarken-bilinmesi-gerekenler",
    title: "Kira Sözleşmesi Hazırlarken Bilmeniz Gerekenler",
    metadataTitle: "Kira Sözleşmesi Rehberi | Finans Gayrimenkul Amasya",
    description:
      "Kira sözleşmesinde taraflar, taşınmaz, ödeme, depozito, teslim ve bildirim başlıklarını açık yazmak için pratik ve dengeli bir çerçeve edinin.",
    excerpt:
      "Hem ev sahibi hem de kiracı haklarını koruyan, güncel yasal mevzuatlara uygun, eksiksiz bir kira sözleşmesinin nasıl hazırlanması gerektiği.",
    category: "Genel",
    publishedAt: "2026-06-20",
    modifiedAt: "2026-08-07",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "İş görüşmesinde sözleşme belgesini birlikte inceleyen iki kişi",
    readingTime: "9 dk okuma",
    author: BUSINESS.name,
    sections: [
      {
        heading: "İyi bir kira sözleşmesinin amacı nedir?",
        paragraphs: [
          "Kira sözleşmesi, ev sahibi ile kiracının yalnızca aylık bedel üzerinde anlaştığını gösteren bir kâğıt değildir. Hangi taşınmazın, hangi koşullarla, ne zaman teslim edildiğini ve tarafların süreç boyunca ne yapacağını görünür hâle getirir. Açık bir metin, uyuşmazlığı tamamen ortadan kaldırmaz; ancak hatırlama farklarını azaltır ve tarafların aynı bilgiye dönmesini sağlar.",
          "İnternetten bulunan genel bir şablon her konut veya iş yeri için yeterli olmayabilir. Eşyalı kiralama, aile konutu, ticari kullanım, ortak giderler, tadilat veya özel teslim koşulları farklı düzenlemeler gerektirebilir. Türk Borçlar Kanunu ve diğer düzenlemelerin güncel uygulaması somut olaya göre değerlendirilmelidir. Özellikle önemli yükümlülükler için gayrimenkul hukuku alanında çalışan bir hukukçudan görüş alınması uygundur.",
        ],
      },
      {
        heading: "Tarafları ve taşınmazı tereddütsüz tanımlayın",
        paragraphs: [
          "Sözleşmede kiraya veren ve kiracının adları, iletişim ve tebligat için kullanılacak adresleri ile gerekli kimlik bilgileri doğru yazılmalıdır. Birden fazla malik, kiracı veya şirket varsa imza yetkisi ve taraf sıfatı kontrol edilmelidir. Vekâletle işlem yapılıyorsa yetkinin kapsamı görülmelidir. Kişisel veriler gereğinden fazla çoğaltılmamalı ve belgeler güvenli tutulmalıdır.",
          "Taşınmazın açık adresi, bağımsız bölüm numarası, tapudaki niteliği ve kiralamaya dâhil eklentiler belirtilmelidir. Otopark, depo, bahçe bölümü veya demirbaşların kullanımı sözlü bırakılmamalıdır. Amasya’daki adreslerde mahalle, cadde veya sokak, bina ve kapı bilgilerinin resmî kayıtlarla uyumlu olması; teslim ve abonelik süreçlerinde karışıklığı önler.",
        ],
      },
      {
        heading: "Kira bedeli ve ödeme düzenini açık kurun",
        paragraphs: [
          "Aylık kira bedeli, ödeme tarihi, kullanılacak banka hesabı ve açıklama biçimi sözleşmede yer almalıdır. Elden veya belgesiz ödeme taraflar için ispat sorunu doğurabilir. Ödemelerin izlenebilir kanallardan yapılması ve dekont açıklamasında ilgili ayın belirtilmesi düzenli kayıt sağlar. Hesap sahibi ile kiraya veren farklıysa bunun nedeni ve yetki ilişkisi netleştirilmelidir.",
          "Kira artışına ilişkin hüküm yürürlükteki emredici kurallarla uyumlu olmalıdır. Oranlar ve geçici düzenlemeler zaman içinde değişebildiği için sabit bir sayıyı zamansız kural gibi yazmak doğru değildir. Artış tarihi ve yöntemi için güncel mevzuat ile profesyonel görüş esas alınmalıdır. Taraflar, sözleşmedeki bir hükmün kanunun izin verdiğinden daha geniş sonuç doğuracağını varsaymamalıdır.",
        ],
      },
      {
        heading: "Depozito ve güvenceyi belgeleyin",
        paragraphs: [
          "Güvence bedelinin tutarı, hangi amaçla alındığı, nasıl teslim edildiği ve kira sonunda hangi değerlendirmeyle iade edileceği açık yazılmalıdır. Güvence, normal kullanımdan kaynaklanan her eskimeyi otomatik olarak kiracıya yükleyen sınırsız bir fon değildir. Öte yandan teslimde mevcut olmayan ve kiracının sorumluluğunda doğan zararlar için tarafların kayıtlı bir yönteme ihtiyacı vardır.",
          "Güvencenin sınırı ve saklanma biçimi bakımından Türk Borçlar Kanunu hükümleri önem taşır. Uygulama, taşınmaz ve tarafların durumuna göre hukukçu tarafından değerlendirilmelidir. Ödeme banka üzerinden yapılıyorsa açıklama yazılmalı; teslim ve iade belgeleri saklanmalıdır. Senet, kefalet veya başka bir teminat düşünülüyorsa şekil ve geçerlilik koşulları için imza öncesi hukuki görüş alınması özellikle önemlidir.",
        ],
      },
      {
        heading: "Teslim tutanağı ve demirbaş listesi hazırlayın",
        paragraphs: [
          "Sözleşme imzalandığında taşınmazın fiziksel durumu fotoğraflı bir teslim tutanağıyla kayıt altına alınabilir. Duvar, zemin, kapı, pencere, tesisat, sayaç değerleri ve anahtar sayısı yazılmalıdır. Eşyalı kiralamada marka, model, adet ve mevcut kusurlar demirbaş listesine eklenmelidir. Fotoğrafların tarihi ve hangi bölüme ait olduğu anlaşılır olmalıdır.",
          "Bu kayıt yalnızca kiraya vereni değil, kiracıyı da korur; önceden var olan bir kusurun sonradan kiracıya yüklenmesini önlemeye yardımcı olur. Taşınmazda teslimden önce onarılacak alanlar varsa işi kimin, hangi tarihe kadar yapacağı yazılmalıdır. Su, elektrik, doğal gaz ve benzeri aboneliklerin devir veya açılış sorumluluğu ile başlangıç sayaç değerleri netleştirilmelidir.",
        ],
        bullets: [
          "Anahtar ve erişim aracı sayısı",
          "Sayaç değerleri ve abonelik durumu",
          "Demirbaşların listesi ve mevcut kusurları",
          "Duvar, zemin, ıslak hacim ve tesisat gözlemleri",
          "Teslimden sonra tamamlanacak işlerin sorumlusu ve tarihi",
        ],
      },
      {
        heading: "Giderler, bakım ve tadilat sorumluluğunu ayırın",
        paragraphs: [
          "Aidat, ortak gider, ısınma, bakım ve büyük onarım kalemlerinin kim tarafından karşılanacağı hem sözleşme hem yürürlükteki kurallar dikkate alınarak açıklanmalıdır. Apartman yönetiminden güncel aidat ve varsa planlanan büyük harcamalar sorulabilir. ‘Tüm masraflar kiracıya aittir’ gibi çok genel ifadeler somut kalemlerin hukuki niteliğini ortadan kaldırmaz.",
          "Kiracının boya, dekorasyon, tabela veya tesisat değişikliği yapması planlanıyorsa yazılı izin, proje gerekliliği ve çıkışta eski hâle getirme koşulu konuşulmalıdır. Özellikle iş yerlerinde yapılacak faaliyet için belediye, yönetim planı ve teknik koşullar ayrıca kontrol edilmelidir. Kiraya verenin sözlü onayı yerine kapsamı belirli yazılı mutabakat kullanmak ilerideki yorum farkını azaltır.",
        ],
      },
      {
        heading: "Süre, bildirim ve tahliye hükümlerini gelişigüzel yazmayın",
        paragraphs: [
          "Sözleşmenin başlangıç tarihi ve süresi açık olmalıdır; ancak sürenin sona ermesinin her durumda kira ilişkisinin otomatik olarak biteceği varsayılmamalıdır. Konut ve çatılı iş yeri kiralarında yenileme, fesih ve bildirim kuralları özel hükümler içerir. Tahliye taahhüdü, kefalet veya cezai şart gibi belgeler ciddi sonuçlar doğurabileceğinden standart metne bilinçsizce eklenmemelidir.",
          "Tarafların bildirim için kullanacağı yöntem ve güncel adresleri kayda alınmalıdır. Taşınmazın satılması, kiracının erken çıkmak istemesi, kiraya verenin ihtiyacı veya ödeme gecikmesi gibi durumlarda izlenecek yol hukuki nitelik taşır. İnternet yorumları yerine güncel mevzuat, resmî bildirim ve avukat görüşüyle hareket etmek hak kaybı riskini azaltır.",
        ],
      },
      {
        heading: "İmza öncesi son kontrol listesi",
        paragraphs: [
          "Metni imzalamadan önce tüm boşlukların doldurulduğunu, eklerin numaralandırıldığını ve her nüshanın aynı olduğunu kontrol edin. Sonradan eklenecek sözlü koşulları yazıya alın. Taraflar metni okumak için yeterli süre bulmalı; anlamadığı hükmü açıklığa kavuşturmadan imzalamamalıdır. Ödeme, teslim ve demirbaş belgeleri sözleşmeyle birlikte saklanmalıdır.",
          "Kısa özetle; tarafları ve taşınmazı doğru tanımlayın, kira ve güvence akışını izlenebilir kurun, teslim durumunu belgeleyin, gider ve tadilat sorumluluğunu ayırın, süre ve bildirim hükümlerini güncel hukukla kontrol edin. Finans Gayrimenkul, Amasya’daki kiralama sürecinde taşınmaz ve iletişim koordinasyonuna yardımcı olabilir; sözleşmenin kişisel hukuki ihtiyaçlara uygunluğu için profesyonel hukukçu görüşü alınmalıdır.",
          "İmzadan sonra taraflara aynı ekleri içeren birer nüsha verin ve sonradan yapılan değişiklikleri tarihli, yazılı eklerle kaydedin. Telefon veya mesajla bildirilen banka hesabı değişikliklerini güvenli bir kanaldan ayrıca doğrulayın. İletişim adresi ya da taraf bilgisi değiştiğinde bildirim usulünü hukukçuya danışın. Düzenli dosyalama tek başına hukuki geçerlilik sağlamaz; fakat ödeme, teslim ve taraf iradesine ilişkin kayıtların karışmasını önlemeye yardımcı olur.",
        ],
      },
    ],
    sources: [
      {
        title: "Türk Borçlar Kanunu",
        publisher: "Mevzuat Bilgi Sistemi",
        url: "https://www.mevzuat.gov.tr/mevzuatmetin/1.5.6098.pdf",
      },
      {
        title: "Tapu İşlemlerinde Dikkat Edilecek Hususlar",
        publisher: "Tapu ve Kadastro Genel Müdürlüğü",
        url: "https://www.tkgm.gov.tr/tapu-islemlerinde-dikkat-edilecek-hususlar",
      },
    ],
    disclaimer: BLOG_DISCLAIMER,
  },
] as const satisfies readonly BlogPost[];

export type BlogSlug = (typeof blogPosts)[number]["slug"];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogUrl(slug: string): string {
  return `${SITE_URL}/blog/${slug}`;
}

export function getRelatedPosts(slug: string, limit = 3): readonly BlogPost[] {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, limit);
}

export function formatBlogDate(date: string): string {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
