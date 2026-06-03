import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const stats = [
  { value: 15, suffix: '+', label: 'Years of Excellence', desc: 'Serving clients since 2009' },
  { value: 5000, suffix: '+', label: 'Cases Resolved', desc: 'Successful outcomes' },
  { value: 50, suffix: '+', label: 'Countries Served', desc: 'Global client base' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', desc: 'Rated excellent' },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-20 bg-amber-400 overflow-hidden">
      {/* Diagonal background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #0a0a0f,
            #0a0a0f 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map(({ value, suffix, label, desc }, i) => (
            <motion.div
              key={label}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mb-2">
                <span className="font-playfair text-5xl sm:text-6xl font-bold text-[#0a0a0f]">
                  {inView ? (
                    <CountUp end={value} duration={2.5} delay={i * 0.15} />
                  ) : (
                    '0'
                  )}
                </span>
                <span className="font-playfair text-4xl font-bold text-[#0a0a0f]">{suffix}</span>
              </div>
              <p className="text-[#0a0a0f] font-semibold text-sm tracking-wide uppercase">
                {label}
              </p>
              <p className="text-[#1a1a2e]/60 text-xs mt-1 font-inter">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
