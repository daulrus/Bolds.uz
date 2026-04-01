import React, { useState, useEffect } from 'react';
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
  ExternalLink
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { cn } from './lib/utils';

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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'Как мы работаем', href: '#how-it-works' },
    { name: 'Отрасли', href: '#industries' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <Languages className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight">Bolds<span className="text-purple-500">.uz</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95">
            Оставить заявку
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-slate-900 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-300"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-purple-600 text-white px-6 py-3 rounded-xl text-center font-semibold"
            >
              Оставить заявку
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
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
            <Clock className="w-3 h-3" /> Перевод от 24 часов
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            Профессиональный перевод <br />
            <span className="gradient-text">без границ.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl leading-relaxed">
            Ваш надежный партнер в мире коммуникаций. Устный, письменный и аудио-визуальный перевод для бизнеса и частных лиц в Узбекистане.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] flex items-center justify-center gap-2 group">
              Рассчитать стоимость <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://wa.me/998000000000" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5 text-green-400" /> WhatsApp
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
              <div className="font-bold">500+ завершенных проектов</div>
              <div className="text-slate-500">Доверие крупных компаний</div>
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
                  <div className="text-sm font-bold">Языковые пары</div>
                  <div className="text-xs text-slate-500">50+ направлений</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-500">Статус</div>
                <div className="text-xs font-bold text-green-400 flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Онлайн
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-slate-400">Технический перевод</span>
                  <span className="text-purple-400">98% точность</span>
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
                  <span className="text-slate-400">Синхронный перевод</span>
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

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center">
                <div className="text-2xl font-bold text-purple-400">15+</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Лет опыта</div>
              </div>
              <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-center">
                <div className="text-2xl font-bold text-indigo-400">24/7</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Поддержка</div>
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
  const logos = [
    "UzAuto", "Lukoil", "Huawei", "Beeline", "Agrobank", "Nestle"
  ];
  return (
    <section className="py-12 border-y border-white/5 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-slate-500 text-sm font-medium mb-8 uppercase tracking-widest">Нам доверяют лидеры рынка</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
          {logos.map((logo) => (
            <span key={logo} className="text-xl md:text-2xl font-black tracking-tighter text-slate-300">{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Письменный перевод",
      description: "Юридические, медицинские, технические тексты и личные документы с нотариальным заверением.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Нотариальное заверение", "Техническая верстка", "Срочные заказы"]
    },
    {
      title: "Устный перевод",
      description: "Синхронный и последовательный перевод для конференций, бизнес-встреч и делегаций.",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["Синхронное оборудование", "Выезд по Узбекистану", "Конференц-поддержка"]
    },
    {
      title: "Аудио и Видео",
      description: "Транскрибация, перевод и субтитрование видеоконтента, рекламных роликов и лекций.",
      icon: <Mic2 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: ["Тайм-коды", "Озвучка", "Локализация контента"]
    }
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
          <p className="text-purple-500 font-bold text-sm uppercase tracking-widest mb-2">Our Services</p>
          <p className="text-slate-400 max-w-2xl mx-auto">Полный спектр лингвистических решений для вашего бизнеса и личных нужд.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="glass-card p-8 flex flex-col h-full group"
            >
              <div className={cn("w-16 h-16 rounded-2xl bg-linear-to-br mb-6 flex items-center justify-center text-white shadow-lg", service.color)}>
                {service.icon}
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
                Узнать больше
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Заявка",
      desc: "Оставьте заявку на сайте или в WhatsApp. Мы ответим в течение 15 минут.",
      icon: <MessageSquare />
    },
    {
      title: "Оценка",
      desc: "Рассчитываем точную стоимость и сроки. Согласовываем детали проекта.",
      icon: <Clock />
    },
    {
      title: "Перевод",
      desc: "Профессиональный переводчик приступает к работе. Контроль качества (QA).",
      icon: <Languages />
    },
    {
      title: "Результат",
      desc: "Вы получаете готовый перевод в удобном формате. Оплата по факту.",
      icon: <CheckCircle2 />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-white/2">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Как мы работаем</h2>
          <p className="text-purple-500 font-bold text-sm uppercase tracking-widest mb-2">How It Works</p>
          <p className="text-slate-400">Простой и прозрачный процесс от первого контакта до готового результата.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/5 -translate-y-12 z-0" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-purple-500/30 flex items-center justify-center mx-auto mb-6 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                {step.icon}
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
  const industries = [
    { name: "Юриспруденция", icon: <ShieldCheck /> },
    { name: "Медицина", icon: <CheckCircle2 /> },
    { name: "IT & Технологии", icon: <Globe2 /> },
    { name: "Нефть и Газ", icon: <Briefcase /> },
    { name: "Маркетинг", icon: <Users /> },
    { name: "Личные документы", icon: <FileText /> }
  ];

  return (
    <section id="industries" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Отраслевая экспертиза</h2>
            <p className="text-purple-500 font-bold text-sm uppercase tracking-widest mb-2">Industry Expertise</p>
            <p className="text-slate-400">Мы понимаем специфику вашей ниши. Наши переводчики — эксперты в своих областях.</p>
          </div>
          <a href="#contact" className="text-purple-400 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Все отрасли <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, idx) => (
            <div key={idx} className="glass-card p-6 text-center hover:bg-white/10 transition-colors cursor-default">
              <div className="text-purple-500 mb-4 flex justify-center">{ind.icon}</div>
              <div className="text-sm font-bold">{ind.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    {
      q: "Как быстро вы можете выполнить перевод?",
      a: "Стандартная скорость — 8-10 страниц в день. Однако мы предлагаем услуги срочного перевода (от 2 часов) в зависимости от объема и сложности текста."
    },
    {
      q: "Заверяете ли вы переводы нотариально?",
      a: "Да, мы предоставляем полный спектр услуг по нотариальному заверению переводов и проставлению апостиля."
    },
    {
      q: "Какие языки вы переводите?",
      a: "Мы работаем с более чем 50 языковыми парами, включая английский, русский, узбекский, китайский, немецкий, турецкий и многие другие."
    },
    {
      q: "Как гарантируется конфиденциальность?",
      a: "Мы подписываем соглашение о неразглашении (NDA) с каждым клиентом. Все данные передаются по защищенным каналам."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-white/2">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Часто задаваемые вопросы</h2>
        <p className="text-purple-500 font-bold text-sm uppercase tracking-widest mb-12 text-center">Frequently Asked Questions</p>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
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
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setIsSubmitted(true);
    // In real app, send to API
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-bold mb-6">Готовы начать <br /> <span className="gradient-text">Bold Steps?</span></h2>
          <p className="text-slate-400 text-lg mb-12">
            Оставьте заявку сейчас, и наш менеджер свяжется с вами в течение 15 минут для бесплатной консультации и оценки проекта.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Телефон</div>
                <div className="text-xl font-bold">+998 (71) 000-00-00</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Email</div>
                <div className="text-xl font-bold">info@bolds.uz</div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 md:p-10">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">Ваше имя</label>
                  <input 
                    {...register("name", { required: true })}
                    placeholder="Иван Иванов"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                  {errors.name && <span className="text-xs text-red-400">Обязательное поле</span>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">Телефон / Telegram</label>
                  <input 
                    {...register("contact", { required: true })}
                    placeholder="+998 90 123 45 67"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                  {errors.contact && <span className="text-xs text-red-400">Обязательное поле</span>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300">Тип услуги</label>
                <select 
                  {...register("service")}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors appearance-none"
                >
                  <option value="written">Письменный перевод</option>
                  <option value="oral">Устный перевод</option>
                  <option value="audio">Аудио/Видео перевод</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300">Прикрепить файл (опционально)</label>
                <div className="relative group">
                  <input 
                    type="file" 
                    {...register("file")}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="w-full bg-white/5 border border-dashed border-white/20 rounded-xl px-4 py-8 flex flex-col items-center justify-center gap-2 group-hover:border-purple-500/50 transition-colors">
                    <Upload className="w-8 h-8 text-slate-500 group-hover:text-purple-400 transition-colors" />
                    <span className="text-sm text-slate-400">Нажмите или перетащите файл</span>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-purple-600/20 active:scale-[0.98]"
              >
                Отправить заявку
              </button>
              <p className="text-[10px] text-center text-slate-500">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
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
              <h3 className="text-2xl font-bold mb-4">Заявка принята!</h3>
              <p className="text-slate-400 mb-8">Менеджер свяжется с вами в ближайшее время. Спасибо за доверие!</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-purple-400 font-bold hover:underline"
              >
                Отправить еще одну заявку
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-linear-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Languages className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">Bolds<span className="text-purple-500">.uz</span></span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed mb-8">
              Профессиональное бюро переводов в Ташкенте. Мы помогаем бизнесу говорить на одном языке с миром.
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
            <h4 className="font-bold mb-6">Навигация</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Как мы работаем</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Отрасли</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Контакты</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +998 71 000 00 00</li>
              <li className="flex items-center gap-2"><MessageSquare className="w-4 h-4" /> @bolds_uz</li>
              <li className="flex items-start gap-2"><Globe2 className="w-4 h-4 mt-1" /> Ташкент, ул. Навои, 12</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 uppercase tracking-widest font-bold">
          <div>© 2026 Bolds.uz. Все права защищены.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-400">Политика конфиденциальности</a>
            <a href="#" className="hover:text-slate-400">Публичная оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/998000000000" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
    >
      <MessageSquare className="w-8 h-8" />
      <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
        Напишите нам!
      </span>
    </a>
  );
};

export default function App() {
  return (
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
      <WhatsAppButton />
    </div>
  );
}
