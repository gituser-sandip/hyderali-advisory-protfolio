import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const practiceLinks = [
  'Corporate & Commercial Law',
  'Corporate Services',
  'Commercial Litigation',
  'Criminal Law',
  'Interpol Law',
  'Real Estate Law',
];

const quickLinks = [
  { label: 'Profile', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden">
      <div className="bg-sky-700 py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #ffffff, #ffffff 1px, transparent 1px, transparent 40px)`,
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Discuss a Legal or Corporate Matter?
          </h2>
          <p className="text-sky-100 font-cormorant text-lg mb-8 max-w-xl mx-auto">
            Contact Hyder Ali Advisory for practical guidance from a Dubai-based managing director
            and legal advisor.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
              className="px-8 py-3.5 bg-white text-sky-800 font-bold text-sm tracking-widest uppercase hover:bg-sky-50 transition-colors"
            >
              Book Consultation
            </a>
            <a
              href="tel:+971524167387"
              className="px-8 py-3.5 border-2 border-white text-white font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 border border-sky-500/50 flex items-center justify-center rounded-full overflow-hidden bg-white">
                <img src="images/hyderali-logo.jpeg" alt="Hyder Ali Advisory logo" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <p className="text-white font-playfair font-semibold text-sm leading-tight">
                  Hyder Ali
                </p>
                <p className="text-sky-300 text-[10px] tracking-[0.2em] uppercase mt-0.5">
                  Managing Director
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Portfolio of Hyder Ali, Managing Director and Founder of Hyder Ali Advisory Corporate
              Services in Dubai, U.A.E.
            </p>
            <div className="space-y-2">
              <a href="tel:+97142711305" className="flex items-center gap-2 text-slate-400 hover:text-sky-300 transition-colors text-sm">
                <Phone size={13} />
                04 - 271 1305
              </a>
              <a href="tel:+971524167387" className="flex items-center gap-2 text-slate-400 hover:text-sky-300 transition-colors text-sm">
                <Phone size={13} />
                +971 52 416 7387
              </a>
              <a href="mailto:info@hyderadvisory.com" className="flex items-center gap-2 text-slate-400 hover:text-sky-300 transition-colors text-sm">
                <Mail size={13} />
                info@hyderadvisory.com
              </a>
              <div className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin size={13} className="mt-0.5 flex-shrink-0" />
                <span>Office No. 702, NGI House, Deira, Dubai U.A.E</span>
              </div>
            </div>
          </div>

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
                    className="text-slate-400 hover:text-sky-300 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-slate-700 group-hover:bg-sky-300 transition-colors" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

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
                    className="text-slate-400 hover:text-sky-300 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-slate-700 group-hover:bg-sky-300 transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Source Site
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Information adapted from Hyder Ali Advisory Corporate Services.
            </p>
            <a
              href="https://hyderadvisory.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sky-300 hover:text-white transition-colors text-sm"
            >
              hyderadvisory.com <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Hyder Ali Advisory Corporate Services. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
