import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Shield } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-zinc-950 border-b border-zinc-800/50 py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs text-zinc-400">
          <div className="flex items-center gap-6">
            <a
              href="tel:+97143000000"
              className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              aria-label="Call us"
            >
              <Phone size={12} />
              <span>+971 4 300 0000</span>
            </a>
            <a
              href="mailto:info@hyderadvisory.com"
              className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              aria-label="Email us"
            >
              <Mail size={12} />
              <span>info@hyderadvisory.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-amber-400/70">
            <Shield size={12} />
            <span>ISO 9001:2015 Certified | Licensed by Dubai Legal Affairs</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-zinc-800/50 shadow-2xl shadow-black/50 lg:top-0'
            : 'bg-transparent lg:top-[37px]'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              className="flex items-center gap-3 group"
              aria-label="Hyder Ali Advisory - Home"
            >
              <div className="relative w-12 h-12 flex items-center justify-center border border-amber-500/50 rounded-full group-hover:border-amber-400 transition-all duration-300">
                <span className="text-amber-400 font-playfair font-bold text-lg">HA</span>
                <div className="absolute inset-0 rounded-full bg-amber-400/5 group-hover:bg-amber-400/10 transition-all" />
              </div>
              <div className="hidden sm:block">
                <p className="text-white font-playfair font-semibold text-base leading-tight tracking-wide">
                  Hyder Ali Advisory
                </p>
                <p className="text-amber-400/70 text-[10px] tracking-[0.2em] uppercase font-inter">
                  Corporate Services
                </p>
              </div>
            </a>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-amber-400'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.replace('#', '') && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-px bg-amber-400"
                      layoutId="navUnderline"
                    />
                  )}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                className="group relative px-6 py-2.5 text-sm font-semibold tracking-wide text-[#0a0a0f] bg-amber-400 hover:bg-amber-300 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Free Consultation</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-zinc-300 hover:text-white transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="lg:hidden bg-[#0d0d14]/98 backdrop-blur-xl border-t border-zinc-800/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={`block py-3 px-4 text-base font-medium border-l-2 transition-all duration-200 ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-amber-400 border-amber-400 bg-amber-400/5'
                        : 'text-zinc-300 border-transparent hover:text-white hover:border-zinc-600'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="pt-4">
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                    className="block w-full text-center py-3 bg-amber-400 text-[#0a0a0f] font-semibold tracking-wide hover:bg-amber-300 transition-colors"
                  >
                    Free Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
