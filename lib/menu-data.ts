export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
  sizePrices?: {
    s: number;
    m: number;
    l: number;
    xl: number;
  };
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: "burger",
    name: "برجر",
    description: "ألذ أنواع البرجر المشوي الطازج",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    color: "orange",
    icon: "🍔"
  },

  
  {
    id: "pizza",
    name: "بيتزا",
    description: "بيتزا إيطالية أصلية بعجينة طازجة",
    image: "/pizaa/NOTOPİZZA.png",
    color: "red",
    icon: "🍕"
  },


  {
    id: "broasted",
    name: "بروستد",
    description: "دجاج بروستد مقرمش ولذيذ",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80",
    color: "yellow",
    icon: "🍗"
  },
  {
    id: "sandwiches",
    name: "ساندويتشات",
    description: "تشكيلة متنوعة من الساندويتشات",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=800&q=80",
    color: "green",
    icon: "🥪"
  },
  {
    id: "drinks",
    name: "مشروبات",
    description: "مشروبات باردة وساخنة منعشة",
    image: "/İcecekler/KolaTeneke330ml.png",
    color: "blue",
    icon: "🥤"
  },
  {
    id: "salads",
    name: "سلطات",
    description: "سلطات طازجة ومتنوعة",
    image: "/Salatalar/NormalSalata.png",
    color: "green",
    icon: "🥗"
  },



];

