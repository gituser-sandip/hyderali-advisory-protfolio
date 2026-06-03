import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const expertiseAreas = [
  { name: 'Corporate Law', level: 98 },
  { name: 'Family Law', level: 95 },
  { name: 'Real Estate Law', level: 92 },
  { name: 'Criminal Defence', level: 90 },
  { name: 'International Arbitration', level: 88 },
  { name: 'Banking & Finance', level: 85 },
];

const certifications = [
  { label: 'Dubai Legal Affairs', abbr: 'DLA' },
  { label: 'UAE Bar Association', abbr: 'UAEBA' },
  { label: 'DIFC Courts Certified', abbr: 'DIFC' },
  { label: 'ISO 9001:2015', abbr: 'ISO' },
  { label: 'ICC Arbitration', abbr: 'ICC' },
  { label: 'LCIA Member', abbr: 'LCIA' },
];

export default function Expertise() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="expertise" className="py-28 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/about-bg.jpg"
          alt="Conference room background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0a0a0f]/92" />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Expertise bars */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-amber-400" />
              <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-inter">
                Areas of Expertise
              </span>
            </div>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Unmatched Legal{' '}
              <span className="text-amber-400 italic">Proficiency</span>
            </h2>
            <p className="text-zinc-400 font-cormorant text-lg mb-10 leading-relaxed">
              Our attorneys bring decades of combined experience across every facet of UAE law,
              consistently delivering outcomes that exceed client expectations.
            </p>

            {/* Skill bars */}
            <div className="space-y-6">
              {expertiseAreas.map(({ name, level }, i) => (
                <div key={name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-zinc-300 text-sm font-medium">{name}</span>
                    <span className="text-amber-400 text-sm font-bold">{level}%</span>
                  </div>
                  <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${level}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Certifications + timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-playfair text-2xl font-semibold text-white mb-8">
              Accreditations & Memberships
            </h3>

            {/* Certification grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
              {certifications.map(({ label, abbr }, i) => (
                <motion.div
                  key={abbr}
                  className="border border-zinc-800 p-5 text-center hover:border-amber-400/40 transition-colors group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <p className="text-amber-400 font-playfair font-bold text-xl mb-1">{abbr}</p>
                  <p className="text-zinc-500 text-xs leading-tight">{label}</p>
                </motion.div>
              ))}
            </div>

            {/* Timeline */}
            <h3 className="font-playfair text-2xl font-semibold text-white mb-6">
              Our Journey
            </h3>
            <div className="space-y-6 relative">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-zinc-800" />
              {[
                { year: '2009', event: 'Founded in Dubai, UAE' },
                { year: '2013', event: 'Expanded to DIFC jurisdiction' },
                { year: '2017', event: 'Launched international arbitration division' },
                { year: '2021', event: 'Recognized as Top 10 Law Firm in UAE' },
                { year: '2024', event: '5,000+ successful cases milestone' },
              ].map(({ year, event }, i) => (
                <motion.div
                  key={year}
                  className="flex items-start gap-6 pl-8 relative"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="absolute left-0 top-1 w-6 h-6 border-2 border-amber-400 bg-[#0a0a0f] flex items-center justify-center rounded-full">
                    <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  </div>
                  <div>
                    <span className="text-amber-400 font-bold text-sm">{year}</span>
                    <p className="text-zinc-300 text-sm mt-0.5">{event}</p>
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
