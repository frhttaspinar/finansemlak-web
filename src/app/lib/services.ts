import type { BlogSlug } from "./blog";
import { SITE_URL } from "./site";

/**
 * Yerel hizmet sayfalarının tek merkezi veri kaynağı.
 * Ana sayfadaki hizmet kartları, /hizmetler indexi, hizmet detay sayfaları ve
 * sitemap aynı listeden beslenir; içerik başka hiçbir dosyada tekrar edilmez.
 */

export type ServiceSection = {
  readonly heading: string;
  readonly paragraphs: readonly string[];
  readonly bullets?: readonly string[];
};

/** Kart ikonları client bileşeninde eşlenir; veri katmanı ikon bileşeni taşımaz. */
export type ServiceIconKey = "home" | "map" | "building" | "calculator" | "file";

export type Service = {
  readonly slug: string;
  /** Sayfadaki tek H1 */
  readonly title: string;
  /** Breadcrumb, kart ve liste gibi dar alanlar için kısa ad */
  readonly shortTitle: string;
  /** schema.org Service.serviceType için gerçek hizmet adı */
  readonly serviceType: string;
  readonly category: string;
  readonly metaTitle: string;
  readonly metaDescription: string;
  /** Sayfa girişindeki özet cümle */
  readonly description: string;
  /** Ana sayfa hizmet kartındaki mevcut başlık ve açıklama (tasarım korunur) */
  readonly cardTitle: string;
  readonly cardDescription: string;
  readonly icon: ServiceIconKey;
  readonly image: string;
  readonly imageAlt: string;
  /** Ana sayfa ızgarasında iki sütuna yayılan kart */
  readonly wide?: boolean;
  readonly intro: readonly string[];
  readonly sections: readonly ServiceSection[];
  readonly relatedBlogSlugs: readonly BlogSlug[];
  readonly updatedAt: string;
};

export const SERVICE_DISCLAIMER =
  "Bu sayfadaki bilgiler genel danışmanlık amaçlıdır; hukuki, finansal veya resmî değerleme hizmetinin yerine geçmez.";

/** Hizmet sayfalarının yayına alındığı tarih — sitemap lastModified için kullanılır. */
export const SERVICES_MODIFIED_AT = "2026-08-07";

