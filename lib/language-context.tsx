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
    salads: { name: string; description: string; heroText: string }
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
      salads: {
        name: "سلطات",
        description: "سلطات طازجة ومتنوعة",
        heroText: "سلطات طازجة محضرة بمكونات يومية ونكهات خفيفة تناسب كل الوجبات"
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
      "burger-5": { name: "شكن برغر دبل", description: "صوص خاص + خس + مخلل خيار + لحم دجاج عدد 2 + بطاطا" },
      "burger-6": { name: "برغر سكلوب", description: "صوص خاص + خس + مخلل + جبنة شيدر + سكلوب عدد 2 + بطاطا" },
      "burger-7": { name: "همبرغر لحم", description: "صوص خاص + بندورة + مخلل + خس + جبنة شيدر + لحم غنم" },
      "pizza-1": { name: "بيتزا ايطاليانو", description: "صوص بيتزا + جبنة موزريلا + سجق + مرتديلا + هوت دوغ + فطر + زيتون + فليفلة خضرة + ذرة" },
      "pizza-2": { name: "بيتزا نوتو", description: "صوص بيتزا + جبنة موزريلا + سمسم عالكنار + باسترما + سجق + فطر + فليفلة خضرة + فليفلة حمرة + اوريغانو" },
      "pizza-3": { name: "بيتزا خضار", description: "صوص بيتزا + جبنة موزريلا + فطر + زيتون + فليفلة خضرة + ذرة + بندورة" },
      "pizza-4": { name: "بيتزا مارغريتا", description: "صوص بيتزا + جبنة موزريلا + بندورة" },
      "pizza-5": { name: "بيتزا كاربي", description: "صوص بيتزا + جبنة موزريلا + دجاج مقلي + فطر + فليفلة حمرة + ذرة" },
      "pizza-6": { name: "بيتزا باسترما", description: "صوص بيتزا + لحم باسترما + بيض" },
      "pizza-7": { name: "بيتزا نابولي", description: "صوص بيتزا + جبنة موزريلا + سجق" },
      "pizza-8": { name: "بيتزا أناناس", description: "صوص بيتزا + جبنة موزريلا + أناناس + ذرة + سجق" },
      "pizza-9": { name: "بيتزا فيرونا", description: "صوص خاص + جبنة + سجق + مرتديلا + فطر" },
      "pizza-10": { name: "بيتزا فاهيتا", description: "صوص خاص + جبنة موزريلا + فطر + فليفلة حمرة + فليفلة خضرة + ذرة + دجاج مشوي" },
      "pizza-11": { name: "بيتزا مكسيكانو", description: "صوص خاص + جبنة موزريلا + سجق + فطر + فليفلة حمرة + مخلل جيليبون حار" },
      "pizza-12": { name: "بيتزا بلسمك التونا", description: "صوص خاص + جبنة موزريلا + سمك تونا + بصل + ذرة" },
      "pizza-13": { name: "بيتزا بالجبنة سادة", description: "صوص خاص + جبنة موزريلا" },
      "pizza-14": { name: "بيتزا كنارلي", description: "بيتزا بحافة خاصة محشية بالجبنة" },
      "pizza-15": { name: "بيتزا بالفطر", description: "صوص بيتزا + جبنة موزريلا + فطر" },
      "pizza-16": { name: "بيتزا تورينو", description: "صوص خاص + جبنة موزريلا + مكونات تورينو الخاصة" },
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
      "sandwich-2": { name: "صندويش كريسبي", description: "صوص خاص + خس + مخلل + كريسبي عدد 2 + بطاطا" },
      "sandwich-3": { name: "زنجر كريب", description: "صوص خاص + خس + مخلل + كريسبي عدد 2 + بطاطا" },
      "sandwich-4": { name: "كريسبي خبز صاج", description: "صوص خاص + خس + مخلل + جبنة شيدر + كريسبي عدد 2 + بطاطا" },
      "sandwich-5": { name: "صندويش مكسيكانو", description: "صوص خاص + فليفلة خضرة حار + فليفلة حمرة حار + ذرة + فطر + دجاج مشوي + بطاطا" },
      "sandwich-6": { name: "صندويش بطاطا مع جبنة", description: "كريم توم + صلصة + جبنة + بطاطا + صوص" },
      "salad-1": { name: "سلطة عادية", description: "بندورة + خس + خيار + جزر + ملفوف أحمر + ليمون" },
      "salad-2": { name: "سلطة بالدجاج", description: "بندورة + خيار + جزر + خس + ليمون + دجاج مقلي" },
      "salad-3": { name: "سلطة طون", description: "بندورة + خس + ليمون + فليفلة حمرة + طون + ذرة" },
      "salad-4": { name: "سلطة بالجبنة", description: "بندورة + خس + خيار + جزر + ملفوف أحمر + ذرة" },
      "drink-1": { name: "كولا تنك ٣٣٠ مل", description: "مشروب غازي بارد" },
      "drink-2": { name: "سبرايت تنك ٣٣٠ مل", description: "مشروب غازي بارد" },
      "drink-3": { name: "ايس تي ٣٣٠ مل", description: "شاي مثلج بارد" },
      "drink-4": { name: "كولا بلور ٢٠٠ مل", description: "مشروب غازي بارد" },
      "drink-5": { name: "لتر كولا", description: "مشروب غازي بارد" },
      "drink-6": { name: "لتر فانتا", description: "مشروب غازي بارد" },
      "drink-7": { name: "لتر ونص كولا", description: "مشروب غازي بارد" },
      "drink-8": { name: "لترين ونص كولا", description: "مشروب غازي بارد" },
      "drink-9": { name: "عيران كبير ٢٠٠ مل", description: "عيران بارد" },
      "drink-10": { name: "ماء صغير", description: "مياه باردة" },
      "drink-11": { name: "ماء كبير", description: "مياه باردة" },
      "drink-12": { name: "صودا ليمون", description: "صودا بنكهة الليمون" },
      "drink-13": { name: "صودا تفاح", description: "صودا بنكهة التفاح" },
      "drink-14": { name: "صودا توت", description: "صودا بنكهة التوت" },
      "drink-15": { name: "عصير سلس", description: "عصير بارد" },
      "drink-16": { name: "عصير توربا", description: "عصير بارد" },
      "drink-17": { name: "أنقرة كازوز", description: "مشروب غازي بارد" },
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
        name: "Çıtır Tavuk", 
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
      salads: {
        name: "Salatalar",
        description: "Taze ve çeşitli salatalar",
        heroText: "Günlük taze malzemelerle hazırlanan, her öğüne yakışan hafif ve lezzetli salatalar"
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
      "burger-5": { name: "Double Chicken Burger", description: "Özel sos + marul + salatalık turşusu + 2 parça tavuk eti + patates" },
      "burger-6": { name: "Escalope Burger", description: "Özel sos + marul + turşu + cheddar peyniri + 2 parça escalope + patates" },
      "burger-7": { name: "Et Hamburger", description: "Özel sos + domates + turşu + marul + cheddar peyniri + kuzu eti" },
      "pizza-1": { name: "Italiano Pizza", description: "Pizza sosu + mozzarella peyniri + sucuk + mortadella + hot dog + mantar + zeytin + yeşil biber + mısır" },
      "pizza-2": { name: "Noto Pizza", description: "Pizza sosu + mozzarella peyniri + kenarında susam + pastırma + sucuk + mantar + yeşil biber + kırmızı biber + oregano" },
      "pizza-3": { name: "Sebzeli Pizza", description: "Pizza sosu + mozzarella peyniri + mantar + zeytin + yeşil biber + mısır + domates" },
      "pizza-4": { name: "Margherita Pizza", description: "Pizza sosu + mozzarella peyniri + domates" },
      "pizza-5": { name: "Carpi Pizza", description: "Pizza sosu + mozzarella peyniri + kızarmış tavuk + mantar + kırmızı biber + mısır" },
      "pizza-6": { name: "Pastırmalı Pizza", description: "Pizza sosu + pastırma eti + yumurta" },
      "pizza-7": { name: "Napoli Pizza", description: "Pizza sosu + mozzarella peyniri + sucuk" },
      "pizza-8": { name: "Ananaslı Pizza", description: "Pizza sosu + mozzarella peyniri + ananas + mısır + sucuk" },
      "pizza-9": { name: "Verona Pizza", description: "Özel sos + peynir + sucuk + mortadella + mantar" },
      "pizza-10": { name: "Fajita Pizza", description: "Özel sos + mozzarella peyniri + mantar + kırmızı biber + yeşil biber + mısır + ızgara tavuk" },
      "pizza-11": { name: "Mexicano Pizza", description: "Özel sos + mozzarella peyniri + sucuk + mantar + kırmızı biber + acı jalapeno turşusu" },
      "pizza-12": { name: "Ton Balıklı Pizza", description: "Özel sos + mozzarella peyniri + ton balığı + soğan + mısır" },
      "pizza-13": { name: "Sade Peynirli Pizza", description: "Özel sos + mozzarella peyniri" },
      "pizza-14": { name: "Kenarlı Pizza", description: "Peynir dolgulu özel kenarlı pizza" },
      "pizza-15": { name: "Mantarlı Pizza", description: "Pizza sosu + mozzarella peyniri + mantar" },
      "pizza-16": { name: "Torino Pizza", description: "Özel sos + mozzarella peyniri + Torino özel malzemeleri" },
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
      "sandwich-2": { name: "Crispy Sandviç", description: "Özel sos + marul + turşu + 2 parça crispy + patates" },
      "sandwich-3": { name: "Zinger Krep", description: "Özel sos + marul + turşu + 2 parça crispy + patates" },
      "sandwich-4": { name: "Saj Ekmekli Crispy", description: "Özel sos + marul + turşu + cheddar peyniri + 2 parça crispy + patates" },
      "sandwich-5": { name: "Mexicano Sandviç", description: "Özel sos + acı yeşil biber + acı kırmızı biber + mısır + mantar + ızgara tavuk + patates" },
      "sandwich-6": { name: "Peynirli Patates Sandviç", description: "Sarımsak kreması + sos + peynir + patates + özel sos" },
      "salad-1": { name: "Normal Salata", description: "Domates + marul + salatalık + havuç + kırmızı lahana + limon" },
      "salad-2": { name: "Tavuklu Salata", description: "Domates + salatalık + havuç + marul + limon + kızarmış tavuk" },
      "salad-3": { name: "Ton Balıklı Salata", description: "Domates + marul + limon + kırmızı biber + ton balığı + mısır" },
      "salad-4": { name: "Peynirli Salata", description: "Domates + marul + salatalık + havuç + kırmızı lahana + mısır" },
      "drink-1": { name: "Kola Teneke 330 ml", description: "Soğuk gazlı içecek" },
      "drink-2": { name: "Sprite Teneke 330 ml", description: "Soğuk gazlı içecek" },
      "drink-3": { name: "Ice Tea 330 ml", description: "Soğuk buzlu çay" },
      "drink-4": { name: "Kola Cam 200 ml", description: "Soğuk gazlı içecek" },
      "drink-5": { name: "1 Litre Kola", description: "Soğuk gazlı içecek" },
      "drink-6": { name: "1 Litre Fanta", description: "Soğuk gazlı içecek" },
      "drink-7": { name: "1.5 Litre Kola", description: "Soğuk gazlı içecek" },
      "drink-8": { name: "2.5 Litre Kola", description: "Soğuk gazlı içecek" },
      "drink-9": { name: "Büyük Ayran 200 ml", description: "Soğuk ayran" },
      "drink-10": { name: "Küçük Su", description: "Soğuk su" },
      "drink-11": { name: "Büyük Su", description: "Soğuk su" },
      "drink-12": { name: "Limonlu Soda", description: "Limon aromalı soda" },
      "drink-13": { name: "Elmalı Soda", description: "Elma aromalı soda" },
      "drink-14": { name: "Orman Meyveli Soda", description: "Orman meyvesi aromalı soda" },
      "drink-15": { name: "Seles Meyve Suyu", description: "Soğuk meyve suyu" },
      "drink-16": { name: "Torba Meyve Suyu", description: "Soğuk meyve suyu" },
      "drink-17": { name: "Ankara Gazoz", description: "Soğuk gazlı içecek" },
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
