export interface MenuItem {
  name: string
  description: string
  image?: string
  seafood?: boolean
  spicy?: boolean
  popular?: boolean
  alcohol?: string
}

export interface Category {
  id: string
  name: string
  description: string
  items: MenuItem[]
}

export interface NavigationItem {
  id: string
  label: string
}

export interface MenuData {
  brand: {
    name: string
  }
  navigation: NavigationItem[]
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  labels: {
    seafood: string
    spicy: string
    popular: string
  }
  categories: Category[]
  footer: {
    title: string
    subtitle: string
    whatsapp: string
    address: string
    phone: string
    delivery: string
  }
}

export const menuData: Record<"az" | "en" | "ar", MenuData> = {
  az: {
    brand: {
      name: "Meduza",
    },
    navigation: [
      { id: "shishalar", label: "Qəlyanlar" },
      { id: "beer", label: "İçkilər" },
      { id: "snacks", label: "Qəlyanaltılar" },
    ],
    hero: {
      title: "Meduza",
      subtitle: "Azərbaycanın ən yaxşı tütün və içki kolleksiyası ilə tanış olun",
      cta: "Kolleksiyanı Kəşf Et",
    },
    labels: {
      seafood: "Dəniz məhsulları",
      spicy: "Ədviyyatlı",
      popular: "Populyar",
    },
    categories: [
      {
        id: "shishalar",
        name: "Qəlyanlar",
        description: "Premium tütün və bol duman ilə seçilmiş kolleksiya",
        items: [
          {
            name: "Jam Premium",
            description: "Jam Premium – dadı və keyfiyyəti ilə fərqlənən, zövqlü dumanın ünvanı. Zəngin aromalar, yumşaq çəkim və uzunmüddətli ləzzət təcrübəsi üçün ideal seçim.",
            image: "/images/jam1.jpg",
          },
          {
            name: "Brusko Premium",
            description: "Brusko – güclü dad, balanslı duman və yüksək keyfiyyətin mükəmməl vəhdəti. Həqiqi tütün zövqünü yaşamaq istəyənlər üçün",
            image: "/images/brusko1.jpg",
          },
          {
            name: "Şərbətli",
            description: "Şərbətli Premium – Türkiyə şirinliyini daşıyan, yumşaq içimli və qoxusu ilə seçilən premium qəlyan tütünü.",
            image: "/images/serbetli2.jpg",
          },
          {
            name: "Adalya",
            description: "Adalya – klassikləşmiş ləzzətlər, zəngin aroma və tərtəmiz duman. Qelyan həvəskarlarının sevimli Türkiyə tütünü",
            image: "/images/adalya2.jpg",
          },
          {
            name: "Al Fakher",
            description: "Al Fakher – Ərəbistanın klassik tütün zövqü. Duru dad, qalıcı aroma və dumanlı keyfiyyətin simvolu.",
            image: "/images/alfakir1.jpg",
          },
          {
            name: "Hookain",
            description: "Hookain – Alman keyfiyyəti ilə seçilən, güclü aromalı və yüksək rütubətli premium tütün. Dadı da, çəkimi də tam yerindədir",
            image: "/images/hookain1.png",
          },
        ],
      },
      {
        id: "beer",
        name: "İçkilər",
        description: "Yerli və beynəlxalq premium içki növləri",
        items: [
          {
            name: "Xırdalan",
            description: "Azərbaycanın sevilən yerli pivəsi – Xırdalan, həm filtirli, həm də filtirsiz seçimlərlə təqdim olunur.",
            image: "/images/xirdalan.png",
            alcohol: "Alkoqol: 4.5 %",
          },
          {
            name: "Efes",
            description: "Efes, yüngül və təravətli dadı olan məşhur Türkiyə pivəsidir",
            image: "/images/efes.png",
            alcohol: "Alkoqol: 6.5 %",
          },
          {
            name: "Eirdenger",
            description: "Eirdenger, Almaniya mənşəli, klassik və keyfiyyətli pivə markasıdır. Zəngin dadı və balanslı aroması ilə seçilir.",
            image: "/images/erdinger.jpg",
            alcohol: "Alkoqol: 5.3 %",
          },
          {
            name: "Corona Extra",
            description: "Corona, Meksikadan olan yüngül və təravətli dadlı məşhur pivədir, adətən limonla birlikdə servis edilir",
            image: "/images/corona.jpg",
            alcohol: "Alkoqol: 4.5 %",
          },
          {
            name: "Paulaner",
            description: "Paulaner, Almaniyanın məşhur pivə brendidir. Klassik Bavariya tərzində, zəngin və balanslı dadı ilə tanınır",
            image: "/images/paullaner.jpg",
            alcohol: "Alkoqol: 4.9 %",
          },
          {
            name: "Baltika",
            description: "Baltika 9, Rusiyanın məşhur tünd və güclü pivəsidir. Tam bədənli, zəngin malt dadı və yüngül acılığı ilə fərqlənir.",
            image: "/images/baltika.png",
            alcohol: "Alkoqol: 8 %",
          },
          {
            name: "Miller",
            description: "Miller, Amerika mənşəli yüngül və təravətli dadı ilə tanınan məşhur pivə brendidir. Rahat içimli və sərinləşdiricidir.",
            image: "/images/miller.jpg",
            alcohol: "Alkoqol: 4.8 %",
          },
          {
            name: "Jameson",
            description: "Jameson, İrlandiya mənşəli məşhur viskidir. Yumşaq, balanslı və zəngin dad profili ilə geniş sevilir.",
            image: "/images/jameson.jpg",
            alcohol: "Alkoqol: 40 %",
          },
          {
            name: "Jack Daniels",
            description: "Jack Daniel's, Tennessee mənşəli məşhur viskidir. Dərin karamelli, vanil və ədviyyatlı dadı ilə tanınır.",
            image: "/images/jack.jpg",
            alcohol: "Alkoqol: 40 %",
          },
          {
            name: "Chivas",
            description: "Chivas, Şotlandiya mənşəli lüks blended viskidir. Zəngin, hamar və meyvəli dad profili ilə seçilir.",
            image: "/images/chivas.jpeg",
            alcohol: "Alkoqol: 40 %",
          },
          {
            name: "Ballantine's",
            description: "Ballantine's, Şotlandiya mənşəli məşhur blended viskidir. Yumşaq, balanslı və zəngin aroması ilə tanınır.",
            image: "/images/balentinas.jpg",
            alcohol: "Alkoqol: 40 %",
          },
          {
            name: "Olmeca Silver",
            description: "Olmeca Silver, Meksika mənşəli təmiz və yüngül dadlı tekiladır. Təzə və sitruslu notlarla təravətli içki təqdim edir.",
            image: "/images/Olmeca.webp",
            alcohol: "Alkoqol: 35 %",
          },
          {
            name: "Olmeca Silver",
            description: "Olmeca Sierra, Meksika mənşəli premium tekila növüdür. Yüngül, təmiz və balanslı dadı ilə seçilir.",
            image: "/images/sierra.png",
            alcohol: "Alkoqol: 35 %",
          },
          {
            name: "Efes Zero",
            description: "Efes Zero, alkolsuz və yüngül dadı ilə sərinləşdirici pivə alternatividir. Efes keyfiyyətini alkolsuz formada təqdim edir..",
            image: "/images/efes0.jpg",
            alcohol: "Alkoqol: 0 %",
          },
          {
            name: "Baltika 0",
            description: "Baltika 0, alkolsuz və yüngül dadlı pivədir. Sərinləşdirici və təzəlik verən içki kimi məşhurdur.",
            image: "/images/baltika0.jpg",
            alcohol: "Alkoqol: 0 %",
          },
        ],
      },
      {
        id: "snacks",
        name: "Qəlyanaltılar",
        description: "İçkilərlə mükəmməl uyğun gələn dadlı qəlyanaltılar",
        items: [
          {
            name: "Pətənə",
            description: "Pətənə, toyuğun belindən hazırlanan, pivə yanında servis edilən dadlı və ətirli mezedir. Qızardılıb, ədviyyatlarla zənginləşdirilir, sərin içkilə çox yaxşı gedir.",
            image: "/images/petene.jpg",
            spicy: true,
            popular: true,
          },
          {
            name: "Boğaz",
            description: "Toyuğun boğazı, yumuşaq və dadlı ət hissəsidir. Əsasən doğranıb qızardılır, ədviyyatlarla zənginləşdirilərək meze kimi təqdim olunur. Pivə ilə birlikdə çox populyardır.",
            image: "/images/bogaz.jpg",
            spicy: true,
          },
          {
            name: "Krivetka",
            description: "Krivetka, Mingəçevirdən olan dəniz və okean məhsuludur. Ləzzətli və şirəli dəniz canlısıdır.",
            image: "/images/krivetka.jpg",
            seafood: true,
          },
          {
            name: "Sacaq pendiri",
            description: "Sacaq pendiri, qızardılmış və ya sadə şəkildə, limonla servis olunan ləzzətli pendir növüdür.",
            image: "/images/sacaq.jpg",
            popular: true,
          },
          {
            name: "Çips",
            description: "Lays, Ruffles və Chipsim məşhur çips markalarıdır. Hər biri fərqli dad və teksturaya malik, qəlyanaltı üçün populyar seçimlərdir.",
            image: "/images/cips.jpg",
            popular: true,
          },
          {
            name: "Lobster",
            description: "Lobster, dəniz məhsulları arasında ən lüks və dadlı xərçəng növüdür. Şirəli və zəngin ətli ilə məşhurdur.",
            image: "/images/lobster.jpg",
            seafood: true,
            popular: true,
          },
          {
            name: "Nuggets and Fries",
            description: "Nuggets, qızardılmış toyuq ətindən hazırlanmış kiçik, dadlı qəlyanaltıdır. Fri isə qızardılmış kartof dilimləridir. Hər ikisi tez-tez birlikdə servis olunur.",
            image: "/images/frinuggets.webp",
            popular: true,
            
          },
          {
            name: "Toyuq Popcornu",
            description: "Toyuq Popkornu, kiçik, ətirli və qızardılmış toyuq parçalardan hazırlanan dadlı qəlyanaltıdır. Asan yeyilən və pivə yanında çox sevilir.",
            image: "/images/toyuqpopcorn.jpg",
            popular: true,
            spicy: true,
            
          },
          {
            name: "Düşbərə Qızardılmış",
            description: "Qızardılmış düşbərə, içi ətlə dolu kiçik xəmir qızartmasıdır. Xırtıldayan qabığı və dadlı içliyi ilə məşhurdur.",
            image: "/images/dusbere.jpg",
            popular: true,
            spicy: true,
            
          },
        ],
      },
    ],
    footer: {
      title: "Bizimlə Əlaqə",
      subtitle: "Sifariş vermək və ya rezervasiya etmək üçün WhatsApp-dan yazın",
      whatsapp: "WhatsApp-da Yaz",
      address: "Qəbələ rayonu, Həzi Aslanov 47",
      phone: "+994 50 877 33 73",
      delivery: "Çatdırılma ünvana pulsuz 7/24",
    },
  },
  en: {
    brand: {
      name: "Meduza",
    },
    navigation: [
      { id: "shishalar", label: "Shishas" },
      { id: "beer", label: "Drinks" },
      { id: "snacks", label: "Snacks" },
    ],
    hero: {
      title: "Meduza",
      subtitle: "Discover Central Asia's finest collection of beer and spirits",
      cta: "Explore Collection",
    },
    labels: {
      seafood: "Seafood",
      spicy: "Spicy",
      popular: "Popular",
    },
    categories: [
      {
        id: "shishalar",
        name: "Shishas",
        description: "A curated collection of premium tobacco and rich smoke",
        items: [
          {
            name: "Jam Premium",
            description: "Jam Premium stands out with its taste and quality. Ideal for a rich aroma, smooth draw, and long-lasting flavor experience.",
            image: "/images/jam1.jpg",
          },
          {
            name: "Brusko Premium",
            description: "Brusko – a perfect blend of strong flavor, balanced smoke, and high quality. For those who want to experience real tobacco pleasure.",
            image: "/images/brusko1.jpg",
          },
          {
            name: "Serbetli",
            description: "Serbetli Premium – Turkish sweetness, soft draw, and a distinctive aroma.",
            image: "/images/serbetli2.jpg",
          },
          {
            name: "Adalya",
            description: "Adalya – classic flavors, rich aroma, and clean smoke. A favorite Turkish tobacco for hookah lovers.",
            image: "/images/adalya2.jpg",
          },
          {
            name: "Al Fakher",
            description: "Al Fakher – classic Arabian tobacco taste. Pure flavor, lasting aroma, and quality smoke.",
            image: "/images/alfakir1.jpg",
          },
          {
            name: "Hookain",
            description: "Hookain – German quality, strong aroma, and high moisture premium tobacco. Perfect taste and draw.",
            image: "/images/hookain1.png",
          },
        ],
      },
      {
        id: "beer",
        name: "Drinks",
        description: "Local and international premium drinks",
        items: [
          {
            name: "Xirdalan",
            description: "Azerbaijan's favorite local beer – Xirdalan, available in both filtered and unfiltered options.",
            image: "/images/xirdalan.png",
            alcohol: "Alcohol: 4.5%",
          },
          {
            name: "Efes",
            description: "Efes, a popular Turkish beer with a light and refreshing taste.",
            image: "/images/efes.png",
            alcohol: "Alcohol: 6.5%",
          },
          {
            name: "Eirdenger",
            description: "Eirdenger, a classic and quality German beer. Known for its rich taste and balanced aroma.",
            image: "/images/erdinger.jpg",
            alcohol: "Alcohol: 5.3%",
          },
          {
            name: "Corona Extra",
            description: "Corona, a famous Mexican beer with a light and refreshing taste, usually served with lemon.",
            image: "/images/corona.jpg",
            alcohol: "Alcohol: 4.5%",
          },
          {
            name: "Paulaner",
            description: "Paulaner, a famous German beer brand. Known for its classic Bavarian style and rich, balanced taste.",
            image: "/images/paullaner.jpg",
            alcohol: "Alcohol: 4.9%",
          },
          {
            name: "Baltika",
            description: "Baltika 9, a famous strong and dark Russian beer. Full-bodied, rich malt flavor, and light bitterness.",
            image: "/images/baltika.png",
            alcohol: "Alcohol: 8%",
          },
          {
            name: "Miller",
            description: "Miller, a popular American beer with a light and refreshing taste. Easy to drink and cooling.",
            image: "/images/miller.jpg",
            alcohol: "Alcohol: 4.8%",
          },
          {
            name: "Jameson",
            description: "Jameson, a famous Irish whiskey. Widely loved for its smooth, balanced, and rich flavor profile.",
            image: "/images/jameson.jpg",
            alcohol: "Alcohol: 40%",
          },
          {
            name: "Jack Daniels",
            description: "Jack Daniel's, a famous Tennessee whiskey. Known for its deep caramel, vanilla, and spicy flavor.",
            image: "/images/jack.jpg",
            alcohol: "Alcohol: 40%",
          },
          {
            name: "Chivas",
            description: "Chivas, a luxury blended Scotch whisky from Scotland. Rich, smooth, and fruity flavor profile.",
            image: "/images/chivas.jpeg",
            alcohol: "Alcohol: 40%",
          },
          {
            name: "Ballantine's",
            description: "Ballantine's, a famous blended Scotch whisky from Scotland. Known for its smooth, balanced, and rich aroma.",
            image: "/images/balentinas.jpg",
            alcohol: "Alcohol: 40%",
          },
          {
            name: "Olmeca Silver",
            description: "Olmeca Silver, a pure and light tequila from Mexico. Offers a fresh and citrusy drink.",
            image: "/images/Olmeca.webp",
            alcohol: "Alcohol: 35%",
          },
          {
            name: "Olmeca Sierra",
            description: "Olmeca Sierra, a premium tequila from Mexico. Light, pure, and balanced taste.",
            image: "/images/sierra.png",
            alcohol: "Alcohol: 35%",
          },
          {
            name: "Efes Zero",
            description: "Efes Zero, a non-alcoholic and light beer alternative. Offers Efes quality in a non-alcoholic form.",
            image: "/images/efes0.jpg",
            alcohol: "Alcohol: 0%",
          },
          {
            name: "Baltika 0",
            description: "Baltika 0, a non-alcoholic and light beer. Known as a refreshing and fresh drink.",
            image: "/images/baltika0.jpg",
            alcohol: "Alcohol: 0%",
          },
        ],
      },
      {
        id: "snacks",
        name: "Snacks",
        description: "Delicious snacks that pair perfectly with drinks",
        items: [
          {
            name: "Petene",
            description: "Petene is a delicious and aromatic snack made from chicken back, served with beer. Fried and enriched with spices, it goes very well with cold drinks.",
            image: "/images/petene.jpg",
            spicy: true,
            popular: true,
          },
          {
            name: "Bogaz",
            description: "Chicken neck, a soft and tasty meat part. Usually chopped and fried, enriched with spices and served as a snack. Very popular with beer.",
            image: "/images/bogaz.jpg",
            spicy: true,
          },
          {
            name: "Krivetka",
            description: "Krivetka, a seafood from Mingachevir. A delicious and juicy sea creature.",
            image: "/images/krivetka.jpg",
            seafood: true,
          },
          {
            name: "Sacaq Cheese",
            description: "Sacaq cheese, served fried or plain with lemon.",
            image: "/images/sacaq.jpg",
            popular: true,
          },
          {
            name: "Chips",
            description: "Lays, Ruffles, and Chipsim are popular chip brands. Each has a different taste and texture, a popular choice for snacks.",
            image: "/images/cips.jpg",
            popular: true,
          },
          {
            name: "Lobster",
            description: "Lobster is the most luxurious and delicious type of crab among seafood. Famous for its juicy and rich meat.",
            image: "/images/lobster.jpg",
            seafood: true,
            popular: true,
          },
          {
            name: "Nuggets and Fries",
            description: "Nuggets are small, delicious snacks made from fried chicken. Fries are fried potato slices. Both are often served together.",
            image: "/images/frinuggets.webp",
            popular: true,
          },
          {
            name: "Chicken Popcorn",
            description: "Chicken Popcorn is a delicious snack made from small, aromatic, and fried chicken pieces. Very popular with beer.",
            image: "/images/toyuqpopcorn.jpg",
            popular: true,
            spicy: true,
          },
          {
            name: "Fried Dushbere",
            description: "Fried dushbere is a small pastry filled with meat. Famous for its crispy crust and delicious filling.",
            image: "/images/dusbere.jpg",
            popular: true,
            spicy: true,
          },
        ],
      },
    ],
    footer: {
      title: "Contact Us",
      subtitle: "Write us on WhatsApp to place an order or make a reservation",
      whatsapp: "Chat on WhatsApp",
      address: "Gabala district, Hazi Aslanov 47",
      phone: "+994 50 877 33 73",
      delivery: "Free delivery to address 24/7",
    },
  },
  ar: {
    brand: {
      name: "ميدوزا",
    },
    navigation: [
      { id: "shishalar", label: "الشيشة" },
      { id: "beer", label: "المشروبات" },
      { id: "snacks", label: "المقبلات" },
    ],
    hero: {
      title: "ميدوزا",
      subtitle: "اكتشف أفضل مجموعة من البيرة والمشروبات الروحية في آسيا الوسطى",
      cta: "استكشف المجموعة",
    },
    labels: {
      seafood: "مأكولات بحرية",
      spicy: "حار",
      popular: "شعبي",
    },
    categories: [
      {
        id: "shishalar",
        name: "الشيشة",
        description: "مجموعة مختارة من التبغ الفاخر والدخان الغني",
        items: [
          {
            name: "جام بريميوم",
            description: "جام بريميوم يتميز بمذاقه وجودته. مثالي لتجربة نكهة غنية وسحب ناعم وطعم طويل الأمد.",
            image: "/images/jam1.jpg",
          },
          {
            name: "بروسكو بريميوم",
            description: "بروسكو – مزيج مثالي من النكهة القوية والدخان المتوازن والجودة العالية. لمن يريدون تجربة متعة التبغ الحقيقية.",
            image: "/images/brusko1.jpg",
          },
          {
            name: "شربتلي",
            description: "شربتلي بريميوم – حلاوة تركية، سحب ناعم، ورائحة مميزة.",
            image: "/images/serbetli2.jpg",
          },
          {
            name: "أداليا",
            description: "أداليا – نكهات كلاسيكية، رائحة غنية، ودخان نقي. تبغ تركي مفضل لعشاق الشيشة.",
            image: "/images/adalya2.jpg",
          },
          {
            name: "الفاخر",
            description: "الفاخر – طعم التبغ العربي الكلاسيكي. نكهة نقية، رائحة دائمة، ودخان عالي الجودة.",
            image: "/images/alfakir1.jpg",
          },
          {
            name: "هوكاين",
            description: "هوكاين – جودة ألمانية، رائحة قوية، وتبغ بريميوم عالي الرطوبة. طعم وسحب مثالي.",
            image: "/images/hookain1.png",
          },
        ],
      },
      {
        id: "beer",
        name: "المشروبات",
        description: "مشروبات محلية ودولية فاخرة",
        items: [
          {
            name: "خردالان",
            description: "بيرة أذربيجانية محلية مفضلة – خردالان، متوفرة بخيارات مفلترة وغير مفلترة.",
            image: "/images/xirdalan.png",
            alcohol: "4.5 % الكحول",
          },
          {
            name: "إيفيس",
            description: "إيفيس، بيرة تركية شهيرة بطعم خفيف ومنعش.",
            image: "/images/efes.png",
            alcohol:  "6.5 % الكحول",
          },
          {
            name: "إيردينجر",
            description: "إيردينجر، بيرة ألمانية كلاسيكية وعالية الجودة. معروفة بمذاقها الغني ورائحتها المتوازنة.",
            image: "/images/erdinger.jpg",
            alcohol: "5.3 % الكحول",
          },
          {
            name: "كورونا إكسترا",
            description: "كورونا، بيرة مكسيكية شهيرة بطعم خفيف ومنعش، تقدم عادة مع الليمون.",
            image: "/images/corona.jpg",
            alcohol: "4.5 % الكحول",
          },
          {
            name: "باولانر",
            description: "باولانر، علامة تجارية ألمانية مشهورة. معروفة بأسلوبها البافاري الكلاسيكي وطعمها الغني والمتوازن.",
            image: "/images/paullaner.jpg",
            alcohol: "4.9 % الكحول",
          },
          {
            name: "بالتیکا",
            description: "بالتیکا 9، بيرة روسية قوية وغامقة مشهورة. نكهة الشعير الغنية والجسم الكامل ومرارة خفيفة.",
            image: "/images/baltika.png",
            alcohol: "8% الكحول",
          },
          {
            name: "ميلر",
            description: "ميلر، بيرة أمريكية شهيرة بطعم خفيف ومنعش. سهلة الشرب ومنعشة.",
            image: "/images/miller.jpg",
            alcohol: "4.8 % الكحول",
          },
          {
            name: "جيمسون",
            description: "جيمسون، ويسكي أيرلندي شهير. محبوب على نطاق واسع لمذاقه الناعم والمتوازن والغني.",
            image: "/images/jameson.jpg",
            alcohol: "40 % الكحول",
          },
          {
            name: "جاك دانيالز",
            description: "جاك دانيالز، ويسكي تينيسي الشهير. معروف بنكهة الكراميل العميقة والفانيليا والتوابل.",
            image: "/images/jack.jpg",
            alcohol: "40 % الكحول",
          },
          {
            name: "شيفاس",
            description: "شيفاس، ويسكي اسكتلندي فاخر مخلوط. نكهة غنية وناعمة وفاكهية.",
            image: "/images/chivas.jpeg",
            alcohol: "40 % الكحول",
          },
          {
            name: "بالانتاينز",
            description: "بالانتاينز، ويسكي اسكتلندي مخلوط مشهور. معروف بنكهته الناعمة والمتوازنة والغنية.",
            image: "/images/balentinas.jpg",
            alcohol: "40 % الكحول",
          },
          {
            name: "أولميكا سيلفر",
            description: "أولميكا سيلفر، تيكيلا مكسيكية نقية وخفيفة. تقدم مشروبًا منعشًا وحمضيًا.",
            image: "/images/Olmeca.webp",
            alcohol: "35 % الكحول",
          },
          {
            name: "أولميكا سييرا",
            description: "أولميكا سييرا، تيكيلا مكسيكية فاخرة. طعم خفيف ونقي ومتوازن.",
            image: "/images/sierra.png",
            alcohol: "35 % الكحول",
          },
          {
            name: "إيفيس زيرو",
            description: "إيفيس زيرو، بيرة خالية من الكحول وخفيفة. تقدم جودة إيفيس في شكل خالٍ من الكحول.",
            image: "/images/efes0.jpg",
            alcohol: "0 % الكحول",
          },
          {
            name: "بالتیکا 0",
            description: "بالتیکا 0، بيرة خالية من الكحول وخفيفة. معروفة كمشروب منعش وطازج.",
            image: "/images/baltika0.jpg",
            alcohol: "0 % الكحول",
          },
        ],
      },
      {
        id: "snacks",
        name: "المقبلات",
        description: "مقبلات لذيذة تتناسب تماماً مع المشروبات",
        items: [
          {
            name: "بيتينه",
            description: "بيتينه هو مقبل لذيذ وعطري مصنوع من ظهر الدجاج، يقدم مع البيرة. يُقلى ويُغنى بالتوابل، ويتناسب جيدًا مع المشروبات الباردة.",
            image: "/images/petene.jpg",
            spicy: true,
            popular: true,
          },
          {
            name: "بوغاز",
            description: "رقبة الدجاج، جزء لحمي ناعم ولذيذ. يُقطع عادة ويُقلى ويُغنى بالتوابل ويقدم كمقبلات. شائع جدًا مع البيرة.",
            image: "/images/bogaz.jpg",
            spicy: true,
          },
          {
            name: "كريفيتكا",
            description: "كريفيتكا، مأكولات بحرية من مينغاچيفير. مخلوق بحري لذيذ وعصير.",
            image: "/images/krivetka.jpg",
            seafood: true,
          },
          {
            name: "جبنة ساجاق",
            description: "جبنة ساجاق، تقدم مقلية أو عادية مع الليمون.",
            image: "/images/sacaq.jpg",
            popular: true,
          },
          {
            name: "شيبس",
            description: "ليز، روفلز، وشيبسيم هي علامات تجارية مشهورة للرقائق. لكل منها طعم وقوام مختلف، خيار شائع للمقبلات.",
            image: "/images/cips.jpg",
            popular: true,
          },
          {
            name: "لوبستر",
            description: "لوبستر هو أفخم وألذ أنواع السلطعون بين المأكولات البحرية. يشتهر بلحمه العصير والغني.",
            image: "/images/lobster.jpg",
            seafood: true,
            popular: true,
          },
          {
            name: "ناجتس وبطاطا مقلية",
            description: "ناجتس هي مقبلات لذيذة مصنوعة من قطع دجاج مقلية صغيرة. البطاطا المقلية هي شرائح بطاطا مقلية. غالبًا ما يتم تقديمهما معًا.",
            image: "/images/frinuggets.webp",
            popular: true,
          },
          {
            name: "بوب كورن الدجاج",
            description: "بوب كورن الدجاج هو مقبل لذيذ مصنوع من قطع دجاج صغيرة وعطرية ومقلية. شائع جدًا مع البيرة.",
            image: "/images/toyuqpopcorn.jpg",
            popular: true,
            spicy: true,
          },
          {
            name: "دوشبيري مقلي",
            description: "دوشبيري المقلي هو معجنات صغيرة محشوة باللحم. يشتهر بقشرته المقرمشة وحشوته اللذيذة.",
            image: "/images/dusbere.jpg",
            popular: true,
            spicy: true,
          },
        ],
      },
    ],
    footer: {
      title: "اتصل بنا",
      subtitle: "اكتب لنا على واتساب لتقديم طلب أو حجز",
      whatsapp: "دردش على واتساب",
      address: "منطقة قبالا، حزي أصلانوف 47",
      phone: "+994 50 877 33 73",
      delivery: "توصيل مجاني إلى العنوان 24/7",
    },
  },
}
