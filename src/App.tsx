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

/* ================= CONTEXT ================= */

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

/* ================= NAVBAR (без изменений логики) ================= */

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
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300",
      isScrolled ? "bg-[#0b0616]/90 backdrop-blur border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
            <Languages className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Bolds<span className="text-purple-500">.uz</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <a key={l.name} href={l.href} className="text-sm text-slate-300 hover:text-white transition">
              {l.name}
            </a>
          ))}
          <a href="#contact" className="bg-purple-600 px-5 py-2 rounded-full text-sm font-bold">
            {t.nav.cta}
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

      </div>
    </nav>
  );
};

/* ================= HERO (без изменений) ================= */

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-20 px-6 bg-[#05010f]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-5xl font-bold leading-tight">
            {t.hero.title} <br />
            <span className="text-purple-500">{t.hero.titleAccent}</span>
          </h1>

          <p className="text-slate-400 mt-6 text-lg">
            {t.hero.subtitle}
          </p>
        </div>

      </div>
    </section>
  );
};

/* ================= 🔥 TRUST BAR (УЛУЧШЕН) ================= */

const TrustBar = () => {
  const { t } = useLanguage();

  const logos = ["Pepsi", "Coca-Cola", "KFC", "Kraft", "Uzum", "NBU"];

  return (
    <section className="py-10 bg-[#0b0616] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-xs text-slate-500 uppercase tracking-[0.3em] mb-8">
          {t.hero.trustBar}
        </p>

        {/* 🔥 ровная линия логотипов */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {logos.map((l) => (
            <div
              key={l}
              className="text-slate-400 font-semibold text-sm opacity-70 hover:opacity-100 transition"
            >
              {l}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

/* ================= 🔥 INDUSTRIES (УЛУЧШЕНА СЕТКА) ================= */

const Industries = () => {
  const { t } = useLanguage();

  return (
    <section id="industries" className="py-24 px-6 bg-[#070312]">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-12 text-white">
          {t.industries.title}
        </h2>

        {/* 🔥 ровная премиум сетка */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {t.industries.items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition"
            >
              <div className="text-sm font-semibold text-white">
                {item}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

/* ================= APP ================= */

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#05010f] text-white">

        <Navbar />
        <Hero />
        <TrustBar />
        <Industries />

      </div>
    </LanguageProvider>
  );
}
