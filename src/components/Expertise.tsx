import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const expertiseAreas = [
  { name: 'Corporate and Commercial Advisory', level: 98 },
  { name: 'Commercial Litigation and Arbitration', level: 94 },
  { name: 'Criminal Law and Interpol Matters', level: 92 },
  { name: 'Family and Matrimonial Law', level: 90 },
  { name: 'Real Estate Law', level: 88 },
  { name: 'Business Support and Procurement', level: 86 },
];

const focusAreas = [
  { label: 'Legal Representation', abbr: 'UAE' },
  { label: 'Corporate Advisory', abbr: 'CORP' },
  { label: 'Dispute Resolution', abbr: 'DR' },
  { label: 'Criminal Defence', abbr: 'CRIM' },
  { label: 'Real Estate', abbr: 'RE' },
  { label: 'Business Support', abbr: 'BIZ' },
];

export default function Expertise() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="expertise" className="py-28 relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <img src="/images/about-bg.jpg" alt="" className="w-full h-full object-cover opacity-10" loading="lazy" aria-hidden="true" />
        <div className="absolute inset-0 bg-white/88" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-sky-700" />
              <span className="text-sky-800 text-xs tracking-[0.3em] uppercase font-inter">
                Expertise
              </span>
            </div>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-slate-950 mb-4 leading-tight">
              Focused Experience Across Law and Business
            </h2>
            <p className="text-slate-600 font-cormorant text-lg mb-10 leading-relaxed">
              Hyder's work sits at the intersection of legal strategy and commercial practicality,
              helping clients understand the risks, documents, procedures, and decisions in front
              of them.
            </p>

            <div className="space-y-6">
              {expertiseAreas.map(({ name, level }, i) => (
                <div key={name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700 text-sm font-medium">{name}</span>
                    <span className="text-sky-700 text-sm font-bold">{level}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-sky-800 to-sky-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${level}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-playfair text-2xl font-semibold text-slate-950 mb-8">
              Portfolio Focus
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
              {focusAreas.map(({ label, abbr }, i) => (
                <motion.div
                  key={abbr}
                  className="border border-slate-200 bg-white p-5 text-center hover:border-sky-300 transition-colors group shadow-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <p className="text-sky-700 font-playfair font-bold text-xl mb-1">{abbr}</p>
                  <p className="text-slate-500 text-xs leading-tight">{label}</p>
                </motion.div>
              ))}
            </div>

            <h3 className="font-playfair text-2xl font-semibold text-slate-950 mb-6">
              Professional Snapshot
            </h3>
            <div className="space-y-6 relative">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-slate-200" />
              {[
                { year: '15+ years', event: 'Legal and corporate advisory experience in the UAE' },
                { year: 'Dubai', event: 'Managing Director at Hyder Ali Advisory Corporate Services' },
                { year: 'Courts', event: 'Legal representation across UAE courts through the firm' },
                { year: 'Clients', event: 'Domestic and international advisory across varied industries' },
                { year: 'Today', event: 'Focused portfolio for legal, corporate, and business support matters' },
              ].map(({ year, event }, i) => (
                <motion.div
                  key={year}
                  className="flex items-start gap-6 pl-8 relative"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="absolute left-0 top-1 w-6 h-6 border-2 border-sky-600 bg-white flex items-center justify-center rounded-full">
                    <div className="w-2 h-2 bg-sky-600 rounded-full" />
                  </div>
                  <div>
                    <span className="text-sky-700 font-bold text-sm">{year}</span>
                    <p className="text-slate-700 text-sm mt-0.5">{event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
