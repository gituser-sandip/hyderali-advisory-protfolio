import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Award, Globe, Scale, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '+971524167387';
const WHATSAPP_MESSAGE = 'Hi, I visited your website and would like a consultation.';
const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const badges = [
  { icon: Award, label: '15+ Years', sub: 'Experience' },
  { icon: Globe, label: '50+ Nations', sub: 'Clients Served' },
  { icon: Scale, label: '5,000+', sub: 'Cases Won' },
];

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const y = window.scrollY * 0.4;
        parallaxRef.current.style.transform = `translateY(${y}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
        <img
          src="/images/hero-bg.jpg"
          alt="Luxury law office background"
          className="w-full h-full object-cover scale-110"
          loading="eager"
        />
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/95 via-[#0a0a0f]/75 to-[#0a0a0f]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/30" />
      </div>

      {/* Animated gold particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-amber-400/0 via-amber-400/60 to-amber-400/0"
            style={{
              left: `${10 + i * 16}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-32 right-12 w-40 h-40 border border-amber-400/10 rotate-45 hidden xl:block" />
      <div className="absolute top-40 right-20 w-24 h-24 border border-amber-400/5 rotate-45 hidden xl:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Tag line */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-12 h-px bg-amber-400" />
            <span className="text-amber-400 text-xs tracking-[0.4em] uppercase font-inter font-medium">
              Premier Legal & Corporate Advisory
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-playfair text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] text-white mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Justice.{' '}
            <span className="text-amber-400 italic">Integrity.</span>
            <br />
            <span className="text-zinc-300">Excellence.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-zinc-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl font-cormorant"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Dubai's preeminent legal and corporate advisory firm. Trusted by over
            5,000 clients across 50 nations, we deliver unmatched expertise in
            corporate law, dispute resolution, real estate, and family law.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group px-8 py-4 bg-amber-400 text-[#0a0a0f] font-semibold text-sm tracking-widest uppercase hover:bg-amber-300 transition-all duration-300 flex items-center gap-2"
            >
              Free Consultation
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 border border-zinc-500 text-zinc-300 font-semibold text-sm tracking-widest uppercase hover:border-amber-400 hover:text-amber-400 transition-all duration-300"
            >
              Our Services
            </a>
          </motion.div>

          {/* Badges */}
          <motion.div
            className="flex flex-wrap gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {badges.map(({ icon: Icon, label, sub }, i) => (
              <motion.div
                key={label}
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                <div className="w-10 h-10 border border-amber-400/30 flex items-center justify-center">
                  <Icon size={18} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-base leading-none">{label}</p>
                  <p className="text-zinc-500 text-xs mt-0.5">{sub}</p>
                </div>
                {i < badges.length - 1 && (
                  <div className="w-px h-8 bg-zinc-700 ml-3" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 hover:text-amber-400 transition-colors group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>

      {/* ── Floating WhatsApp Button ── */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-8 left-6 z-50 group flex items-center gap-3"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      >
        {/* Button */}
        <div className="relative">
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          <div className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] transition-colors duration-200 flex items-center justify-center shadow-lg shadow-[#25D366]/30">
            {/* WhatsApp SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-7 h-7"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
        </div>

        {/* Tooltip label */}
        <motion.span
          className="hidden sm:block bg-[#0d0d14] border border-zinc-700 text-white text-xs px-3 py-2 whitespace-nowrap font-inter opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
          aria-hidden="true"
        >
          Chat on WhatsApp
        </motion.span>
      </motion.a>
    </section>
  );
}
