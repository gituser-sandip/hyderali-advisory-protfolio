import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, Star } from 'lucide-react';

const highlights = [
  'Licensed law firm with representation in all UAE courts',
  'Over 15 years of combined legal expertise',
  'International and domestic client portfolio',
  'Specialised teams for each practice area',
  'Transparent, fixed-fee billing structure',
  'Multilingual legal counsel available',
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" ref={ref} className="py-28 bg-[#0d0d14] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="w-full h-full bg-gradient-to-l from-amber-400 to-transparent" />
      </div>
      <div className="absolute bottom-20 left-10 w-64 h-64 border border-amber-400/5 rounded-full" />
      <div className="absolute bottom-10 left-20 w-32 h-32 border border-amber-400/8 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image collage */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Main image */}
            <div className="relative">
              <img
                src="/images/portrait.jpg"
                alt="Hyder Ali - Principal Advisor"
                className="w-full max-w-md mx-auto lg:mx-0 h-[550px] object-cover object-top"
                loading="lazy"
              />
              {/* Gold frame accent */}
              <div className="absolute -bottom-4 -right-4 w-full max-w-md h-[550px] border border-amber-400/30 -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-amber-400" />
              <div className="absolute -bottom-4 -right-0 w-24 h-24 border-b-2 border-r-2 border-amber-400" />
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -right-6 lg:-right-12 bottom-16 bg-[#0a0a0f] border border-zinc-700/50 p-6 max-w-[200px] shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-white text-sm font-semibold leading-tight">
                "Outstanding legal expertise. Truly world class."
              </p>
              <p className="text-zinc-500 text-xs mt-2">— CEO, Fortune 500 Co.</p>
            </motion.div>

            {/* Badge */}
            <motion.div
              className="absolute -left-6 lg:-left-10 top-16 bg-amber-400 p-5 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-[#0a0a0f] font-playfair font-bold text-3xl leading-none">15+</p>
              <p className="text-[#0a0a0f]/80 text-xs font-bold tracking-wider uppercase mt-1">
                Years
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-amber-400" />
              <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-inter">
                About Our Firm
              </span>
            </div>

            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Dubai's Most Trusted{' '}
              <span className="text-amber-400 italic">Legal Advisory</span>{' '}
              Partner
            </h2>

            <div className="space-y-4 text-zinc-400 font-cormorant text-lg leading-relaxed mb-8">
              <p>
                Hyder Ali Advisory Corporate Services is a full-service law and corporate advisory
                firm headquartered in Dubai, UAE. Our vision is to become the preeminent
                international provider of Legal and Corporate Advisory services.
              </p>
              <p>
                We are a licensed law firm with legal representation in all courts of the United
                Arab Emirates, backed by a team of highly qualified and devoted legal professionals
                with expertise spanning over 15 years.
              </p>
              <p>
                Our commitment is unwavering: to stand firm on the side of truth and continually
                fight for justice on behalf of every client we serve.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                >
                  <CheckCircle2 size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
                  <span className="text-zinc-300 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-3 bg-amber-400 text-[#0a0a0f] font-semibold text-sm tracking-wide hover:bg-amber-300 transition-colors"
              >
                Work With Us
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-3 border border-zinc-700 text-zinc-300 font-semibold text-sm tracking-wide hover:border-amber-400 hover:text-amber-400 transition-colors"
              >
                Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
