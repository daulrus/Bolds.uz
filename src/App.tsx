import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Languages, 
  MessageSquare, 
  Phone, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  FileText, 
  Mic2, 
  Headphones, 
  ChevronDown, 
  ArrowRight,
  Menu,
  X,
  Upload,
  Globe2,
  Users,
  Briefcase,
  ExternalLink,
  Globe
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { cn } from './lib/utils';
import { translations, Language } from './translations';

// --- Context ---
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['ru'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// --- Types ---
interface FormData {
  name: string;
  contact: string;
  service: string;
  languagePair: string;
  message: string;
  file?: FileList;
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.howItWorks, href: '#how-it-works' },
    { name: t.nav.industries, href: '#industries' },
    { name: t.nav.faq, href: '#faq' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'ru', label: 'Русский' },
    { code: 'en', label: 'English' },
    { code: 'uz', label: "O'zbekcha" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-5 min-h-[72px] flex items-center",
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/logos/logo.png"
            alt="logo"
            className="h-16 md:h-20 w-auto object-contain"
          />
          <span className="text-xl font-semibold">
            Bolds<span className="text-purple-500">.uz</span>
          </span>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 scale-110 origin-left">

          {/* Language */}
          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="text-sm text-slate-300 uppercase font-bold"
            >
              {language}
            </button>

            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 bg-slate-900 border border-white/10 rounded-lg overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLangMenuOpen(false);
                    }}
                    className="block px-4 py-2 text-sm hover:bg-white/5 text-slate-300"
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            {t.nav.cta}
          </a>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-900 border-t border-white/10 p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-lg"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Clock className="w-3 h-3" /> {t.hero.badge}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-6 break-words">
            {t.hero.title} <br />
           <span className="gradient-text">
  {t.hero.titleAccent}
</span>
</h1>

<p className="text-sm sm:text-base md:text-xl text-slate-400 mb-6 md:mb-8 max-w-xl leading-relaxed">
  {t.hero.subtitle}
</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] flex items-center justify-center gap-2 group">
              {t.hero.ctaPrimary} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://t.me/boldsuz" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-400" /> {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                  <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" className="w-full h-full rounded-full" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="font-bold">{t.hero.stats}</div>
              <div className="text-slate-500">{t.hero.trust}</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="glass-card p-8 relative z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Globe2 className="text-purple-400" />
                </div>
                <div>
                  <div className="text-sm font-bold">{t.hero.pairs}</div>
                  <div className="text-xs text-slate-500">{t.hero.directions}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-500">{t.hero.status}</div>
                <div className="text-xs font-bold text-green-400 flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> {t.hero.online}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-slate-400">{t.hero.tech}</span>
                  <span className="text-purple-400">{t.hero.accuracy}</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '98%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-purple-500" 
                  />
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-slate-400">{t.hero.sync}</span>
                  <span className="text-indigo-400">Live Support</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="h-full bg-indigo-500" 
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center">
                <div className="text-2xl font-bold text-purple-400">15+</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">{t.hero.experience}</div>
              </div>
              <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-center">
                <div className="text-2xl font-bold text-indigo-400">24/7</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">{t.hero.support}</div>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-600/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const { t } = useLanguage();

  const logos = [
    "/logos/UzAuto-01.png",
    "/logos/assets.jpg",
    "/logos/tdiu.png",
    "/logos/зие.jpg",
    "/logos/strategies.png",
    "/logos/ecology.png",
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <p className="text-center text-slate-400 text-xs md:text-sm font-medium mb-14 uppercase tracking-[0.35em]">
          {t.hero.trustBar}
        </p>

        {/* Logos */}
        <div className="overflow-hidden">
  <div className="flex gap-16 w-max animate-scroll">
    {[...logos, ...logos].map((logo, idx) => (
      <img
        key={idx}
        src={logo}
        alt="client logo"
        className="h-20 md:h-24 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
      />
    ))}
  </div>
</div>

        </div>

      </div>
    </section>
  );
};

