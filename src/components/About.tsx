import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, Quote } from 'lucide-react';

const highlights = [
  'Managing Director and Founder of Hyder Ali Advisory Corporate Services',
  'Dubai-based legal and corporate advisory practice with 15+ years of experience',
  'Legal representation across courts of the United Arab Emirates',
  'Advisor for domestic and international clients across varied industries',
  'Focused on corporate governance, licensing, contracts, employment, and disputes',
  'Committed to professional, confidential, and practical client service',
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" ref={ref} className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-50/70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/portrait.jpg"
              alt="Hyder Ali - Managing Director"
              className="w-full max-w-md mx-auto lg:mx-0 h-[550px] object-cover object-top border border-slate-200 shadow-xl shadow-slate-200/70"
              loading="lazy"
            />
            <div className="absolute -bottom-5 -right-5 w-full max-w-md h-[550px] border border-sky-300 -z-10 hidden sm:block" />

            <motion.div
              className="absolute -right-4 lg:-right-10 bottom-14 bg-white border border-slate-200 p-6 max-w-[230px] shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <Quote size={24} className="text-sky-600 mb-3" />
              <p className="text-slate-900 text-sm font-semibold leading-tight">
                Standing firm on the side of truth and fighting for justice.
              </p>
              <p className="text-slate-500 text-xs mt-3">Hyder Ali Advisory vision</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-sky-700" />
              <span className="text-sky-800 text-xs tracking-[0.3em] uppercase font-inter">
                Profile
              </span>
            </div>

            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-slate-950 mb-6 leading-tight">
              A Practical Advisor for Legal and Corporate Matters in Dubai
            </h2>

            <div className="space-y-4 text-slate-700 font-cormorant text-lg leading-relaxed mb-8">
              <p>
                Hyder Ali leads Hyder Ali Advisory Corporate Services, a Dubai-based law and
                corporate advisory practice serving clients with legal, management, and business
                support needs across the UAE.
              </p>
              <p>
                The practice is backed by more than a decade of experience and provides guidance
                for commercial needs, company governance, licensing arrangements, employment issues,
                commercial contracts, funding-related matters, procurement, and dispute work.
              </p>
              <p>
                His portfolio spans corporate and commercial law, criminal law, Interpol matters,
                family and matrimonial law, commercial litigation and arbitration, real estate law,
                dispute resolution, and integrated business support.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                >
                  <CheckCircle2 size={16} className="text-sky-700 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-3 bg-sky-700 text-white font-semibold text-sm tracking-wide hover:bg-sky-800 transition-colors"
              >
                Work With Hyder
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-3 border border-slate-300 text-slate-800 font-semibold text-sm tracking-wide hover:border-sky-700 hover:text-sky-700 transition-colors bg-white"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
