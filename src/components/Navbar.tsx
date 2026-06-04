import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Shield } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Profile', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Expertise', href: '#expertise' },
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
      <div className="hidden lg:block bg-white border-b border-slate-200 py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs text-slate-600">
          <div className="flex items-center gap-6">
            <a
              href="tel:+97142711305"
              className="flex items-center gap-2 hover:text-sky-700 transition-colors"
              aria-label="Call us"
            >
              <Phone size={12} />
              <span>04 - 271 1305</span>
            </a>
            <a
              href="mailto:info@hyderadvisory.com"
              className="flex items-center gap-2 hover:text-sky-700 transition-colors"
              aria-label="Email us"
            >
              <Mail size={12} />
              <span>info@hyderadvisory.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-sky-700">
            <Shield size={12} />
            <span>Hyder Ali Advisory Corporate Services, Dubai U.A.E</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg shadow-slate-200/60 lg:top-0'
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
              aria-label="Hyder Ali - Home"
            >
              <div className="relative w-12 h-12 flex items-center justify-center border border-sky-500/50 rounded-full overflow-hidden bg-white group-hover:border-sky-600 transition-all duration-300">
                <img src="images/hyderali-logo.jpeg" alt="Hyder Ali Advisory logo" className="w-9 h-9 object-contain" />
              </div>
              <div className="hidden sm:block">
                <p className="text-slate-950 font-playfair font-semibold text-base leading-tight tracking-wide">
                  Hyder Ali
                </p>
                <p className="text-sky-700 text-[10px] tracking-[0.2em] uppercase font-inter">
                  Managing Director
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
                      ? 'text-sky-700'
                      : 'text-slate-700 hover:text-slate-950'
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.replace('#', '') && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-px bg-sky-600"
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
                className="group relative px-6 py-2.5 text-sm font-semibold tracking-wide text-white bg-sky-700 hover:bg-sky-800 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Free Consultation</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-950 transition-colors"
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
              className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-slate-200"
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
                        ? 'text-sky-700 border-sky-600 bg-sky-50'
                        : 'text-slate-700 border-transparent hover:text-slate-950 hover:border-slate-300'
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
                    className="block w-full text-center py-3 bg-sky-700 text-white font-semibold tracking-wide hover:bg-sky-800 transition-colors"
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