const Services = () => {
  const { t } = useLanguage();
  const icons = [<FileText className="w-8 h-8" />, <Headphones className="w-8 h-8" />];
  const colors = ["from-blue-500 to-cyan-500", "from-purple-500 to-pink-500"];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.services.title}</h2>
          <p className="text-purple-500 font-bold text-sm uppercase tracking-widest mb-2">{t.services.subtitle}</p>
          <p className="text-slate-400 max-w-2xl mx-auto">{t.services.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {t.services.items.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="glass-card p-8 flex flex-col h-full group"
            >
              <div className={cn("w-16 h-16 rounded-2xl bg-linear-to-br mb-6 flex items-center justify-center text-white shadow-lg", colors[idx])}>
                {icons[idx]}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-8 flex-grow">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-500" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="w-full py-3 rounded-xl border border-white/10 text-center font-bold hover:bg-white/5 transition-colors">
                {t.services.more}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const { t } = useLanguage();
  const icons = [<MessageSquare />, <Clock />, <Languages />, <CheckCircle2 />];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-white/2">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.howItWorks.title}</h2>
          <p className="text-purple-500 font-bold text-sm uppercase tracking-widest mb-2">{t.howItWorks.subtitle}</p>
          <p className="text-slate-400">{t.howItWorks.desc}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/5 -translate-y-12 z-0" />
          
          {t.howItWorks.steps.map((step, idx) => (
            <div key={idx} className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-purple-500/30 flex items-center justify-center mx-auto mb-6 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                {icons[idx]}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const { t } = useLanguage();
  const icons = [<ShieldCheck />, <CheckCircle2 />, <Globe2 />, <Briefcase />, <Users />];

  return (
    <section id="industries" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">{t.industries.title}</h2>
            <p className="text-purple-500 font-bold text-sm uppercase tracking-widest mb-2">{t.industries.subtitle}</p>
            <p className="text-slate-400">{t.industries.desc}</p>
          </div>
          <a href="#contact" className="text-purple-400 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            {t.industries.all} <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {t.industries.items.map((ind, idx) => (
            <div key={idx} className="glass-card p-6 text-center hover:bg-white/10 transition-colors cursor-default">
              <div className="text-purple-500 mb-4 flex justify-center">{icons[idx < icons.length ? idx : icons.length - 1]}</div>
              <div className="text-sm font-bold">{ind}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 bg-white/2">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">{t.faq.title}</h2>
        <p className="text-purple-500 font-bold text-sm uppercase tracking-widest mb-12 text-center">{t.faq.subtitle}</p>
        <div className="space-y-4">
          {t.faq.items.map((faq, idx) => (
            <div key={idx} className="glass-card overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="font-bold">{faq.q}</span>
                <ChevronDown className={cn("w-5 h-5 transition-transform", openIndex === idx && "rotate-180")} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-slate-400 text-sm leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const { t } = useLanguage();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = async (data: FormData) => {
    const message = `
📩 Новая заявка Bold Steps

👤 Имя: ${data.name}
📞 Контакт: ${data.contact}
🛠 Услуга: ${data.service}
🌍 Языки: ${data.languagePair}
💬 Сообщение: ${data.message || "нет"}
`;

    try {
      await fetch(`https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: "-1003721275626",
          text: message,
        }),
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Telegram error:", error);
      alert("Ошибка отправки заявки");
    }
  };

  return (
    <>
      <section
        id="contact"
        className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-purple-600/10 blur-[120px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              {t.contact.title} <br />
              <span className="gradient-text">Bold Steps?</span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base md:text-lg mb-8 md:mb-12">
              {t.contact.desc}
            </p>

            <div className="space-y-6 md:space-y-8">

              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                </div>

                <div>
                  <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-bold">
                    {t.contact.phone}
                  </div>
                  <div className="text-base md:text-xl font-bold">
                    +998 77 000 22 00
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="glass-card p-8 md:p-10">

            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                {/* NAME + CONTACT */}
                <div className="grid md:grid-cols-2 gap-6">

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300">
                      {t.contact.form.name}
                    </label>
                    <input
                      {...register("name", { required: true })}
                      placeholder={t.contact.form.namePlaceholder}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500"
                    />
                    {errors.name && (
                      <span className="text-xs text-red-400">
                        {t.contact.form.required}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300">
                      {t.contact.form.contact}
                    </label>
                    <input
                      {...register("contact", { required: true })}
                      placeholder={t.contact.form.contactPlaceholder}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500"
                    />
                    {errors.contact && (
                      <span className="text-xs text-red-400">
                        {t.contact.form.required}
                      </span>
                    )}
                  </div>

                </div>

                {/* SERVICE */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">
                    {t.contact.form.service}
                  </label>

                  <select
                    {...register("service")}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                  >
                    <option value="written">
                      {t.services.items[0].title}
                    </option>
                    <option value="oral">
                      {t.services.items[1].title}
                    </option>
                  </select>
                </div>

                {/* FILE */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">
                    {t.contact.form.file}
                  </label>

                  <div className="relative group">
                    <input
                      type="file"
                      {...register("file")}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />

                    <div className="w-full bg-white/5 border border-dashed border-white/20 rounded-xl px-4 py-8 flex flex-col items-center justify-center gap-2">
                      <Upload className="w-8 h-8 text-slate-500" />
                      <span className="text-sm text-slate-400">
                        {t.contact.form.fileHint}
                      </span>
                    </div>
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-purple-600/20 active:scale-[0.98]"
                >
                  {t.contact.form.submit}
                </button>

                <p className="text-[10px] text-center text-slate-500">
                  {t.contact.form.privacy}
                </p>

              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {t.contact.form.successTitle}
                </h3>

                <p className="text-slate-400 mb-8">
                  {t.contact.form.successDesc}
                </p>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-purple-400 font-bold hover:underline"
                >
                  {t.contact.form.another}
                </button>
              </motion.div>
            )}

          </div>

        </div>
      </section>
    </>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-linear-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Languages className="text-white w-5 h-5" />
              </div>
          <span className="text-xl font-bold tracking-tight">Bolds<span className="text-purple-700">.uz</span></span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed mb-8">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Telegram', 'Facebook', 'LinkedIn'].map((s) => (
                <a key={s} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">{t.footer.nav}</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">{t.nav.howItWorks}</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">{t.nav.industries}</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">{t.nav.faq}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">{t.footer.contacts}</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +998 77 000 22 00</li>
              <li className="flex items-center gap-2"><MessageSquare className="w-4 h-4" /> @boldsuz</li>
              <li className="flex items-start gap-2"><Globe2 className="w-4 h-4 mt-1" /> {t.footer.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">{t.footer.companyDetails.title}</h4>
            <ul className="space-y-2 text-slate-500 text-[11px] leading-relaxed">
              <li>{t.footer.companyDetails.director}</li>
              <li>{t.footer.companyDetails.postalCode}</li>
              <li>{t.footer.companyDetails.bank}</li>
              <li>{t.footer.companyDetails.accountUZS}</li>
              <li>{t.footer.companyDetails.accountUSD}</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 uppercase tracking-widest font-bold">
          <div>{t.footer.rights}</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-400">{t.footer.privacy}</a>
            <a href="#" className="hover:text-slate-400">{t.footer.offer}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const TelegramButton = () => {
  return (
    <a 
      href="https://t.me/boldsuz" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
    >
      <MessageSquare className="w-8 h-8" />
    </a>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen selection:bg-purple-500/30">
        <Navbar />
        <main>
          <Hero />
          <TrustBar />
          <Services />
          <HowItWorks />
          <Industries />
          <FAQ />
          <ContactForm />
        </main>
        <Footer />
        <TelegramButton />
      </div>
    </LanguageProvider>
  );
}
