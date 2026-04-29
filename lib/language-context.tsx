"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Language = "ar" | "tr"

interface Translations {
  // General
  menu: string
  home: string
  chooseCategory: string
  browseMenu: string
  noProducts: string
  categoryNotFound: string
  backToHome: string
  price: string
  currency: string
  
  // Welcome
  welcomeTitle: string
  welcomeMessage: string
  startBrowsing: string
  
  // Footer
  footerTagline: string
  footerDescription: string
  quickLinks: string
  followUs: string
  madeWith: string
  inSaudi: string
  allRights: string
  
  // Categories
  categories: {
    burger: { name: string; description: string; heroText: string }
    pizza: { name: string; description: string; heroText: string }
    broasted: { name: string; description: string; heroText: string }
    sandwiches: { name: string; description: string; heroText: string }
    drinks: { name: string; description: string; heroText: string }
    desserts: { name: string; description: string; heroText: string }

  }
  
  // Products
  products: {
    [key: string]: { name: string; description: string }
  }
}

const translations: Record<Language, Translations> = {
  ar: {
    menu: "قائمة الطعام",
    home: "الرئيسية",
    chooseCategory: "اختر من أقسامنا المتنوعة",
    browseMenu: "تصفح القائمة",
    noProducts: "لا توجد منتجات في هذا القسم حالياً",
    categoryNotFound: "القسم غير موجود",
    backToHome: "العودة للرئيسية",
    price: "السعر",
    currency: "₺",
    welcomeTitle: "أهلاً بك في نوتو",
    welcomeMessage: "اكتشف قائمتنا المميزة واستمتع بتجربة طعام لا تُنسى",
    startBrowsing: "ابدأ التصفح",
    footerTagline: "نوتو - تجربة طعام استثنائية",
    footerDescription: "نقدم لكم أشهى المأكولات المحضرة بعناية من أجود المكونات الطازجة",
    quickLinks: "روابط سريعة",
    followUs: "تابعنا",
    madeWith: "صُنع بكل",
    inSaudi: "في تركيا، الريحانية",
    allRights: "جميع الحقوق محفوظة",

    categories: {
      burger: { 
        name: "برجر", 
        description: "ألذ أنواع البرجر المشوي الطازج",
        heroText: "استمتع بأشهى البرجر المحضر من لحم الأنجوس الطازج مع تشكيلة واسعة من الإضافات اللذيذة"
      },
      pizza: { 
        name: "بيتزا", 
        description: "بيتزا إيطالية أصلية بعجينة طازجة",
        heroText: "بيتزا إيطالية أصلية محضرة بعجينة طازجة يومياً مع أجود أنواع الجبن والطماطم"
      },
      
  
      broasted: { 
        name: "بروستد", 
        description: "دجاج بروستد مقرمش ولذيذ",
        heroText: "دجاج بروستد مقرمش من الخارج وطري من الداخل، محضر بخلطة توابل سرية"
      },
      sandwiches: { 
        name: "ساندويتشات", 
        description: "تشكيلة متنوعة من الساندويتشات",
        heroText: "تشكيلة واسعة من الساندويتشات الشهية المحضرة بخبز طازج ومكونات فاخرة"
      },
      drinks: { 
        name: "مشروبات", 
        description: "مشروبات باردة وساخنة منعشة",
        heroText: "مشروبات منعشة وطازجة لإكمال وجبتك، من العصائر الطبيعية إلى القهوة الفاخرة"
      },
      
      
      desserts: { 
        name: "حلويات", 
        description: "أشهى الحلويات الشرقية والغربية",
        heroText: "تشكيلة فاخرة من الحلويات الشرقية والغربية المحضرة بأيدي أمهر الطهاة"
      }
    },
    products: {
      "burger-1": { name: "همبرغر لحم دبل", description: "200 غرام لحم + صوص برغر + بندورة + خس + مخلل + جبنة برغر + جبنة قشقوان" },
      "burger-2": { name: "شكن برغر", description: "صوص خاص + خس + مخلل + شكن" },
      "burger-3": { name: "برغر زنجر", description: "صوص خاص + خس + مخلل + 2 قطع زنجر + جبنة شيدر" },
      "burger-4": { name: "برغر زنجر اكسترا", description: "صوص خاص + خس + مخلل + 2 قطع زنجر + جبنة شيدر + حلقات بصل + 2 قطع ستيك موزريلا" },
      "pizza-1": { name: "مارغريتا", description: "صوص طماطم، جبنة موزاريلا طازجة، ريحان" },
      "pizza-2": { name: "بيبروني", description: "بيبروني حار مع جبنة موزاريلا وصوص طماطم" },
      "pizza-3": { name: "خضروات", description: "تشكيلة من الخضروات الطازجة مع جبنة موزاريلا" },
      "pizza-4": { name: "سوبريم", description: "لحم، دجاج، فلفل، بصل، زيتون، مشروم" },
      "broasted-1": { name: "وجبة بروستد", description: " قطع دجاج 4 +بطاطا + صوصات" },
      "broasted-2": { name: "وجبة جناح", description: "  قطع جناح 5 +بطاطا +صوصات " },
      "broasted-3": { name: "وجبة فخاد", description: "قطع دجاج5 +بطاطا +صوصات" },
      "broasted-4": { name: "وجبة كريسبي", description: " قطع دجاج مقرمش 5 + بطاطا + صوصات " },
      "broasted-5": { name: "وجبة سبايسي حد", description: "  قطع دجاج حد 5 +بطاطا +صوصات " },
      "broasted-6": { name: "وجبة اسكالوب", description: " قطع دجاج5 + بطاطا + صوصات" },
      "broasted-7": { name: "وجبة ناغيت", description: "قطع دجاج 10  +بطاطا +صوصات" },
      "broasted-8": { name: "وجبة سوبريم", description: " قطع دجاج بالجبنة 2 +بطاطا +صوصات" },
      "broasted-9": { name: "وجبة كوردون بلو", description: " قطعة دجاج بالجبنة والفطر 2 + صوص  + بطاطا " },
      "sandwich-1": { name: "صندويش فاهيتا", description: "صوص خاص + قطع دجاج مشوي + فليفلة خضرة + فليفلة حمرة + فطر + جبنة موزريلا" },
      "drink-1": { name: "عصير برتقال طازج", description: "عصير برتقال طبيعي 100%" },
      "drink-2": { name: "موهيتو", description: "نعناع طازج، ليمون، سكر، صودا" },
      "drink-3": { name: "سموذي فراولة", description: "فراولة طازجة مع حليب وآيس كريم" },
      "drink-4": { name: "قهوة عربية", description: "قهوة عربية أصيلة مع هيل" },
      "dessert-1": { name: "كنافة نابلسية", description: "كنافة تقليدية بالجبنة مع قطر" },
      "dessert-2": { name: "تشيز كيك", description: "تشيز كيك نيويورك كريمي" },
      "dessert-3": { name: "براوني شوكولاتة", description: "براوني دافئ مع آيس كريم فانيلا" },
      "dessert-4": { name: "بقلاوة", description: "بقلاوة فستق تركية أصلية" },

    }
  },



  tr: {
    menu: "Menü",
    home: "Ana Sayfa",
    chooseCategory: "Çeşitli kategorilerimizden seçin",
    browseMenu: "Menüye Göz At",
    noProducts: "Bu kategoride şu anda ürün bulunmamaktadır",
    categoryNotFound: "Kategori bulunamadı",
    backToHome: "Ana Sayfaya Dön",
    price: "Fiyat",
    currency: "₺",
    welcomeTitle: "Noto'ya Hoş Geldiniz",
    welcomeMessage: "Özel menümüzü keşfedin ve unutulmaz bir yemek deneyimi yaşayın",
    startBrowsing: "Keşfetmeye Başla",
    footerTagline: "Noto - Olağanüstü Yemek Deneyimi",
    footerDescription: "En taze malzemelerle özenle hazırlanmış en lezzetli yemekleri sunuyoruz",
    quickLinks: "Hızlı Bağlantılar",
    followUs: "Bizi Takip Edin",
    madeWith: "Sevgiyle",
    inSaudi: "Türkiye, Reyhanlı'da yapılmıştır",
    allRights: "Tüm hakları saklıdır",
    categories: {
      burger: { 
        name: "Burger", 
        description: "En lezzetli taze ızgara burgerler",
        heroText: "Taze Angus etinden yapılmış en lezzetli burgerlerle çeşitli lezzetli eklemelerle keyfini çıkarın"
      },

      pizza: { 
        name: "Pizza", 
        description: "Taze hamurlu otantik İtalyan pizzası",
        heroText: "Her gün taze hamurla hazırlanan, en kaliteli peynir ve domates ile otantik İtalyan pizzası"
      },


      broasted: { 
        name: "Broasted", 
        description: "Çıtır ve lezzetli broasted tavuk",
        heroText: "Dışı çıtır içi yumuşak broasted tavuk, gizli baharat karışımıyla hazırlanmış"
      },
      sandwiches: { 
        name: "Sandviçler", 
        description: "Çeşitli lezzetli sandviçler",
        heroText: "Taze ekmek ve premium malzemelerle hazırlanan geniş sandviç çeşitleri"
      },
      drinks: { 
        name: "İçecekler", 
        description: "Serinletici sıcak ve soğuk içecekler",
        heroText: "Yemeğinizi tamamlamak için doğal meyve sularından premium kahveye kadar taze ve serinletici içecekler"
      },
      
      
      desserts: { 
        name: "Tatlılar", 
        description: "En iyi Doğu ve Batı tatlıları",
        heroText: "En yetenekli şefler tarafından hazırlanan lüks Doğu ve Batı tatlıları koleksiyonu"
      }
    },
    products: {
      "burger-1": { name: "Double Et Hamburger", description: "200 gram et + burger sosu + domates + marul + turşu + burger peyniri + kaşar peyniri" },
      "burger-2": { name: "Chicken Burger", description: "Özel sos + marul + turşu + tavuk" },
      "burger-3": { name: "Zinger Burger", description: "Özel sos + marul + turşu + 2 parça zinger + cheddar peyniri" },
      "burger-4": { name: "Ekstra Zinger Burger", description: "Özel sos + marul + turşu + 2 parça zinger + cheddar peyniri + soğan halkaları + 2 parça mozzarella stick" },
      "pizza-1": { name: "Margherita", description: "Domates sosu, taze mozzarella peyniri, fesleğen" },
      "pizza-2": { name: "Pepperoni", description: "Mozzarella peyniri ve domates soslu acılı pepperoni" },
      "pizza-3": { name: "Sebzeli", description: "Mozzarella peynirli çeşitli taze sebzeler" },
      "pizza-4": { name: "Supreme", description: "Et, tavuk, biber, soğan, zeytin, mantar" },
      "broasted-1": { name: "Broasted Menü", description: "Tavuk parçası + sarımsak kreması + patates + sos" },
      "broasted-2": { name: "Kanat Menü", description: "Patates ve sos ile servis edilen marine edilmiş çıtır tavuk kanatları" },
      "broasted-3": { name: "But Menü", description: "Patates ile servis edilen marine edilmiş ve çıtır kızartılmış tavuk butları" },
      "broasted-4": { name: "Crispy Menü", description: "Patates ve kremalı sos ile altın renkli crispy tavuk parçaları" },
      "broasted-5": { name: "Çok Acılı Menü", description: "Güçlü lezzet sevenler için patatesli çok acılı tavuk menüsü" },
      "broasted-6": { name: "Escalope Menü", description: "Özel baharatlı çıtır tavuk escalope ve patates" },
      "broasted-7": { name: "Nugget Menü", description: "Patates ve dip sos ile altın renkli tavuk nugget parçaları" },
      "broasted-8": { name: "Supreme Menü", description: "Patates ve özel sos ile zengin lezzetli tavuk supreme menüsü" },
      "broasted-9": { name: "Cordon Bleu Menü", description: "Peynir dolgulu tavuk cordon bleu, patates ile servis edilir" },
      "sandwich-1": { name: "Fajita Sandviç", description: "Özel sos + ızgara tavuk parçaları + yeşil biber + kırmızı biber + mantar + mozzarella peyniri" },
      "drink-1": { name: "Taze Portakal Suyu", description: "%100 doğal portakal suyu" },
      "drink-2": { name: "Mojito", description: "Taze nane, limon, şeker, soda" },
      "drink-3": { name: "Çilek Smoothie", description: "Süt ve dondurma ile taze çilek" },
      "drink-4": { name: "Arap Kahvesi", description: "Kakule ile otantik Arap kahvesi" },
      "dessert-1": { name: "Nablus Künefe", description: "Şerbetli geleneksel peynirli künefe" },
      "dessert-2": { name: "Cheesecake", description: "Kremalı New York cheesecake" },
      "dessert-3": { name: "Çikolatalı Brownie", description: "Vanilya dondurması ile sıcak brownie" },
      "dessert-4": { name: "Baklava", description: "Otantik Türk fıstıklı baklava" },

    }
  }
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
  dir: "rtl" | "ltr"
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar")

  useEffect(() => {
    const savedLang = localStorage.getItem("noto-language") as Language
    if (savedLang && (savedLang === "ar" || savedLang === "tr")) {
      setLanguage(savedLang)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("noto-language", language)
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    dir: language === "ar" ? "rtl" : "ltr"
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