export const services = [
  {
    slug: "amasya-satilik-kiralik-gayrimenkul",
    title: "Amasya Satılık ve Kiralık Gayrimenkul Danışmanlığı",
    shortTitle: "Satılık ve Kiralık Gayrimenkul",
    serviceType: "Satılık ve kiralık gayrimenkul danışmanlığı",
    category: "Konut",
    metaTitle: "Amasya Satılık ve Kiralık Emlak | Finans Gayrimenkul",
    metaDescription:
      "Amasya’da satılık veya kiralık konut arayanlara bütçe planlama, lokasyon karşılaştırması, mülk gezisi ve belge kontrolü aşamalarında yerel danışmanlık.",
    description:
      "Amasya Merkez ve çevresinde satılık ya da kiralık konut arayışınızı; ihtiyaç, bütçe ve belge kontrolü başlıklarını birlikte ele alarak yürütüyoruz.",
    cardTitle: "Satılık ve Kiralık Gayrimenkul Danışmanlığı",
    cardDescription:
      "İhtiyacınıza ve bütçenize en uygun konut ve yaşam alanlarını bulmanızda profesyonel rehberlik sunuyoruz.",
    icon: "home",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Konut anahtarının masa üzerinde yeni sahibine uzatıldığı an",
    wide: false,
    intro: [
      "Ev arayışı çoğu zaman ilan sitelerinde gezinmekle başlar; ancak ilanların büyük bölümü aynı mülkü farklı fotoğraflarla anlatır, bir kısmı ise güncelliğini yitirmiştir. Amasya gibi merkezi dar, mahalleleri birbirine yakın bir şehirde asıl fark, ilan sayısında değil; hangi mülkün sizin günlük yaşamınıza uyduğunu doğru okuyabilmekte ortaya çıkar.",
      "Finans Gayrimenkul olarak satılık ve kiralık konut sürecini üç aşamada ele alıyoruz: önce ihtiyacın netleşmesi, sonra sahadaki seçeneklerin aynı ölçütlerle karşılaştırılması, en sonunda da belge ve sözleşme tarafının düzenli biçimde yürütülmesi. Amaç, hızlı bir işlem kapatmak değil; taşındıktan sonra da doğru olduğunu düşüneceğiniz bir karar çıkarmaktır.",
    ],
    sections: [
      {
        heading: "Amasya’da konut aramaya nereden başlanır?",
        paragraphs: [
          "İlk konuşmamızda genellikle metrekare değil, gündelik rota üzerinden ilerliyoruz. İşe veya okula hangi saatte çıkılıyor, araç kullanılıyor mu, evde kaç kişi yaşayacak, hafta sonları evin hangi bölümü daha çok kullanılıyor gibi sorular; Amasya Merkez’de birbirine çok yakın görünen iki mahalleyi bile sizin için farklı seçeneklere dönüştürebilir.",
          "Bütçe tarafında yalnızca satış bedelini değil, taşınma, tadilat, aidat, ısınma ve düzenli giderleri de aynı tabloya yazmanızı öneriyoruz. Kiralık arayışında da depozito, peşin istenen kira ve sözleşme koşulları toplam yükü değiştirir. Bu çerçeve netleştiğinde gezilecek mülk sayısı azalır, buna karşılık gezilen her mülk gerçek bir aday hâline gelir.",
        ],
      },
      {
        heading: "Satın almak ile kiralamak arasındaki karar",
        paragraphs: [
          "Satın alma; peşinat, finansman ve uzun vadeli bir bağlılık gerektirir. Kiralamak ise esneklik sağlar, fakat sözleşme süresi, artış koşulları ve mülk sahibiyle ilişkinin yazılı biçimde kurulmasını gerektirir. Bu iki seçenek arasında doğru karar herkes için aynı değildir; şehirde kalma süreniz, gelir düzeniniz ve ailenin yakın gelecekteki planı belirleyicidir.",
          "Amasya’da öğrenci, kamu görevlisi, yeni evli çift ve emekli hane halkı gibi farklı profillerin talebi aynı bölgeye yönelmez. Kimi için üniversiteye ve toplu taşımaya yakınlık, kimi için sakin bir sokak ve otopark önceliklidir. Karar aşamasında iki seçeneği de aynı bütçe tablosunda görmek, duygusal bir tercihten çok karşılaştırılabilir bir seçim yapmayı kolaylaştırır.",
        ],
      },
      {
        heading: "Bu hizmet kimler için uygun?",
        paragraphs: [
          "Bu danışmanlık, konut sürecinde yol arkadaşı arayan herkes için tasarlandı. Şehri iyi tanıyan bir alıcı kadar, Amasya’ya yeni taşınan ve mahalleler arasındaki farkı henüz bilmeyen bir kiracı da aynı sistematikten yararlanır.",
        ],
        bullets: [
          "Amasya’da ilk evini satın almayı planlayanlar",
          "Şehir dışından taşınan ve bölgeyi yakından tanımayan aileler",
          "Mülkünü satmak veya kiraya vermek isteyen mal sahipleri",
          "Mevcut evini büyütmek ya da küçültmek isteyen hane halkı",
          "Kiralık arayışında sözleşme tarafını düzenli yürütmek isteyenler",
        ],
      },
      {
        heading: "Süreç adım adım nasıl ilerler?",
        paragraphs: [
          "Görüşmenin ardından ihtiyaç listesi ve bütçe aralığı üzerinden portföydeki uygun mülkler ayrıştırılır. Randevular mümkün olduğunca aynı gün içinde planlanır; her mülk için aynı başlıklarda not tutulur. Böylece üç dört seçenek gezildikten sonra hafızaya güvenmek yerine karşılaştırılabilir bir kayıt elde edilir.",
        ],
        bullets: [
          "İhtiyaç, bütçe ve öncelik listesinin çıkarılması",
          "Uygun mülklerin ayrıştırılması ve randevuların planlanması",
          "Mülk gezisi sırasında aynı başlıklarla not ve fotoğraf kaydı",
          "Tapu, aidat ve kullanım bilgilerine ilişkin soruların yazılı takibi",
          "Teklif, pazarlık ve sözleşme aşamasında süreç yönetimi",
        ],
      },
      {
        heading: "Görüşme öncesinde dikkat edilecek noktalar",
        paragraphs: [
          "Mülkü ilk gördüğünüzde etkileyici görünen bir detay, daha önemli bir eksiği gölgeleyebilir. Duvarlarda nem izi, pencerelerin kapanması, su basıncı, ısıtma sistemi ve ortak alanların bakımı kısa sürede kontrol edilebilir. Bunlar teknik inceleme değildir; uzman görüşü gerekip gerekmediğini anlamaya yarayan bir ön bakıştır.",
          "Belge tarafında tapu kaydı, malik bilgisi, taşınmazın niteliği ve varsa şerhler tekliften önce konuşulmalıdır. Kiralık mülkte ise sözleşmenin süresi, artış esası, depozitonun iadesi ve demirbaş listesi yazılı olmalıdır. Sözlü verilen bir güvence sözleşmeye geçmediği sürece takip edilebilir bir taahhüt oluşturmaz.",
        ],
      },
      {
        heading: "Mülkünü satmak veya kiraya vermek isteyenler için",
        paragraphs: [
          "Sürecin diğer tarafında duran mal sahibi için ilk kritik karar, ilan fiyatının belirlenmesidir. Beklentinin çok üzerinde açılan bir ilan, ilk haftalarda gelen gerçek alıcıları kaçırabilir ve mülk uzun süre pazarda kalınca sonradan yapılan indirimler de aynı ilgiyi geri getirmeyebilir. Karşılaştırmayı benzer yaştaki, benzer konumdaki ve benzer donanımdaki taşınmazlarla yapmak bu riski azaltır.",
          "Mülkün gösterime hazırlanması da sonucu belirgin biçimde etkiler. Ortak alanların düzeni, küçük bakım eksiklerinin giderilmesi, belgelerin önceden hazırlanması ve randevuların gün ışığından yararlanacak saatlere alınması, alıcı üzerinde bırakılan izlenimi doğrudan değiştirir. Kiraya verme sürecinde ise kiracı adayının ödeme düzeni ve sözleşme koşullarının açık yazılması, ilerideki anlaşmazlıkları önleyen en pratik adımdır.",
        ],
      },
      {
        heading: "Finans Gayrimenkul’ün bu süreçteki rolü",
        paragraphs: [
          "Amasya Merkez’deki ofisimizden yürüttüğümüz çalışmada rolümüz, mülkü olduğundan farklı göstermek değil; seçenekleri aynı ölçütlerle önünüze koymaktır. Bir mülkün eksiğini de artısı kadar açık biçimde konuşuruz, çünkü satın alma ya da kiralama kararının sürdürülebilir olması bizim için tek işlemlik bir sonuçtan daha değerlidir.",
          "Süreç boyunca sorularınızı WhatsApp veya telefon üzerinden doğrudan iletebilirsiniz. Değerleme raporu, kredi tahsisi ve sözleşmenin hukuki denetimi gibi konular ise ilgili lisanslı kuruluşların, bankaların ve hukuk profesyonellerinin yetki alanındadır; bu başlıklarda sizi doğru adrese yönlendiririz.",
        ],
      },
    ],
    relatedBlogSlugs: [
      "topraktan-konut-almanin-avantajlari",
      "kira-sozlesmesi-hazirlarken-bilinmesi-gerekenler",
      "konut-kredisi-faizlerinin-emlak-piyasasina-etkisi",
    ],
    updatedAt: SERVICES_MODIFIED_AT,
  },
  {
    slug: "amasya-arsa-arazi-tarla",
    title: "Amasya Arsa, Arazi ve Tarla Danışmanlığı",
    shortTitle: "Arsa, Arazi ve Tarla",
    serviceType: "Arsa, arazi ve tarla danışmanlığı",
    category: "Arsa",
    metaTitle: "Amasya Arsa, Arazi ve Tarla | Finans Gayrimenkul",
    metaDescription:
      "Amasya’da arsa, arazi ve tarla alım satımında imar durumu, yol cephesi, hisse yapısı ve kullanım kabiliyetini birlikte değerlendiren yerel danışmanlık.",
    description:
      "Amasya ve çevresinde arsa, arazi ya da tarla değerlendirirken imar, hisse, erişim ve kullanım kabiliyeti başlıklarını birlikte inceliyoruz.",
    cardTitle: "Arsa, Arazi ve Tarla Yatırım Yönetimi",
    cardDescription:
      "Geleceğinize güvenle yatırım yapmanız için değer kazanan bölgelerde toprak yatırımı analizi yapıyoruz.",
    icon: "map",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Ufka doğru uzanan geniş ve yeşil bir tarım arazisi",
    wide: false,
    intro: [
      "Toprak alım satımı, konut işlemlerinden farklı bir hazırlık ister. Bir daireyi gezip günlük yaşamınıza uygun olup olmadığına karar verebilirsiniz; ancak bir parselin gerçek değeri büyük ölçüde kâğıt üzerinde, yani imar durumu, tapu niteliği, hisse yapısı ve erişim koşullarında saklıdır.",
      "Amasya’da tarım arazisinin yoğun olduğu ovalar, gelişme yönündeki mahalleler ve eğimi yüksek parseller yan yana bulunabilir. Aynı büyüklükteki iki taşınmaz, sırf yola cephesi veya plan durumu farklı olduğu için bambaşka kullanım imkânı sunar. Bu nedenle çalışmamız ilan başlığından değil, parselin kayıtlı gerçeğinden başlar.",
    ],
    sections: [
      {
        heading: "Arsa ve arazi kararı konuttan neden farklıdır?",
        paragraphs: [
          "Konutta kullanım biçimi büyük ölçüde bellidir; toprakta ise önce “burada ne yapılabilir?” sorusunun yanıtlanması gerekir. Yapı yapılabilmesi plan kararlarına, ilgili belediyenin ve kurumların uygulamalarına bağlıdır. Tarım niteliğindeki bir taşınmazda ise kullanım ve bölünme konusunda mevzuattan kaynaklanan sınırlar gündeme gelebilir.",
          "Bu yüzden bir parselin fiyatını yalnızca dönüm veya metrekare başına düşen tutarla değerlendirmek yanıltıcıdır. Yola cephesi olmayan, hisseli görünen veya eğimi nedeniyle kullanımı zorlaşan bir taşınmaz, aynı bölgedeki bir başkasından belirgin biçimde ayrışır. Karşılaştırma yaparken benzer nitelikteki parselleri seçmek gerekir.",
        ],
      },
      {
        heading: "Amasya’da toprak incelerken bakılan başlıklar",
        paragraphs: [
          "Saha ziyaretinde parselin sınırlarını, komşu kullanımları, ulaşım yolunun durumunu ve mevsimsel koşulları birlikte değerlendiriyoruz. Kâğıt üzerinde düzgün görünen bir parsel arazide farklı bir tabloya sahip olabilir; yağış sonrası oluşan su birikintisi, kadastro yolunun fiilî durumu veya komşu parselden geçen bir hat kullanım planını değiştirebilir.",
        ],
        bullets: [
          "Tapu niteliği, ada-parsel bilgisi ve hisse durumu",
          "İmar planı kapsamı ve yapılaşma koşullarının kurumdan teyidi",
          "Yola cephe, ulaşım yolunun genişliği ve fiilî kullanım durumu",
          "Parselin biçimi, eğimi ve arazinin topoğrafik yapısı",
          "Elektrik, su ve sulama gibi altyapı imkânlarının mevcut durumu",
        ],
      },
      {
        heading: "Bu hizmet kimler için uygun?",
        paragraphs: [
          "Toprak danışmanlığı yalnızca büyük ölçekli alıcılar için değildir. Miras yoluyla hisseli bir taşınmaza ortak olan bir aile de, kendi evini yapmak için uygun bir arsa arayan bir kişi de aynı belge disiplinine ihtiyaç duyar.",
        ],
        bullets: [
          "Kendi konutunu yapmak için arsa arayanlar",
          "Uzun vadeli birikim amacıyla toprak değerlendirenler",
          "Miras veya hisseli mülkiyet nedeniyle ortak olduğu taşınmazı satmak isteyenler",
          "Tarımsal üretim için arazi arayan üreticiler",
          "Elindeki parselin gerçekçi bir fiyat aralığını görmek isteyen mal sahipleri",
        ],
      },
      {
        heading: "Süreç nasıl ilerler?",
        paragraphs: [
          "Öncelikle taşınmazın kayıtlı bilgileri ve konumu üzerinden bir ön çerçeve çıkarılır. Ardından parsel yerinde görülür; sınırlar, erişim ve çevredeki kullanımlar not edilir. Plan durumu ve yapılaşma koşulları gibi başlıklar için ilgili belediye ve kurumlardan güncel bilgi alınması gerektiğini baştan hatırlatırız.",
          "Alıcı tarafında karar verilmeden önce, satın alma amacına göre farklı senaryolar konuşulur: taşınmaz kısa vadede kullanılacak mı, uzun süre elde mi tutulacak, hisseli bir yapı varsa diğer ortaklarla nasıl ilerlenecek. Satıcı tarafında ise belgelerin eksiksiz hazırlanması, sürecin gereksiz uzamasını önleyen en etkili adımdır.",
        ],
      },
      {
        heading: "Sık karşılaşılan riskler",
        paragraphs: [
          "Toprak işlemlerinde en sık görülen sorun, sözlü anlatım ile kayıtlı durum arasındaki farktır. “Burası ileride imara açılacak”, “yol buradan geçecek” gibi ifadeler beklenti yaratır; ancak plan kararları resmî süreçlerle oluşur ve yalnızca yetkili kurumdan teyit edilebilir. Böyle bir beklentiyi satın alma bedeline yansıtmak, doğrulanmadığı sürece risk taşır.",
          "Hisseli tapularda diğer paydaşların tutumu, kullanımın fiilen nasıl bölündüğü ve ortaklığın giderilmesi ihtimali ayrıca değerlendirilmelidir. Tarımsal niteliğe sahip taşınmazlarda bölünme ve devir konusunda uygulanabilecek özel düzenlemeler bulunabileceğinden, işlem öncesinde tapu müdürlüğü ve tarım il/ilçe müdürlüğü gibi yetkili birimlerden bilgi alınması yerinde olur.",
        ],
      },
      {
        heading: "Elindeki parseli satmak isteyenler için hazırlık",
        paragraphs: [
          "Satış tarafında en çok zaman kaybettiren durum, alıcı bulunduktan sonra ortaya çıkan belge eksikleridir. Tapu kaydının güncel durumu, hisse yapısı, varsa ipotek ya da haciz gibi kısıtlamalar ve kadastro bilgileri önceden gözden geçirildiğinde süreç belirgin biçimde hızlanır. Miras yoluyla intikal etmiş taşınmazlarda mirasçılık durumunun kayıtlara işlenmiş olması, satış görüşmesinden önce tamamlanması gereken bir adımdır.",
          "Parselin sahadaki durumu da satışa hazırlığın bir parçasıdır. Sınırların belirsiz olduğu, komşu kullanımının parsele taştığı ya da ulaşım yolunun fiilen kapandığı durumlar alıcıda tereddüt yaratır. Bu başlıklar satıştan önce netleştirildiğinde pazarlık, mülkün gerçek nitelikleri üzerinden yürür; belirsizlik üzerinden yapılan indirim baskısı ortadan kalkar.",
        ],
      },
      {
        heading: "Finans Gayrimenkul ile nasıl ilerlersiniz?",
        paragraphs: [
          "Amasya’daki parselleri değerlendirirken görevimiz, size “kesin değerlenir” türünden bir beklenti satmak değil; taşınmazın bugünkü kullanım kabiliyetini ve belgelenebilir durumunu net biçimde göstermektir. Beklentiye dayalı bilgiyle kayıtlı bilgiyi ayrı tutar, hangisinin hangi kaynaktan doğrulanabileceğini birlikte konuşuruz.",
          "Parsel sorgusu, imar durumu ve tapu işlemleri için resmî kanallar esastır. Süreçte hukuki veya teknik bir konu ortaya çıkarsa avukat, harita mühendisi ya da ilgili uzmanla çalışmanızı öneririz. Elinizdeki taşınmazın ya da ilgilendiğiniz bir parselin durumunu konuşmak için telefon veya WhatsApp üzerinden bize ulaşabilirsiniz.",
        ],
      },
    ],
    relatedBlogSlugs: ["amasya-emlak-yatirim-rehberi", "ekspertiz-raporu-nedir"],
    updatedAt: SERVICES_MODIFIED_AT,
  },
  {
    slug: "amasya-ticari-gayrimenkul",
    title: "Amasya Ticari Gayrimenkul Danışmanlığı",
    shortTitle: "Ticari Gayrimenkul",
    serviceType: "Ticari gayrimenkul danışmanlığı",
    category: "Ticari",
    metaTitle: "Amasya İş Yeri ve Ticari Mülk | Finans Gayrimenkul",
    metaDescription:
      "Amasya’da dükkân, ofis ve depo arayışında lokasyon, kullanım niteliği, kira koşulları ve kiracı uyumunu birlikte değerlendiren ticari gayrimenkul danışmanlığı.",
    description:
      "Amasya’da dükkân, ofis ve depo gibi ticari mülklerde lokasyonu yürütülecek faaliyetle birlikte okuyarak yol gösteriyoruz.",
    cardTitle: "Ticari Mülk, Dükkan ve Ofis Yönetimi",
    cardDescription:
      "İşletmeniz için ideal lokasyonu buluyor, ticari gayrimenkullerinizin en verimli şekilde değerlendirilmesini sağlıyoruz.",
    icon: "building",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Cam cepheli ofis binalarının aşağıdan yukarı doğru görünümü",
    wide: false,
    intro: [
      "Ticari mülkte doğru karar, mülkün fiziksel özelliklerinden çok içinde yürütülecek işle ilgilidir. Aynı cadde üzerindeki iki dükkân, biri kısa süreli park imkânına diğeri yoğun yaya akışına dayandığı için tamamen farklı işletmelere uygun olabilir. Bu nedenle ticari arayışta ilk soru “kaç metrekare?” değil, “burada hangi iş yapılacak?” sorusudur.",
      "Amasya’da çarşı içi, ana caddeler, mahalle ölçeğindeki günlük ihtiyaç noktaları ve şehir çıkışındaki depolama alanları birbirinden ayrışan dinamiklere sahiptir. Finans Gayrimenkul olarak hem iş yeri arayan işletmelere hem de mülkünü değerlendirmek isteyen mal sahiplerine bu ayrımı görünür kılan bir çalışma yürütüyoruz.",
    ],
    sections: [
      {
        heading: "Lokasyon, yürütülecek faaliyetle birlikte okunur",
        paragraphs: [
          "Perakende bir işletme için vitrin genişliği, görünürlük, yaya akışının yönü ve kısa süreli duraklama imkânı belirleyicidir. Ofis kullanımında ise binaya erişim, kat, asansör, otopark ve sessizlik öne çıkar. Depo veya atölye niteliğindeki bir kullanımda araç manevrası, yükleme alanı, tavan yüksekliği ve elektrik altyapısı çoğu zaman lokasyondan bile önemli hâle gelir.",
          "Bir sokağın gerçek karakterini anlamak için farklı gün ve saatlerde gözlem yapmayı öneriyoruz. Yakındaki kamu kurumu, okul ya da pazar belirli saatlerde yoğunluk yaratabilir, günün kalanında hareket belirgin biçimde azalabilir. Yalnızca “işlek cadde” tanımına güvenmek, faaliyetle lokasyon arasında uyumsuzluk doğurabilir.",
        ],
      },
      {
        heading: "Amasya’da dükkân, ofis ve depo arayışı",
        paragraphs: [
          "İşletmeler çoğunlukla belirli bir bütçeyle yola çıkar; ancak ticari mülkte kira bedeli tek başına maliyeti anlatmaz. Tadilat ve uyarlama gideri, aidat, ortak alan katkısı, enerji tüketimi ve kullanım için gereken izinler toplam yükün parçasıdır. Düşük görünen bir kira, uyarlama maliyeti yüksek bir mekânda avantaj sağlamayabilir.",
        ],
        bullets: [
          "Taşınmazın tapudaki niteliği ile planlanan kullanımın uyumu",
          "Yapı ruhsatı ve kullanım izni gibi belgelerin durumu",
          "Vitrin, cephe, giriş ve engelsiz erişim koşulları",
          "Elektrik gücü, havalandırma ve tesisat kapasitesi",
          "Kira sözleşmesinin süresi, artış esası ve tahliye koşulları",
        ],
      },
      {
        heading: "Bu hizmet kimler için uygun?",
        paragraphs: [
          "Ticari danışmanlık, hem yerini arayan işletmeler hem de elindeki mülkü değerlendirmek isteyen mal sahipleri içindir. İki taraf da aynı sorunun farklı yönünde durur: mülk ile faaliyet arasındaki uyum.",
        ],
        bullets: [
          "Amasya’da ilk iş yerini açmayı planlayan girişimciler",
          "Mevcut dükkânını büyütmek veya taşımak isteyen işletmeler",
          "Ofis, muayenehane veya büro kullanımına uygun yer arayan meslek sahipleri",
          "Depolama ve lojistik ihtiyacı olan ticari kullanıcılar",
          "Ticari mülkünü kiraya vermek ya da satmak isteyen mal sahipleri",
        ],
      },
      {
        heading: "Kiraya verme ve kiracı bulma süreci",
        paragraphs: [
          "Mal sahibi tarafında süreç, mülkün gerçekçi bir kira aralığıyla konumlandırılmasıyla başlar. Beklentinin çok üzerinde belirlenen bir bedel, mülkün uzun süre boş kalmasına yol açabilir; boş geçen her ay ise elde edilen kira avantajını hızla eritir. Karşılaştırmayı benzer nitelikteki, aynı çevredeki mülkler üzerinden yapmak gerekir.",
          "Kiracı adayının faaliyeti, mülkün fiziksel yapısına ve bina yönetimiyle komşu kullanımlara uygun olmalıdır. Sözleşmede sürenin, artış esasının, tadilat iznine ilişkin kuralların ve tahliye koşullarının açık yazılması iki tarafı da korur. Sözleşmenin hukuki denetimi için avukatla çalışılması uygun olur.",
        ],
      },
      {
        heading: "Karar öncesinde kontrol edilmesi gerekenler",
        paragraphs: [
          "Bir mekânın belirli bir faaliyete uygun olup olmadığı yalnızca fiziksel görünümle anlaşılmaz. İş yeri açma ve çalışma ruhsatına ilişkin koşullar, faaliyet türüne ve bulunduğu yapıya göre değişebilir. Bu nedenle sözleşme imzalanmadan önce ilgili belediye ve gerekli hâllerde diğer kurumlardan bilgi alınmasını öneriyoruz.",
          "Bina yönetim planı, ortak alan kullanımına ilişkin kararlar ve kat malikleri kurulunun tutumu da ticari kullanımı etkileyebilir. Mülkte önceki kiracının yaptığı özel uyarlamalar bulunuyorsa, bunların devri ya da sökümü konusunda kimin sorumlu olacağı yazılı hâle getirilmelidir.",
        ],
      },
      {
        heading: "Kira getirisi nasıl değerlendirilir?",
        paragraphs: [
          "Ticari mülkte brüt kira, ilk karşılaştırma için kullanışlıdır; ancak yatırımcının elinde kalan tutarı göstermez. Boş kalınan aylar, bakım ve onarım, ortak gider, vergi ve sigorta kalemleri bu tablonun parçasıdır. Kiracı değişimlerinde mekânın yeni faaliyete uyarlanması için gereken süre ve maliyet de hesaba katılmalıdır.",
          "Kiracılı bir mülk devralınıyorsa mevcut sözleşmenin süresi, artış esası ve ödeme geçmişi incelenmelidir. Boş bir mülkte ise benzer alanların ne kadar sürede kiralandığı, gerçekçi bir beklenti kurmak açısından değerlidir. Kira çarpanı gibi basit göstergeler yalnızca benzer nitelikteki mülkleri karşılaştırmaya yarar; gelecekteki getiriyi garanti etmez ve tek başına yatırım kararına dayanak oluşturmaz.",
        ],
      },
      {
        heading: "Finans Gayrimenkul’ün rolü",
        paragraphs: [
          "Amasya Merkez’deki ofisimizde ticari mülk arayışını, işletmenizin hedef müşteri profiliyle birlikte ele alıyoruz. Bir mekânın avantajını olduğu kadar kısıtını da açıkça paylaşırız; çünkü uyumsuz bir lokasyonda kurulan işletme, kısa süre içinde yeniden taşınma maliyetiyle karşılaşır.",
          "Ruhsat, vergi ve sözleşme gibi başlıklarda nihai değerlendirme ilgili kurumların ve profesyonellerin yetkisindedir; bu konularda yönlendirme yapar, karar aşamasında gereken soruları önceden listelemenize yardımcı oluruz. Ticari mülkünüzü konuşmak için telefon ya da WhatsApp üzerinden bize ulaşabilirsiniz.",
        ],
      },
    ],
    relatedBlogSlugs: [
      "ticari-gayrimenkul-yatirimi",
      "kira-sozlesmesi-hazirlarken-bilinmesi-gerekenler",
    ],
    updatedAt: SERVICES_MODIFIED_AT,
  },
  {
    slug: "amasya-gayrimenkul-degerleme",
    title: "Amasya Gayrimenkul Değerleme ve Ekspertiz Rehberliği",
    shortTitle: "Değerleme ve Ekspertiz Rehberliği",
    serviceType: "Gayrimenkul fiyat karşılaştırması ve ekspertiz süreci rehberliği",
    category: "Değerleme",
    metaTitle: "Amasya Değerleme ve Fiyat Rehberliği | Finans Gayrimenkul",
    metaDescription:
      "Amasya’da mülkünüzün fiyat aralığını benzer taşınmazlarla karşılaştırın; resmî ekspertiz raporunun kapsamını ve süreçteki yerini birlikte değerlendirelim.",
    description:
      "Mülkünüzün piyasadaki konumunu benzer taşınmazlarla karşılaştırıyor, resmî değerleme sürecinde nelerin beklendiğini anlatıyoruz.",
    cardTitle: "Gayrimenkul Değerleme ve Ekspertiz",
    cardDescription:
      "Mülkünüzün gerçek piyasa değerini, güncel piyasa verileri ve analizlerle en doğru şekilde tespit ediyoruz.",
    icon: "calculator",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Masa üzerinde hesap makinesi ve fiyat hesaplaması için tutulan notlar",
    wide: false,
    intro: [
      "Mülkünün fiyatını soran hemen herkes aslında iki ayrı sorunun peşindedir: “Bu taşınmaz bugün hangi aralıkta alıcı bulur?” ve “Resmî bir raporda hangi değer çıkar?” Bu iki soru birbirine benzer görünse de farklı çalışmalarla yanıtlanır ve karıştırıldıklarında yanlış beklenti oluşur.",
      "Finans Gayrimenkul, gayrimenkul danışmanlığı yapan bir emlak ofisidir; Sermaye Piyasası Kurulu düzenlemeleri kapsamında yetkilendirilmiş bir değerleme kuruluşu değildir ve resmî ekspertiz raporu düzenlemez. Bu sayfada anlatılan hizmet, piyasadaki karşılaştırılabilir seçenekleri okumanıza ve resmî değerleme sürecine hazırlanmanıza yardımcı olan bir rehberliktir.",
    ],
    sections: [
      {
        heading: "Piyasa fiyatı ile resmî ekspertiz raporu aynı şey değildir",
        paragraphs: [
          "Resmî değerleme raporu, yetkili kuruluşlar ve lisanslı uzmanlar tarafından belirli standartlara göre hazırlanır. Rapor taşınmazın belirli bir tarihteki hukuki ve fiziksel durumunu, kullanılan yöntemi, varsayımları ve sınırlamaları içerir. Kredi süreçlerinde bu çalışma genellikle bankanın yönlendirdiği kanal üzerinden yürütülür.",
          "Emlak danışmanının yaptığı çalışma ise farklıdır: benzer nitelikteki taşınmazların güncel ilan ve satış süreçlerine bakarak mülkün pazarda hangi aralıkta ilgi görebileceğini konuşmaktır. Bu bir rapor değildir, resmî bir belge yerine geçmez; buna karşılık ilan fiyatını belirlerken ve teklifleri değerlendirirken gerçekçi bir zemin sağlar.",
        ],
      },
      {
        heading: "Amasya’da fiyat beklentisi nasıl oluşturulur?",
        paragraphs: [
          "Karşılaştırma yaparken aynı mahallede olmak tek başına yeterli değildir. Bina yaşı, kat, cephe, ısınma sistemi, asansör ve otopark durumu, yenileme düzeyi ve arsa payı gibi başlıklar benzer olmalıdır. Birbirinden çok farklı iki ilanın metrekare fiyatını ortalamak, sonucu gerçekten uzaklaştırır.",
        ],
        bullets: [
          "Taşınmazın konumu ve çevresindeki günlük yaşam olanakları",
          "Yapı yaşı, kat, cephe ve fiilen kullanılabilen alan",
          "Isınma, yalıtım, asansör ve otopark gibi konfor başlıkları",
          "Tapu niteliği ile mevcut kullanımın uyumu",
          "Benzer taşınmazların ilanda kalma süresi ve talep yoğunluğu",
        ],
      },
      {
        heading: "Bu rehberlik kimler için uygun?",
        paragraphs: [
          "Bu çalışma, elindeki mülk hakkında karar vermeden önce gerçekçi bir çerçeve isteyen herkese yöneliktir. Satış kararı verilmemiş olsa bile, mülkün bugünkü konumunu bilmek sonraki planlamayı kolaylaştırır.",
        ],
        bullets: [
          "Mülkünü satmayı düşünen ve ilan fiyatını belirlemek isteyenler",
          "Aldığı teklifin makul olup olmadığını değerlendirmek isteyen mal sahipleri",
          "Kredi başvurusu öncesinde süreci anlamak isteyen alıcılar",
          "Miras veya ortaklık paylaşımında ortak bir çerçeve arayan aileler",
          "Kira bedelini güncel piyasaya göre gözden geçirmek isteyenler",
        ],
      },
      {
        heading: "Süreç nasıl işler?",
        paragraphs: [
          "Önce taşınmazın temel bilgileri ve belgeleri gözden geçirilir; ardından mülk yerinde görülür. Fiziksel durum, kullanım biçimi ve çevresel özellikler not edilir. Bu aşamada mülkün öne çıkan yönleri kadar, alıcı gözünden soru işareti oluşturabilecek noktalar da açık biçimde konuşulur.",
          "Sonrasında karşılaştırılabilir seçenekler bir araya getirilir ve mülkün bu seçenekler arasındaki konumu değerlendirilir. Ortaya çıkan sonuç kesin bir rakam değil, gerekçeleriyle birlikte açıklanan bir aralıktır. Satış hedefiniz hızlıysa ya da beklemeye açıksanız, bu aralık içinde farklı stratejiler konuşulabilir.",
          "Belirlenen aralık, pazar koşulları değiştikçe gözden geçirilmesi gereken bir çerçevedir. İlan yayına alındıktan sonra gelen görüntülenme, randevu talebi ve teklif sayısı, beklentinin sahadaki karşılığını gösteren en somut geri bildirimdir. Birkaç hafta boyunca randevu talebi gelmiyorsa sorun çoğu zaman mülkün kendisinde değil, konumlandırıldığı fiyat aralığında ya da ilanın anlatımındadır.",
        ],
      },
      {
        heading: "Resmî değerleme raporu gerektiğinde ne yapmalı?",
        paragraphs: [
          "Konut kredisi kullanımı gibi durumlarda süreç bankanın belirlediği yolla ilerler ve değerleme bankanın yönlendirdiği yetkili kuruluş tarafından yapılır. Rapordaki değerin satış bedelinden farklı çıkması mümkündür; bu durumda kullandırılabilecek kredi tutarı da değişebileceği için bütçenin nasıl tamamlanacağı önceden konuşulmalıdır.",
          "Raporda tapu, proje veya fiziksel duruma ilişkin bir tespit yer alıyorsa bunun anlamı ve olası etkisi bankayla ve lisanslı uzmanla netleştirilmelidir. Farklı bir amaç için hazırlanmış eski bir raporu güncel işlem için doğrudan kullanmak da uygun olmaz; raporun tarihi ve amacı sonucun geçerlilik alanını belirler.",
        ],
      },
      {
        heading: "Fiyat beklentisini bozan yaygın varsayımlar",
        paragraphs: [
          "En sık karşılaşılan varsayım, komşu dairenin ya da yakındaki bir arsanın satış bedelinin doğrudan kendi taşınmazına uyarlanabileceği düşüncesidir. Oysa iki taşınmaz arasındaki kat, cephe, yenileme düzeyi veya tapu niteliği farkı sonucu belirgin biçimde değiştirir. Benzer şekilde, yapılan tadilatın harcanan tutar kadar değer artışı sağlayacağı beklentisi de çoğu zaman karşılık bulmaz.",
          "İkinci yaygın varsayım, ilan fiyatlarının gerçekleşmiş satış bedeli olduğudur. İlanlar satıcının beklentisini gösterir; işlem sırasında ortaya çıkan pazarlık, ödeme koşulları ve satış aciliyeti sonucu değiştirebilir. Bu nedenle karşılaştırmayı yalnızca güncel ilanlara değil, mülklerin pazarda kalma süresine ve gelen tekliflerin seyrine de bakarak yapmak gerekir.",
        ],
      },
      {
        heading: "Finans Gayrimenkul’ün rolü ve sınırları",
        paragraphs: [
          "Bu hizmette rolümüz, Amasya’daki pazarı ve benzer taşınmazları okumanıza yardımcı olmaktır. Mülkünüzün değeri hakkında abartılı bir beklenti oluşturmak yerine, hangi verinin neyi gösterdiğini ve hangi noktada resmî bir çalışmaya ihtiyaç duyulduğunu açıkça belirtiriz.",
          "Resmî değerleme raporu, kredi kararı ve hukuki değerlendirme yetkili kuruluşların, bankaların ve hukuk profesyonellerinin alanındadır. Mülkünüzün pazardaki konumunu konuşmak isterseniz WhatsApp veya telefon üzerinden bize ulaşabilir, Amasya Merkez’deki ofisimize uğrayabilirsiniz.",
        ],
      },
    ],
    relatedBlogSlugs: ["ekspertiz-raporu-nedir", "amasya-emlak-yatirim-rehberi"],
    updatedAt: SERVICES_MODIFIED_AT,
  },
  {
    slug: "tapu-kredi-surecleri",
    title: "Tapu ve Konut Kredisi Süreçlerinde Gayrimenkul Danışmanlığı",
    shortTitle: "Tapu ve Kredi Süreçleri",
    serviceType: "Tapu ve konut kredisi sürecinde gayrimenkul danışmanlığı",
    category: "Süreç",
    metaTitle: "Tapu ve Konut Kredisi Süreçleri | Finans Gayrimenkul",
    metaDescription:
      "Amasya’da tapu devri ve konut kredisi takviminde belge kontrolü, randevu planlaması ve taraflar arası koordinasyonu düzenli yürüten gayrimenkul danışmanlığı.",
    description:
      "Tapu devri ve konut kredisi takvimini; belge kontrolü, randevu planlaması ve taraflar arasındaki koordinasyonla birlikte yürütüyoruz.",
    cardTitle: "Tapu ve Kredi Takip Süreçleri Danışmanlığı",
    cardDescription:
      "Bürokratik süreçleri sizin adınıza yönetiyor, alım-satım ve kredi işlemlerinizi hızlı ve güvenilir bir şekilde sonuçlandırıyoruz.",
    icon: "file",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Masa başında belgeleri inceleyerek not alan iki kişi",
    wide: true,
    intro: [
      "Bir gayrimenkul alım satımında anlaşmaya varmak çoğu zaman sürecin yarısıdır. Geriye kalan bölüm; belgelerin eksiksiz toplanması, banka takviminin satış takvimiyle uyumlu kurulması ve tapu devrinin doğru sırayla tamamlanmasıdır. Bu aşamada yaşanan gecikmeler, tarafların anlaştığı bir işlemi bile yıpratabilir.",
      "Finans Gayrimenkul olarak bu bölümde koordinasyon rolü üstleniyoruz: hangi belgenin kimden isteneceği, hangi adımın hangi sırayla yapılacağı ve süreçte hangi kurumun devreye gireceği önceden planlanır. Böylece alıcı da satıcı da sürecin neresinde olduğunu her aşamada bilir.",
    ],
    sections: [
      {
        heading: "Tapu devri öncesinde hangi kontroller yapılır?",
        paragraphs: [
          "Devir öncesinde tapu kaydındaki malik bilgisi, taşınmazın niteliği, pay durumu ve kayıtta yer alan şerh ya da kısıtlamalar gözden geçirilir. Vekâletle yürütülen bir işlem varsa vekâletnamenin kapsamı; miras yoluyla intikal etmiş bir taşınmazda ise mirasçılık durumunun kayıtlara yansımış olması önem taşır.",
          "Yapılı taşınmazlarda ruhsat, yapı kullanma izin belgesi ve mevcut kullanımın onaylı projeyle uyumu ayrıca değerlendirilir. Kayıt ile fiilî durum arasında bir fark görülüyorsa, bunun mali ve hukuki sonucu anlaşılmadan kapora verilmemesini öneririz. Belge talebini son güne bırakmamak, sürecin en kolay kazanılan güvencesidir.",
        ],
      },
      {
        heading: "Konut kredisi kullanılacaksa takvim nasıl kurulur?",
        paragraphs: [
          "Kredili işlemlerde satış takvimi bankanın süreciyle birlikte planlanmalıdır. Başvuru, değerleme çalışması, kredi onayı ve kullandırım adımlarının her biri zaman alır. Bu adımlar netleşmeden tapu randevusu için kesin bir tarih vermek, tarafları gereksiz bir baskı altına sokar.",
          "Kredi kullanacak alıcının bankalardan aldığı teklifleri aynı tutar ve vade üzerinden karşılaştırması, taksitin yanı sıra toplam geri ödemeyi ve ek kalemleri görmesi önemlidir. Değerleme sonucunun satış bedelinden farklı çıkması hâlinde aradaki farkın nasıl karşılanacağı da baştan konuşulmalıdır. Kredi kararı yalnızca bankaya aittir; ön görüşme kesin bir taahhüt oluşturmaz.",
        ],
      },
      {
        heading: "Bu hizmet kimler için uygun?",
        paragraphs: [
          "Süreç danışmanlığı, işlemi ilk kez yapan taraflar kadar; birden fazla mirasçının, vekâletin ya da kredi kullanımının bir arada bulunduğu daha karmaşık işlemler için de yararlıdır.",
        ],
        bullets: [
          "İlk kez konut satın alan ve süreci tanımayan alıcılar",
          "Konut kredisiyle alım yapmayı planlayanlar",
          "Şehir dışında olduğu için işlemi vekâletle yürüten taraflar",
          "Hisseli veya mirasa konu taşınmazını devretmek isteyenler",
          "Satış sürecini belge tarafında düzenli yürütmek isteyen mal sahipleri",
        ],
      },
      {
        heading: "Randevudan devre: süreç adımları",
        paragraphs: [
          "Tapu işlemleri, Tapu ve Kadastro Genel Müdürlüğü’nün belirlediği usullere göre yürütülür; başvuru ve randevu adımları resmî kanallar üzerinden yapılır. İşlem günü öncesinde tarafların kimlik belgeleri, gerekli fotoğraflar, vekâlet varsa aslı ve ödemeye ilişkin planın hazır olması gerekir.",
        ],
        bullets: [
          "Tapu kaydı ve belgelerin ön kontrolü",
          "Satış koşullarının ve ödeme planının yazılı hâle getirilmesi",
          "Kredi kullanılacaksa banka sürecinin başlatılması ve takibi",
          "Resmî kanallardan başvuru ve randevu adımlarının planlanması",
          "Devir günü ödeme, teslim ve abonelik geçişlerinin sıralanması",
        ],
      },
      {
        heading: "Sık yapılan hatalar",
        paragraphs: [
          "En sık karşılaşılan durum, ödemelerin belgesiz yapılmasıdır. Kapora, peşinat ve kalan bedelin izlenebilir biçimde, tarafların adına açık kayıtlarla aktarılması iki tarafın da yararınadır. Sözlü olarak verilen teslim tarihi, demirbaş listesi veya tadilat sözü yazılı hâle gelmediği sürece takip edilebilir bir taahhüt oluşturmaz.",
          "İkinci sık hata, kredinin çıkacağı varsayımıyla geri dönüşü zor bir taahhüt altına girmektir. Mevcut kiranın feshi, taşınma tarihi ve nakit planı; banka sürecinin gerçekleşen adımlarına göre kurulmalıdır. Ayrıca devirle birlikte doğan vergi ve harç yükümlülüklerinin kime ait olacağı önceden açıkça belirlenmelidir.",
          "Üçüncü olarak, tarafların birbirine güvenerek sözleşmeyi eksik doldurması sık görülür. Teslim tarihi, taşınmazda kalacak demirbaşlar, boyanacak ya da onarılacak bölümler ve devir günü yapılacak ödemenin biçimi tek tek yazıldığında; hatırlamaya dayalı tartışmalar ortadan kalkar. Yazılı metin taraflar arasındaki iyi niyeti azaltmaz, aksine anlaşmanın sınırlarını herkes için görünür kılar.",
        ],
      },
      {
        heading: "Devir tamamlandıktan sonra kalan işler",
        paragraphs: [
          "Tapu devri, sürecin sonu değil son aşamasıdır. Elektrik, su, doğal gaz ve internet aboneliklerinin devri ya da yeni ad altında açılması, sayaç endekslerinin devir günü tutanakla kaydedilmesi ve varsa aidat borcunun kapatıldığının yönetimden teyit edilmesi gerekir. Bu adımlar atlandığında, önceki döneme ait bir bakiye yeni malikin karşısına çıkabilir.",
          "Konut kredisiyle alınan taşınmazlarda bankanın talep ettiği sigorta ve ipotek işlemlerinin tamamlanmış olması ayrıca kontrol edilmelidir. Adres güncellemesi, taşınma planı ve anahtar teslimi de aynı takvimde yer alır. Devirle ilgili tüm belgelerin, ödeme kayıtlarının ve tutanakların tek bir dosyada saklanması, ileride doğabilecek soruların hızlıca yanıtlanmasını sağlar.",
        ],
      },
      {
        heading: "Finans Gayrimenkul’ün rolü",
        paragraphs: [
          "Bu süreçte görevimiz, taraflar arasındaki iletişimi düzenli tutmak ve hangi adımın ne zaman yapılacağını takip etmektir. Belgelerin eksiksiz toplanması, randevu takviminin bankayla uyumlu ilerlemesi ve devir günü sıralamasının önceden konuşulması, sürecin sürpriz olmadan tamamlanmasına yardımcı olur.",
          "Buna karşılık kredi tahsisi bankanın, resmî tapu işlemi ilgili tapu müdürlüğünün, sözleşmenin hukuki denetimi ise avukatın yetki alanındadır. Biz bu adımlarda yönlendirme yapar, hangi soruyu kime sormanız gerektiğini netleştiririz. Süreciniz için Amasya Merkez’deki ofisimizden, telefondan veya WhatsApp üzerinden bize ulaşabilirsiniz.",
        ],
      },
    ],
    relatedBlogSlugs: [
      "konut-kredisi-faizlerinin-emlak-piyasasina-etkisi",
      "topraktan-konut-almanin-avantajlari",
    ],
    updatedAt: SERVICES_MODIFIED_AT,
  },
] as const satisfies readonly Service[];

export type ServiceSlug = (typeof services)[number]["slug"];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServiceUrl(slug: string): string {
  return `${SITE_URL}/hizmetler/${slug}`;
}

export const SERVICES_INDEX_URL = `${SITE_URL}/hizmetler`;

/**
 * Blog yazısından ilgili hizmet sayfalarına giden iç bağlantılar.
 * Eşleşme hizmet tarafındaki relatedBlogSlugs listesinden türetilir;
 * bağlantı sayısı doğal kalması için sınırlandırılır.
 */
export function getServicesForBlogPost(
  blogSlug: string,
  limit = 2
): readonly Service[] {
  return services
    .filter((service) =>
      (service.relatedBlogSlugs as readonly string[]).includes(blogSlug)
    )
    .slice(0, limit);
}
