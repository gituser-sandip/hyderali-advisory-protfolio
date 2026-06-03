import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const practiceLinks = [
  'Corporate Advisory',
  'Family & Matrimonial',
  'Real Estate Law',
  'Criminal Defence',
  'International Arbitration',
  'Banking & Finance',
];

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Team', href: '#team' },
  { label: 'Services', href: '#services' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Contact', href: '#contact' },
  { label: 'Free Consultation', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080810] text-zinc-400 relative overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      {/* CTA Band */}
      <div className="bg-amber-400 py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #0a0a0f, #0a0a0f 1px, transparent 1px, transparent 40px)`,
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-[#0a0a0f] mb-4">
            Ready to Resolve Your Legal Matter?
          </h2>
          <p className="text-[#1a1a2e]/70 font-cormorant text-lg mb-8 max-w-xl mx-auto">
            Book your free, confidential consultation today. Our experts are ready to fight for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
              className="px-8 py-3.5 bg-[#0a0a0f] text-amber-400 font-bold text-sm tracking-widest uppercase hover:bg-zinc-900 transition-colors"
            >
              Book Free Consultation
            </a>
            <a
              href="tel:+97143000000"
              className="px-8 py-3.5 border-2 border-[#0a0a0f] text-[#0a0a0f] font-bold text-sm tracking-widest uppercase hover:bg-[#0a0a0f]/10 transition-colors flex items-center gap-2"
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 border border-amber-500/50 flex items-center justify-center">
                <span className="text-amber-400 font-playfair font-bold text-lg">HA</span>
              </div>
              <div>
                <p className="text-white font-playfair font-semibold text-sm leading-tight">
                  Hyder Ali Advisory
                </p>
                <p className="text-amber-400/60 text-[10px] tracking-[0.2em] uppercase mt-0.5">
                  Corporate Services
                </p>
              </div>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Dubai's most trusted legal and corporate advisory firm. 15+ years of excellence,
              justice, and integrity serving clients across 50+ nations.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+97143000000"
                className="flex items-center gap-2 text-zinc-500 hover:text-amber-400 transition-colors text-sm"
              >
                <Phone size={13} />
                +971 4 300 0000
              </a>
              <a
                href="mailto:info@hyderadvisory.com"
                className="flex items-center gap-2 text-zinc-500 hover:text-amber-400 transition-colors text-sm"
              >
                <Mail size={13} />
                info@hyderadvisory.com
              </a>
              <div className="flex items-start gap-2 text-zinc-500 text-sm">
                <MapPin size={13} className="mt-0.5 flex-shrink-0" />
                <span>Boulevard Plaza Tower, Downtown Dubai</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                    className="text-zinc-500 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-zinc-700 group-hover:bg-amber-400 transition-colors" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice areas */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Practice Areas
            </h4>
            <ul className="space-y-2.5">
              {practiceLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}
                    className="text-zinc-500 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-zinc-700 group-hover:bg-amber-400 transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Certifications
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {['DLA', 'DIFC', 'ICC', 'LCIA', 'ISO', 'UAEBA'].map((cert) => (
                <div
                  key={cert}
                  className="border border-zinc-800 p-3 text-center hover:border-amber-400/30 transition-colors"
                >
                  <span className="text-amber-400/80 font-playfair font-bold text-sm">{cert}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-3 border border-zinc-800 text-xs text-zinc-600">
              <span className="text-emerald-400 font-bold">🔒 Secured</span> — SSL encrypted.
              GDPR & UAE PDPA compliant.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800/50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Hyder Ali Advisory Corporate Services. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-600">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-zinc-400 transition-colors">Cookie Policy</a>
            <span>|</span>
            <a
              href="https://hyderadvisory.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-zinc-400 transition-colors"
            >
              hyderadvisory.com <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
