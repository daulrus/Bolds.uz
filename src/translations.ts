export type Language = 'ru' | 'en' | 'uz';

export const translations = {
  ru: {
    nav: {
      services: "Услуги",
      howItWorks: "Как мы работаем",
      industries: "Отрасли",
      faq: "FAQ",
      cta: "Оставить заявку"
    },
    hero: {
      badge: "Перевод от 24 часов",
      title: "Профессиональный перевод",
      titleAccent: "без границ.",
      subtitle: "Ваш надежный партнер в мире коммуникаций. Устный и письменный перевод для бизнеса в Узбекистане.",
      ctaPrimary: "Рассчитать стоимость",
      ctaSecondary: "Telegram",
      stats: "50+ завершенных проектов",
      trust: "Доверие крупных компаний",
      pairs: "Языковые пары",
      directions: "50+ направлений",
      status: "Статус",
      online: "Онлайн",
      tech: "Технический перевод",
      accuracy: "98% точность",
      sync: "Синхронный перевод",
      experience: "Лет опыта",
      support: "Поддержка",
      trustBar: "Нам доверяют лидеры рынка"
    },
    services: {
      title: "Наши услуги",
      subtitle: "Our Services",
      desc: "Полный спектр лингвистических решений для вашего бизнеса.",
      items: [
        {
          title: "Письменный перевод",
          description: "Юридические, медицинские и технические тексты любой сложности.",
          features: ["Техническая верстка", "Срочные заказы", "Контроль качества"]
        },
        {
          title: "Устный перевод",
          description: "Синхронный и последовательный перевод для конференций, бизнес-встреч и делегаций.",
          features: ["Синхронное оборудование", "Выезд по Узбекистану", "Конференц-поддержка"]
        }
      ],
      more: "Узнать больше"
    },
    howItWorks: {
      title: "Как мы работаем",
      subtitle: "How It Works",
      desc: "Простой и прозрачный процесс от первого контакта до готового результата.",
      steps: [
        { title: "Заявка", desc: "Оставьте заявку на сайте или в Telegram. Мы ответим как можно скорее." },
        { title: "Оценка", desc: "Рассчитываем точную стоимость и сроки. Согласовываем детали проекта." },
        { title: "Перевод", desc: "Профессиональный переводчик приступает к работе. Контроль качества (QA)." },
        { title: "Результат", desc: "Вы получаете готовый перевод в удобном формате." }
      ]
    },
    industries: {
      title: "Отраслевая экспертиза",
      subtitle: "Industry Expertise",
      desc: "Мы понимаем специфику вашей ниши. Наши переводчики — эксперты в своих областях.",
      all: "Все отрасли",
      items: ["Юриспруденция", "Медицина", "IT & Технологии", "Нефть и Газ", "Маркетинг", "Техническая документация"]
    },
    faq: {
      title: "Часто задаваемые вопросы",
      subtitle: "Frequently Asked Questions",
      items: [
        {
          q: "Как быстро вы можете выполнить перевод?",
          a: "Стандартная скорость — 8-10 страниц в день. Однако мы предлагаем услуги срочного перевода (от 2 часов) в зависимости от объема и сложности текста."
        },
        {
          q: "Какие языки вы переводите?",
          a: "Мы работаем с более чем 50 языковыми парами, включая английский, русский, узбекский, китайский, немецкий, турецкий и многие другие."
        },
        {
          q: "Как гарантируется конфиденциальность?",
          a: "Мы подписываем соглашение о неразглашении (NDA) с каждым клиентом. Все данные передаются по защищенным каналам."
        }
      ]
    },
    contact: {
      title: "Готовы начать",
      desc: "Оставьте заявку сейчас, и наш менеджер свяжется с вами в течение 15 минут для бесплатной консультации и оценки проекта.",
      phone: "Телефон",
      form: {
        name: "Ваше имя",
        namePlaceholder: "Иван Иванов",
        contact: "Телефон / Telegram",
        contactPlaceholder: "+998 90 123 45 67",
        service: "Тип услуги",
        file: "Прикрепить файл (опционально)",
        fileHint: "Нажмите или перетащите файл",
        submit: "Отправить заявку",
        privacy: "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.",
        successTitle: "Заявка принята!",
        successDesc: "Менеджер свяжется с вами в ближайшее время. Спасибо за доверие!",
        another: "Отправить еще одну заявку",
        required: "Обязательное поле"
      }
    },
    footer: {
      desc: "Профессиональное бюро переводов в Ташкенте. Мы помогаем бизнесу говорить на одном языке с миром.",
      nav: "Навигация",
      contacts: "Контакты",
      address: "г. Ташкент, Чиланзарский район, массив Алмазар 11А",
      rights: "© 2026 Bolds.uz. Все права защищены.",
      privacy: "Политика конфиденциальности",
      offer: "Публичная оферта",
      companyDetails: {
        title: "Реквизиты компании",
        director: "Директор: Ганиев Жавлон Алишерович",
        postalCode: "Почтовый индекс: 100003",
        bank: "Операционное управление АКБ «DAVR-BANK» МФО: 00981",
        accountUZS: "р/с (UZS): 20208000905578835001",
        accountUSD: "р/с (USD): 20208 84010 55788 35001"
      }
    }
  },
  en: {
    nav: {
      services: "Services",
      howItWorks: "How It Works",
      industries: "Industries",
      faq: "FAQ",
      cta: "Get a Quote"
    },
    hero: {
      badge: "Translation from 24 hours",
      title: "Professional Translation",
      titleAccent: "without borders.",
      subtitle: "Your reliable partner in the world of communications. Oral and written translation for business in Uzbekistan.",
      ctaPrimary: "Calculate Cost",
      ctaSecondary: "Telegram",
      stats: "50+ completed projects",
      trust: "Trusted by major companies",
      pairs: "Language Pairs",
      directions: "50+ directions",
      status: "Status",
      online: "Online",
      tech: "Technical Translation",
      accuracy: "98% accuracy",
      sync: "Simultaneous Translation",
      experience: "Years of experience",
      support: "Support",
      trustBar: "Trusted by market leaders"
    },
    services: {
      title: "Our Services",
      subtitle: "Professional Solutions",
      desc: "A full range of linguistic solutions for your business needs.",
      items: [
        {
          title: "Written Translation",
          description: "Legal, medical, and technical texts of any complexity.",
          features: ["Technical layout", "Urgent orders", "Quality control"]
        },
        {
          title: "Oral Translation",
          description: "Simultaneous and consecutive translation for conferences, business meetings and delegations.",
          features: ["Simultaneous equipment", "Travel across Uzbekistan", "Conference support"]
        }
      ],
      more: "Learn More"
    },
    howItWorks: {
      title: "How It Works",
      subtitle: "Process",
      desc: "A simple and transparent process from the first contact to the finished result.",
      steps: [
        { title: "Application", desc: "Leave a request on the website or in Telegram. We will respond as soon as possible." },
        { title: "Estimation", desc: "We calculate the exact cost and timeline. Agree on project details." },
        { title: "Translation", desc: "A professional translator starts working. Quality control (QA)." },
        { title: "Result", desc: "You receive the finished translation in a convenient format." }
      ]
    },
    industries: {
      title: "Industry Expertise",
      subtitle: "Specialization",
      desc: "We understand the specifics of your niche. Our translators are experts in their fields.",
      all: "All Industries",
      items: ["Legal", "Medical", "IT & Tech", "Oil & Gas", "Marketing", "Technical Documents"]
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "FAQ",
      items: [
        {
          q: "How fast can you complete a translation?",
          a: "Standard speed is 8-10 pages per day. However, we offer urgent translation services (from 2 hours) depending on the volume and complexity."
        },
        {
          q: "What languages do you translate?",
          a: "We work with more than 50 language pairs, including English, Russian, Uzbek, Chinese, German, Turkish, and many others."
        },
        {
          q: "How is confidentiality guaranteed?",
          a: "We sign a Non-Disclosure Agreement (NDA) with every client. All data is transmitted via secure channels."
        }
      ]
    },
    contact: {
      title: "Ready to start",
      desc: "Leave a request now, and our manager will contact you within 15 minutes for a free consultation and project estimation.",
      phone: "Phone",
      form: {
        name: "Your Name",
        namePlaceholder: "John Doe",
        contact: "Phone / Telegram",
        contactPlaceholder: "+998 90 123 45 67",
        service: "Service Type",
        file: "Attach File (optional)",
        fileHint: "Click or drag file here",
        submit: "Send Request",
        privacy: "By clicking the button, you agree to the privacy policy.",
        successTitle: "Request Received!",
        successDesc: "Our manager will contact you shortly. Thank you for your trust!",
        another: "Send another request",
        required: "Required field"
      }
    },
    footer: {
      desc: "Professional translation bureau in Tashkent. We help businesses speak the same language as the world.",
      nav: "Navigation",
      contacts: "Contacts",
      address: "Tashkent city, Chilanzar district, Almazar massif 11A",
      rights: "© 2026 Bolds.uz. All rights reserved.",
      privacy: "Privacy Policy",
      offer: "Public Offer",
      companyDetails: {
        title: "Company Details",
        director: "Director: Javlon Alisherovich Ganiev",
        postalCode: "Postal code: 100003",
        bank: "Operational Department of JSCB \"DAVR-BANK\" MFO: 00981",
        accountUZS: "Account number (UZS): 20208000905578835001",
        accountUSD: "Account number (USD): 20208 84010 55788 35001"
      }
    }
  },
  uz: {
    nav: {
      services: "Xizmatlar",
      howItWorks: "Ish jarayoni",
      industries: "Sohalar",
      faq: "FAQ",
      cta: "Sorov yuborish"
    },
    hero: {
      badge: "24 soatdan boshlab tarjima",
      title: "Professional tarjima",
      titleAccent: "chegarasiz.",
      subtitle: "Muloqot olamidagi ishonchli hamkoringiz. O'zbekistondagi biznes uchun og'zaki va yozma tarjima.",
      ctaPrimary: "Narxni hisoblash",
      ctaSecondary: "Telegram",
      stats: "50+ yakunlangan loyihalar",
      trust: "Yirik kompaniyalar ishonchi",
      pairs: "Til juftliklari",
      directions: "50+ yo'nalishlar",
      status: "Holat",
      online: "Onlayn",
      tech: "Texnik tarjima",
      accuracy: "98% aniqlik",
      sync: "Sinxron tarjima",
      experience: "Yillik tajriba",
      support: "Qo'llab-quvvatlash",
      trustBar: "Bozor yetakchilari bizga ishonadi"
    },
    services: {
      title: "Xizmatlarimiz",
      subtitle: "Professional yechimlar",
      desc: "Sizning biznesingiz uchun lingvistik yechimlarning to'liq to'plami.",
      items: [
        {
          title: "Yozma tarjima",
          description: "Har qanday murakkablikdagi yuridik, tibbiy va texnik matnlarni tarjima qilish.",
          features: ["Texnik maketlash", "Shoshilinch buyurtmalar", "Sifat nazorati"]
        },
        {
          title: "Og'zaki tarjima",
          description: "Konferensiyalar, biznes uchrashuvlar va delegatsiyalar uchun sinxron va ketma-ket tarjima.",
          features: ["Sinxron uskunalar", "O'zbekiston bo'ylab chiqish", "Konferensiya yordami"]
        }
      ],
      more: "Batafsil"
    },
    howItWorks: {
      title: "Biz qanday ishlaymiz",
      subtitle: "Jarayon",
      desc: "Birinchi kontaktdan tayyor natijagacha oddiy va shaffof jarayon.",
      steps: [
        { title: "Sorov", desc: "Saytda yoki Telegram orqali so'rov qoldiring. Biz imkon qadar tezroq javob beramiz." },
        { title: "Baholash", desc: "Aniq narx va muddatni hisoblaymiz. Loyiha tafsilotlarini kelishib olamiz." },
        { title: "Tarjima", desc: "Professional tarjimon ishga kirishadi. Sifat nazorati (QA)." },
        { title: "Natija", desc: "Tayyor tarjimani qulay formatda olasiz." }
      ]
    },
    industries: {
      title: "Sohaviy ekspertiza",
      subtitle: "Ixtisoslashuv",
      desc: "Biz sizning sohangiz xususiyatlarini tushunamiz. Tarjimonlarimiz o'z sohalarining mutaxassislaridir.",
      all: "Barcha sohalar",
      items: ["Yurisprudensiya", "Tibbiyot", "IT va Texnologiyalar", "Neft va Gaz", "Marketing", "Texnik hujjatlar"]
    },
    faq: {
      title: "Ko'p beriladigan savollar",
      subtitle: "FAQ",
      items: [
        {
          q: "Tarjimani qanchalik tez bajara olasiz?",
          a: "Standart tezlik kuniga 8-10 sahifa. Biroq, matn hajmi va murakkabligiga qarab shoshilinch tarjima xizmatlarini (2 soatdan boshlab) taklif qilamiz."
        },
        {
          q: "Qaysi tillarga tarjima qilasiz?",
          a: "Biz 50 dan ortiq til juftliklari bilan ishlaymiz, jumladan ingliz, rus, o'zbek, xitoy, nemis, turk va boshqalar."
        },
        {
          q: "Maxfiylik qanday kafolatlanadi?",
          a: "Biz har bir mijoz bilan maxfiylik to'g'risidagi shartnomani (NDA) imzolaymiz. Barcha ma'lumotlar xavfsiz kanallar orqali uzatiladi."
        }
      ]
    },
    contact: {
      title: "Boshlashga tayyormisiz",
      desc: "Hozir so'rov qoldiring va bizning menejerimiz bepul maslahat va loyihani baholash uchun 15 daqiqa ichida siz bilan bog'lanadi.",
      phone: "Telefon",
      form: {
        name: "Ismingiz",
        namePlaceholder: "Eshmat Toshmatov",
        contact: "Telefon / Telegram",
        contactPlaceholder: "+998 90 123 45 67",
        service: "Xizmat turi",
        file: "Faylni biriktirish (ixtiyoriy)",
        fileHint: "Faylni bosing yoki bu yerga sudrab keling",
        submit: "Sorov yuborish",
        privacy: "Tugmani bosish orqali siz maxfiylik siyosatiga rozilik bildirasiz.",
        successTitle: "Sorov qabul qilindi!",
        successDesc: "Menejerimiz tez orada siz bilan bog'lanadi. Ishonchingiz uchun rahmat!",
        another: "Yana so'rov yuborish",
        required: "Majburiy maydon"
      }
    },
    footer: {
      desc: "Toshkentdagi professional tarjima byurosi. Biz biznesga dunyo bilan bir tilda gaplashishga yordam beramiz.",
      nav: "Navigatsiya",
      contacts: "Kontaktlar",
      address: "Toshkent shahri, Chilonzor tumani, Olmazor massivi 11A",
      rights: "© 2026 Bolds.uz. Barcha huquqlar himoyalangan.",
      privacy: "Maxfiylik siyosati",
      offer: "Ommaviy oferta",
      companyDetails: {
        title: "Kompaniya rekvizitlari",
        director: "Direktor: Ganiev Javlon Alisherovich",
        postalCode: "Pochta indeksi: 100003",
        bank: "“DAVR-BANK” ATB Amaliyot boshqarmasi MFO: 00981",
        accountUZS: "h/r (UZS): 20208000905578835001",
        accountUSD: "h/r (USD): 20208 84010 55788 35001"
      }
    }
  }
};
