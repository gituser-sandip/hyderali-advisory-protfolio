import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const stats = [
  { value: 15, suffix: '+', label: 'Years Experience', desc: 'Legal and advisory work' },
  { value: 7, suffix: '', label: 'Legal Areas', desc: 'Core practice coverage' },
  { value: 5, suffix: '', label: 'Business Supports', desc: 'Integrated services' },
  { value: 1, suffix: '', label: 'Dubai Office', desc: 'Deira, U.A.E' },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-16 bg-sky-700 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #ffffff, #ffffff 1px, transparent 1px, transparent 60px)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map(({ value, suffix, label, desc }, i) => (
            <motion.div
              key={label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mb-2">
                <span className="font-playfair text-5xl sm:text-6xl font-bold text-white">
                  {inView ? <CountUp end={value} duration={2.2} delay={i * 0.12} /> : '0'}
                </span>
                <span className="font-playfair text-4xl font-bold text-white">{suffix}</span>
              </div>
              <p className="text-white font-semibold text-sm tracking-wide uppercase">{label}</p>
              <p className="text-sky-100/80 text-xs mt-1 font-inter">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