export const products: Product[] = [
  // Burgers
  {
    id: "burger-1",
    name: "همبرغر لحم دبل",
    description: "200 غرام لحم + صوص برغر + بندورة + خس + مخلل + جبنة برغر + جبنة قشقوان",
    price: 385,
    image: "/h1.png",
    categoryId: "burger"
  },
  {
    id: "burger-2",
    name: "شكن برغر",
    description: "صوص خاص + خس + مخلل + شكن",
    price: 225,
    image: "/h2.png",
    categoryId: "burger"
  },
  {
    id: "burger-3",
    name: "برغر زنجر",
    description: "صوص خاص + خس + مخلل + 2 قطع زنجر + جبنة شيدر",
    price: 260,
    image: "/h3.png",
    categoryId: "burger"
  },
  {
    id: "burger-4",
    name: "برغر زنجر اكسترا",
    description: "صوص خاص + خس + مخلل + 2 قطع زنجر + جبنة شيدر + حلقات بصل + 2 قطع ستيك موزريلا",
    price: 380,
    image: "/h3.png",
    categoryId: "burger"
  },
  {
    id: "burger-5",
    name: "شكن برغر دبل",
    description: "صوص خاص + خس + مخلل خيار + لحم دجاج عدد 2 + بطاطا",
    price: 390,
    image: "/hamburgerler/DoubleChickenBurger.png",
    categoryId: "burger"
  },
  {
    id: "burger-6",
    name: "برغر سكلوب",
    description: "صوص خاص + خس + مخلل + جبنة شيدر + سكلوب عدد 2 + بطاطا",
    price: 265,
    image: "/hamburgerler/Escalope Burger.png",
    categoryId: "burger"
  },
  {
    id: "burger-7",
    name: "همبرغر لحم",
    description: "صوص خاص + بندورة + مخلل + خس + جبنة شيدر + لحم غنم",
    price: 295,
    image: "/hamburgerler/EtHamburger.png",
    categoryId: "burger"
  },
  // Pizzas
  {
    id: "pizza-1",
    name: "بيتزا ايطاليانو",
    description: "صوص بيتزا + جبنة موزريلا + سجق + مرتديلا + هوت دوغ + فطر + زيتون + فليفلة خضرة + ذرة",
    price: 260,
    image: "/pizaa/İTALİANOSPECİAL.png",
    categoryId: "pizza",
    sizePrices: { s: 160, m: 260, l: 360, xl: 470 }
  },
  {
    id: "pizza-2",
    name: "بيتزا نوتو",
    description: "صوص بيتزا + جبنة موزريلا + سمسم عالكنار + باسترما + سجق + فطر + فليفلة خضرة + فليفلة حمرة + اوريغانو",
    price: 290,
    image: "/pizaa/NOTOPİZZA.png",
    categoryId: "pizza",
    sizePrices: { s: 190, m: 290, l: 390, xl: 490 }
  },
  {
    id: "pizza-3",
    name: "بيتزا خضار",
    description: "صوص بيتزا + جبنة موزريلا + فطر + زيتون + فليفلة خضرة + ذرة + بندورة",
    price: 260,
    image: "/pizaa/VEGETERİAN.png",
    categoryId: "pizza",
    sizePrices: { s: 160, m: 260, l: 360, xl: 460 }
  },
  {
    id: "pizza-4",
    name: "بيتزا مارغريتا",
    description: "صوص بيتزا + جبنة موزريلا + بندورة",
    price: 260,
    image: "/pizaa/MARGARİTA.png",
    categoryId: "pizza",
    sizePrices: { s: 160, m: 260, l: 360, xl: 460 }
  },
  {
    id: "pizza-5",
    name: "بيتزا كاربي",
    description: "صوص بيتزا + جبنة موزريلا + دجاج مقلي + فطر + فليفلة حمرة + ذرة",
    price: 260,
    image: "/pizaa/CAPRİ.png",
    categoryId: "pizza",
    sizePrices: { s: 160, m: 260, l: 360, xl: 460 }
  },
  {
    id: "pizza-6",
    name: "بيتزا باسترما",
    description: "صوص بيتزا + لحم باسترما + بيض",
    price: 290,
    image: "/pizaa/PASTIRMALI.png",
    categoryId: "pizza",
    sizePrices: { s: 190, m: 290, l: 390, xl: 490 }
  },
  {
    id: "pizza-7",
    name: "بيتزا نابولي",
    description: "صوص بيتزا + جبنة موزريلا + سجق",
    price: 290,
    image: "/pizaa/NAPOLİ.png",
    categoryId: "pizza",
    sizePrices: { s: 190, m: 290, l: 390, xl: 490 }
  },
  {
    id: "pizza-8",
    name: "بيتزا أناناس",
    description: "صوص بيتزا + جبنة موزريلا + أناناس + ذرة + سجق",
    price: 260,
    image: "/pizaa/ANANAS.png",
    categoryId: "pizza",
    sizePrices: { s: 190, m: 260, l: 360, xl: 460 }
  },
  {
    id: "pizza-9",
    name: "بيتزا فيرونا",
    description: "صوص خاص + جبنة + سجق + مرتديلا + فطر",
    price: 260,
    image: "/pizaa/VERONA.png",
    categoryId: "pizza",
    sizePrices: { s: 190, m: 260, l: 360, xl: 460 }
  },
  {
    id: "pizza-10",
    name: "بيتزا فاهيتا",
    description: "صوص خاص + جبنة موزريلا + فطر + فليفلة حمرة + فليفلة خضرة + ذرة + دجاج مشوي",
    price: 290,
    image: "/pizaa/FAHİTTA.png",
    categoryId: "pizza",
    sizePrices: { s: 190, m: 290, l: 390, xl: 490 }
  },
  {
    id: "pizza-11",
    name: "بيتزا مكسيكانو",
    description: "صوص خاص + جبنة موزريلا + سجق + فطر + فليفلة حمرة + مخلل جيليبون حار",
    price: 260,
    image: "/pizaa/MAXİCANO.png",
    categoryId: "pizza",
    sizePrices: { s: 190, m: 260, l: 360, xl: 460 }
  },
  {
    id: "pizza-12",
    name: "بيتزا بلسمك التونا",
    description: "صوص خاص + جبنة موزريلا + سمك تونا + بصل + ذرة",
    price: 290,
    image: "/pizaa/TUNA.png",
    categoryId: "pizza",
    sizePrices: { s: 190, m: 290, l: 390, xl: 490 }
  },
  {
    id: "pizza-13",
    name: "بيتزا بالجبنة سادة",
    description: "صوص خاص + جبنة موزريلا",
    price: 290,
    image: "/pizaa/EXTRAPEYNİR .png",
    categoryId: "pizza",
    sizePrices: { s: 190, m: 290, l: 390, xl: 490 }
  },
  {
    id: "pizza-14",
    name: "بيتزا كنارلي",
    description: "بيتزا بحافة خاصة محشية بالجبنة",
    price: 290,
    image: "/pizaa/KENARLI.png",
    categoryId: "pizza",
    sizePrices: { s: 190, m: 290, l: 390, xl: 490 }
  },
  {
    id: "pizza-15",
    name: "بيتزا بالفطر",
    description: "صوص بيتزا + جبنة موزريلا + فطر",
    price: 260,
    image: "/pizaa/MANTARLI.png",
    categoryId: "pizza",
    sizePrices: { s: 160, m: 260, l: 360, xl: 460 }
  },
  {
    id: "pizza-16",
    name: "بيتزا تورينو",
    description: "صوص خاص + جبنة موزريلا + مكونات تورينو الخاصة",
    price: 290,
    image: "/pizaa/TORİNO.png",
    categoryId: "pizza",
    sizePrices: { s: 190, m: 290, l: 390, xl: 490 }
  },
  // Broasted
  {
    id: "broasted-1",
    name: "وجبة بروستد",
    description: " قطعة دجاج + كريم توم+بطاطس  + صوص",
    price: 335,
    image: "/p2.png",
    categoryId: "broasted"
  },
  {
    id: "broasted-2",
    name: "وجبة جناح",
    description: "أجنحة دجاج متبلة ومقرمشة تقدم مع بطاطس وصوص",
    price: 300,
    image: "/p3.png",
    categoryId: "broasted"
  },
  {
    id: "broasted-3",
    name: "وجبة فخاد",
    description: "قطع فخاذ دجاج متبلة ومقلية حتى القرمشة مع بطاطس",
    price: 360,
    image: "/p4.png",
    categoryId: "broasted"
  },
  {
    id: "broasted-4",
    name: "وجبة كريسبي",
    description: "قطع دجاج كريسبي ذهبية مع بطاطس وصوص كريمي",
    price: 335,
    image:  "/p1.png",
    categoryId: "broasted"
  },
  {
    id: "broasted-5",
    name: "وجبة سبايسي حد",
    description: "وجبة دجاج حارة جدًا لعشاق النكهة القوية مع بطاطس",
    price: 335,
    image: "/p1.png",
    categoryId: "broasted"
  },
  {
    id: "broasted-6",
    name: "وجبة اسكالوب",
    description: "اسكالوب دجاج مقرمش مع تتبيلة مميزة وبطاطس",
    price: 340,
    image:  "/p8.png",
    categoryId: "broasted"
  },
  {
    id: "broasted-7",
    name: "وجبة ناغيت",
    description: "قطع ناغيت دجاج ذهبية مع بطاطس وصوص غمس",
    price: 250,
    image: "/p5.png",
    categoryId: "broasted"
  },
  {
    id: "broasted-8",
    name: "وجبة سوبريم",
    description: "وجبة دجاج سوبريم غنية بالنكهة مع بطاطس وصوص خاص",
    price: 350,
    image:"/p6.png",
    categoryId: "broasted"
  },
  {
    id: "broasted-9",
    name: "وجبة كوردون بلو",
    description: "صدر دجاج كوردون بلو محشو بالجبنة ويقدم مع بطاطس",
    price: 375,
    image: "/p7.png",
    categoryId: "broasted"
  },
  // Sandwiches
  {
    id: "sandwich-1",
    name: "صندويش فاهيتا",
    description: "صوص خاص + قطع دجاج مشوي + فليفلة خضرة + فليفلة حمرة + فطر + جبنة موزريلا",
    price: 250,
    image: "/sandavsh/FAHİTTA.png",
    categoryId: "sandwiches"
  },
  {
    id: "sandwich-2",
    name: "صندويش كريسبي",
    description: "صوص خاص + خس + مخلل + كريسبي عدد 2 + بطاطا",
    price: 265,
    image: "/sandavsh/CRISPY.png",
    categoryId: "sandwiches"
  },
  {
    id: "sandwich-3",
    name: "زنجر كريب",
    description: "صوص خاص + خس + مخلل + كريسبي عدد 2 + بطاطا",
    price: 265,
    image: "/sandavsh/Zingercrep.png",
    categoryId: "sandwiches"
  },
  {
    id: "sandwich-4",
    name: "كريسبي خبز صاج",
    description: "صوص خاص + خس + مخلل + جبنة شيدر + كريسبي عدد 2 + بطاطا",
    price: 260,
    image: "/sandavsh/SajEkmekliCrispy.png",
    categoryId: "sandwiches"
  },
  {
    id: "sandwich-5",
    name: "صندويش مكسيكانو",
    description: "صوص خاص + فليفلة خضرة حار + فليفلة حمرة حار + ذرة + فطر + دجاج مشوي + بطاطا",
    price: 250,
    image: "/sandavsh/MexicanoSandvic.png",
    categoryId: "sandwiches"
  },
  {
    id: "sandwich-6",
    name: "صندويش بطاطا مع جبنة",
    description: "كريم توم + صلصة + جبنة + بطاطا + صوص",
    price: 150,
    image: "/sandavsh/PeynirliPatatesSandvi.png",
    categoryId: "sandwiches"
  },
  // Salads
  {
    id: "salad-1",
    name: "سلطة عادية",
    description: "بندورة + خس + خيار + جزر + ملفوف أحمر + ليمون",
    price: 160,
    image: "/Salatalar/NormalSalata.png",
    categoryId: "salads"
  },
  {
    id: "salad-2",
    name: "سلطة بالدجاج",
    description: "بندورة + خيار + جزر + خس + ليمون + دجاج مقلي",
    price: 175,
    image: "/Salatalar/TavukluSalata.png",
    categoryId: "salads"
  },
  {
    id: "salad-3",
    name: "سلطة طون",
    description: "بندورة + خس + ليمون + فليفلة حمرة + طون + ذرة",
    price: 180,
    image: "/Salatalar/TonBalıklıSalata.png",
    categoryId: "salads"
  },
  {
    id: "salad-4",
    name: "سلطة بالجبنة",
    description: "بندورة + خس + خيار + جزر + ملفوف أحمر + ذرة",
    price: 160,
    image: "/Salatalar/PeynirliSalata.png",
    categoryId: "salads"
  },
  // Drinks
  {
    id: "drink-1",
    name: "كولا تنك ٣٣٠ مل",
    description: "مشروب غازي بارد",
    price: 65,
    image: "/İcecekler/KolaTeneke330ml.png",
    categoryId: "drinks"
  },
  {
    id: "drink-2",
    name: "سبرايت تنك ٣٣٠ مل",
    description: "مشروب غازي بارد",
    price: 65,
    image: "/İcecekler/SpriteTeneke330ml.png",
    categoryId: "drinks"
  },
  {
    id: "drink-3",
    name: "ايس تي ٣٣٠ مل",
    description: "شاي مثلج بارد",
    price: 65,
    image: "/İcecekler/IceTea330ml.png",
    categoryId: "drinks"
  },
  {
    id: "drink-4",
    name: "كولا بلور ٢٠٠ مل",
    description: "مشروب غازي بارد",
    price: 45,
    image: "/İcecekler/KolaCam200ml.png",
    categoryId: "drinks"
  },
  {
    id: "drink-5",
    name: "لتر كولا",
    description: "مشروب غازي بارد",
    price: 85,
    image: "/İcecekler/1LitreKola.png",
    categoryId: "drinks"
  },
  {
    id: "drink-6",
    name: "لتر فانتا",
    description: "مشروب غازي بارد",
    price: 85,
    image: "/İcecekler/1LitreFanta.png",
    categoryId: "drinks"
  },
  {
    id: "drink-7",
    name: "لتر ونص كولا",
    description: "مشروب غازي بارد",
    price: 100,
    image: "/İcecekler/1.5LitreKola.png",
    categoryId: "drinks"
  },
  {
    id: "drink-8",
    name: "لترين ونص كولا",
    description: "مشروب غازي بارد",
    price: 120,
    image: "/İcecekler/2.5LitreKola.png",
    categoryId: "drinks"
  },
  {
    id: "drink-9",
    name: "عيران كبير ٢٠٠ مل",
    description: "عيران بارد",
    price: 40,
    image: "/İcecekler/buyukAyran200ml.png",
    categoryId: "drinks"
  },
  {
    id: "drink-10",
    name: "ماء صغير",
    description: "مياه باردة",
    price: 15,
    image: "/İcecekler/kucuksu.png",
    categoryId: "drinks"
  },
  {
    id: "drink-11",
    name: "ماء كبير",
    description: "مياه باردة",
    price: 25,
    image: "/İcecekler/buyukSu.png",
    categoryId: "drinks"
  },
  {
    id: "drink-12",
    name: "صودا ليمون",
    description: "صودا بنكهة الليمون",
    price: 25,
    image: "/İcecekler/LimonluSoda.png",
    categoryId: "drinks"
  },
  {
    id: "drink-13",
    name: "صودا تفاح",
    description: "صودا بنكهة التفاح",
    price: 25,
    image: "/İcecekler/ElmalıSoda.png",
    categoryId: "drinks"
  },
  {
    id: "drink-14",
    name: "صودا توت",
    description: "صودا بنكهة التوت",
    price: 25,
    image: "/İcecekler/Ormanmeyvesiaromalısoda.png",
    categoryId: "drinks"
  },
  {
    id: "drink-15",
    name: "عصير سلس",
    description: "عصير بارد",
    price: 45,
    image: "/İcecekler/SelesMeyveSuyu.png",
    categoryId: "drinks"
  },
  {
    id: "drink-16",
    name: "عصير توربا",
    description: "عصير بارد",
    price: 45,
    image: "/İcecekler/TorbaMeyveSuyu.png",
    categoryId: "drinks"
  },
  {
    id: "drink-17",
    name: "أنقرة كازوز",
    description: "مشروب غازي بارد",
    price: 45,
    image: "/İcecekler/AnkaraGazoz.png",
    categoryId: "drinks"
  },
  // Desserts
  {
    id: "dessert-1",
    name: "كنافة نابلسية",
    description: "كنافة تقليدية بالجبنة مع قطر",
    price: 25,
    image: "https://images.unsplash.com/photo-1579888944880-d98341245702?w=800&q=80",
    categoryId: "desserts"
  },
  {
    id: "dessert-2",
    name: "تشيز كيك",
    description: "تشيز كيك نيويورك كريمي",
    price: 28,
    image: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?w=800&q=80",
    categoryId: "desserts"
  },
  {
    id: "dessert-3",
    name: "براوني شوكولاتة",
    description: "براوني دافئ مع آيس كريم فانيلا",
    price: 22,
    image: "https://images.unsplash.com/photo-1564355808539-22fda35b7f49?w=800&q=80",
    categoryId: "desserts"
  },

   
  {
    id: "dessert-4",
    name: "بقلاوة",
    description: "بقلاوة فستق تركية أصلية",
    price: 30,
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&q=80",
    categoryId: "desserts"
  }
];

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(product => product.categoryId === categoryId);
}

export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find(category => category.id === categoryId);
}

export function getProductById(productId: string): Product | undefined {
  return products.find(product => product.id === productId);
}
