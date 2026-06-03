import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Building2,
  Users,
  Home,
  Gavel,
  Shield,
  Globe,
  FileText,
  Briefcase,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Corporate Advisory',
    desc: 'Strategic guidance on company formation, governance, licensing, M&A transactions, and commercial contracts across all UAE free zones.',
    tags: ['Company Setup', 'M&A', 'Governance'],
  },
  {
    icon: Users,
    title: 'Family & Matrimonial',
    desc: 'Compassionate yet decisive representation in divorce, custody, inheritance, and all family law matters under UAE personal status law.',
    tags: ['Divorce', 'Custody', 'Inheritance'],
  },
  {
    icon: Home,
    title: 'Real Estate Law',
    desc: 'Expert legal support for property acquisition, developer disputes, RERA compliance, off-plan transactions, and property litigation.',
    tags: ['RERA', 'Property Disputes', 'Conveyancing'],
  },
  {
    icon: Gavel,
    title: 'Dispute Resolution',
    desc: 'Skilled litigators representing clients in all courts of law across the UAE — from first instance to Court of Cassation.',
    tags: ['Litigation', 'Arbitration', 'Mediation'],
  },
  {
    icon: Shield,
    title: 'Criminal Law',
    desc: 'Robust criminal defence and prosecution support across all categories of criminal cases, including cyber crime and financial crime.',
    tags: ['Criminal Defence', 'Cybercrime', 'Appeals'],
  },
  {
    icon: Globe,
    title: 'International Law',
    desc: 'Cross-border legal solutions including Interpol matters, international arbitration, treaty compliance, and diplomatic legal support.',
    tags: ['Interpol', 'Cross-border', 'Arbitration'],
  },
  {
    icon: Building2,
    title: 'Banking & Finance',
    desc: 'Advisory on banking regulations, debt restructuring, regulatory compliance, loan agreements, and financial institution licensing.',
    tags: ['Debt Recovery', 'Compliance', 'Fintech'],
  },
  {
    icon: FileText,
    title: 'Employment Law',
    desc: 'Complete employment lifecycle support: drafting contracts, resolving workplace disputes, DIFC employment tribunal representation.',
    tags: ['DIFC', 'Contracts', 'Disputes'],
  },
];

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-28 bg-[#0a0a0f] relative overflow-hidden">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />

      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[20rem] font-playfair font-bold text-zinc-900/20 tracking-widest"
          aria-hidden="true"
        >
          LAW
        </span>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-sky-400" />
            <span className="text-sky-400 text-xs tracking-[0.3em] uppercase font-inter">
              Practice Areas
            </span>
            <div className="w-10 h-px bg-sky-400" />
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4">
            Comprehensive Legal Services
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto font-cormorant text-lg">
            Our multidisciplinary team provides end-to-end legal solutions across every major area
            of UAE and international law.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800/30">
          {services.map(({ icon: Icon, title, desc, tags }, i) => (
            <motion.div
              key={title}
              className="group relative bg-[#0d0d14] p-8 hover:bg-[#12121e] transition-all duration-300 cursor-default overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              {/* Hover accent line */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-sky-400/0 via-sky-400 to-sky-400/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              {/* Icon */}
              <div className="w-12 h-12 border border-zinc-700 group-hover:border-sky-400/50 flex items-center justify-center mb-6 transition-colors duration-300">
                <Icon size={22} className="text-zinc-400 group-hover:text-sky-400 transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="font-playfair text-lg font-semibold text-white mb-3 group-hover:text-sky-400 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4 font-inter">{desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 border border-zinc-700 text-zinc-500 tracking-wider uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Learn more link */}
              <div className="flex items-center gap-2 text-sky-400/50 group-hover:text-sky-400 text-xs tracking-wide uppercase font-medium transition-colors duration-300">
                <span>Learn More</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Bottom corner decoration */}
              <div className="absolute bottom-0 right-0 w-16 h-16 border-t border-l border-zinc-800/50 group-hover:border-sky-400/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-zinc-500 mb-4 font-cormorant text-lg italic">
            Don't see what you're looking for?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sky-400 border border-sky-400/30 px-6 py-2.5 text-sm hover:bg-sky-400/5 transition-colors"
          >
            Discuss Your Case <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
