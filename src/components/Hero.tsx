import { motion } from 'framer-motion';
import { ChevronDown, Award, Building2, Scale, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '+971524167387';
const WHATSAPP_MESSAGE = 'Hi, I visited Hyder Ali portfolio and would like a consultation.';
const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const badges = [
  { icon: Award, label: '15+ Years', sub: 'Legal and corporate advisory' },
  { icon: Building2, label: 'Dubai, UAE', sub: 'Office in Deira' },
  { icon: Scale, label: 'UAE Courts', sub: 'Legal representation' },
];

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_34%),linear-gradient(135deg,#f8fafc_0%,#e0f2fe_45%,#ffffff_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div>
            <motion.div
              className="flex items-center gap-3 mb-7"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-12 h-px bg-sky-700" />
              <span className="text-sky-800 text-xs tracking-[0.35em] uppercase font-inter font-semibold">
                Managing Director & Founder
              </span>
            </motion.div>

            <motion.h1
              className="font-playfair text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] text-slate-950 mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Hyder Ali
              <span className="block text-sky-700 italic text-4xl sm:text-5xl lg:text-6xl mt-3">
                Legal & Corporate Advisor
              </span>
            </motion.h1>

            <motion.p
              className="text-slate-700 text-lg sm:text-xl leading-relaxed mb-9 max-w-2xl font-cormorant"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Dubai-based Managing Director of Hyder Ali Advisory Corporate Services, providing
              practical legal and corporate guidance across corporate law, criminal law, dispute
              resolution, family matters, real estate, Interpol law, and integrated business support.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group px-8 py-4 bg-sky-700 text-white font-semibold text-sm tracking-widest uppercase hover:bg-sky-800 transition-all duration-300 flex items-center gap-2"
              >
                Get Consultation
                <span className="group-hover:translate-x-1 transition-transform">-&gt;</span>
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 border border-slate-300 text-slate-800 font-semibold text-sm tracking-widest uppercase hover:border-sky-700 hover:text-sky-700 transition-all duration-300 bg-white/70"
              >
                View Profile
              </a>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-3 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {badges.map(({ icon: Icon, label, sub }, i) => (
                <motion.div
                  key={label}
                  className="flex items-start gap-3 bg-white border border-slate-200 p-4 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                >
                  <div className="w-10 h-10 border border-sky-200 bg-sky-50 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-sky-700" />
                  </div>
                  <div>
                    <p className="text-slate-950 font-bold text-base leading-none">{label}</p>
                    <p className="text-slate-500 text-xs mt-1 leading-snug">{sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative mx-auto max-w-[520px] bg-white border border-slate-200 shadow-2xl shadow-sky-900/10">
              <img
                src="/images/portrait.jpg"
                alt="Hyder Ali"
                className="w-full aspect-[4/5] object-cover object-top"
                loading="eager"
              />
              <div className="absolute top-6 right-6 bg-sky-600 px-5 py-4 text-center shadow-lg">
                <p className="text-white font-playfair font-bold text-3xl leading-none">15+</p>
                <p className="text-white/90 text-xs font-bold tracking-wider uppercase mt-1">Years</p>
              </div>
              <div className="p-6">
                <p className="font-playfair text-2xl font-bold text-slate-950">Hyder Ali</p>
                <p className="text-sky-700 font-semibold mt-1">Managing Director</p>
                <p className="text-slate-500 text-sm mt-3">
                  Hyder Ali Advisory Corporate Services, Office No. 702 NGI House, Deira, Dubai.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 w-32 h-32 border-l-2 border-b-2 border-sky-500 hidden sm:block" />
            <div className="absolute -top-5 -right-5 w-32 h-32 border-t-2 border-r-2 border-sky-500 hidden sm:block" />
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-sky-700 transition-colors group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-8 left-6 z-50 group flex items-center gap-3"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      >
        <span className="absolute w-14 h-14 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] transition-colors duration-200 flex items-center justify-center shadow-lg shadow-emerald-500/30">
          <MessageCircle size={26} className="text-white" />
        </div>
        <span className="hidden sm:block bg-white border border-slate-200 text-slate-800 text-xs px-3 py-2 whitespace-nowrap font-inter opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-sm">
          Chat on WhatsApp
        </span>
      </motion.a>
    </section>
  );
}
