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
    title: 'Corporate & Commercial Law',
    desc: 'Guidance on governance, commercial contracts, licensing, corporate structure, and business decision-making across the UAE.',
    tags: ['Governance', 'Contracts', 'Licensing'],
  },
  {
    icon: Building2,
    title: 'Corporate Services',
    desc: 'Practical support for management, procurement, funding arrangements, and business administration needs.',
    tags: ['Management', 'Funding', 'Procurement'],
  },
  {
    icon: Gavel,
    title: 'Commercial Litigation',
    desc: 'Representation and advisory support for commercial disputes, court work, arbitration, and negotiated resolutions.',
    tags: ['Litigation', 'Arbitration', 'Settlement'],
  },
  {
    icon: Shield,
    title: 'Criminal Law',
    desc: 'Focused support across criminal law matters, including urgent advisory, defence strategy, and court-facing preparation.',
    tags: ['Defence', 'Strategy', 'Court Support'],
  },
  {
    icon: Globe,
    title: 'Interpol Law',
    desc: 'Specialised assistance for cross-border issues, Interpol-related matters, and international legal coordination.',
    tags: ['Interpol', 'Cross-border', 'Coordination'],
  },
  {
    icon: Users,
    title: 'Family & Matrimonial Law',
    desc: 'Confidential guidance for family, matrimonial, custody, and personal-status concerns requiring careful handling.',
    tags: ['Family', 'Matrimonial', 'Custody'],
  },
  {
    icon: Home,
    title: 'Real Estate Law',
    desc: 'Advisory and dispute support for property transactions, real estate contracts, and related litigation.',
    tags: ['Property', 'Contracts', 'Disputes'],
  },
  {
    icon: FileText,
    title: 'Dispute Resolution',
    desc: 'Structured problem-solving for business, employment, procurement, and contractual conflicts before they escalate.',
    tags: ['Negotiation', 'Claims', 'Resolution'],
  },
];

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[18rem] font-playfair font-bold text-slate-200/50 tracking-widest" aria-hidden="true">
          LAW
        </span>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-sky-700" />
            <span className="text-sky-800 text-xs tracking-[0.3em] uppercase font-inter">
              Practice Areas
            </span>
            <div className="w-10 h-px bg-sky-700" />
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-slate-950 mb-4">
            Advisory Services Led by Hyder Ali
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-cormorant text-lg">
            A focused portfolio of legal, corporate, management, and business support services for
            clients who need clear direction in the UAE.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200">
          {services.map(({ icon: Icon, title, desc, tags }, i) => (
            <motion.div
              key={title}
              className="group relative bg-white p-8 hover:bg-sky-50 transition-all duration-300 cursor-default overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-sky-500/0 via-sky-600 to-sky-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="w-12 h-12 border border-slate-200 bg-slate-50 group-hover:border-sky-300 flex items-center justify-center mb-6 transition-colors duration-300">
                <Icon size={22} className="text-slate-500 group-hover:text-sky-700 transition-colors duration-300" />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-slate-950 mb-3 group-hover:text-sky-800 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 font-inter">{desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 border border-slate-200 text-slate-500 tracking-wider uppercase bg-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sky-700/60 group-hover:text-sky-700 text-xs tracking-wide uppercase font-medium transition-colors duration-300">
                <span>Discuss Matter</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sky-700 border border-sky-200 bg-white px-6 py-2.5 text-sm hover:bg-sky-50 transition-colors"
          >
            Arrange a Consultation <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
