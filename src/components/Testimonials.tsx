import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mohammed Al Rashidi',
    role: 'CEO, Gulf Real Estate Group',
    initials: 'MR',
    color: 'from-amber-600 to-amber-400',
    text: 'Hyder Ali Advisory has been our trusted legal partner for over seven years. Their expertise in real estate law and their ability to navigate complex regulatory environments in Dubai has been absolutely invaluable to our business operations.',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Managing Director, Asia-Pacific Holdings',
    initials: 'SC',
    color: 'from-blue-700 to-blue-500',
    text: "As an international investor entering the UAE market, I needed a legal team that understood both local law and international business. Hyder Ali's team exceeded every expectation — professional, thorough, and always available when needed.",
    rating: 5,
  },
  {
    name: 'James Worthington',
    role: 'Partner, Worthington & Associates',
    initials: 'JW',
    color: 'from-emerald-700 to-emerald-500',
    text: 'The criminal defence team at Hyder Ali Advisory demonstrated exceptional skill and composure in a high-pressure case. Their knowledge of UAE criminal procedure is unmatched, and their dedication to their clients is evident at every step.',
    rating: 5,
  },
  {
    name: 'Fatima Al Zaabi',
    role: 'Founder, Zaabi Family Office',
    initials: 'FZ',
    color: 'from-purple-700 to-purple-500',
    text: 'Navigating a difficult family matter required sensitivity and legal precision in equal measure. Hyder Ali Advisory handled our case with both — delivering a resolution that protected our family interests while maintaining dignity throughout.',
    rating: 5,
  },
  {
    name: 'Raj Mehta',
    role: 'CFO, Dubai FinTech Ventures',
    initials: 'RM',
    color: 'from-rose-700 to-rose-500',
    text: 'Their banking and finance legal team helped us structure a complex multi-jurisdictional transaction seamlessly. The attention to detail, combined with their deep understanding of DIFC regulations, made all the difference.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="py-28 bg-[#0d0d14] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

      {/* Large quote decoration */}
      <div
        className="absolute top-20 left-10 text-[20rem] leading-none font-playfair text-zinc-900/30 pointer-events-none select-none"
        aria-hidden="true"
      >
        "
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-amber-400" />
            <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-inter">
              Client Stories
            </span>
            <div className="w-10 h-px bg-amber-400" />
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white">
            What Our Clients Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Main testimonial */}
          <div className="relative overflow-hidden min-h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 60 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="text-center px-4"
              >
                {/* Quote icon */}
                <Quote
                  size={36}
                  className="text-amber-400/30 mx-auto mb-6"
                  aria-hidden="true"
                />

                {/* Text */}
                <p className="font-cormorant text-xl sm:text-2xl text-zinc-200 leading-relaxed mb-8 max-w-3xl mx-auto italic">
                  "{testimonials[current].text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center`}
                  >
                    <span className="text-white font-bold text-sm">
                      {testimonials[current].initials}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold">{testimonials[current].name}</p>
                    <p className="text-zinc-500 text-sm">{testimonials[current].role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mt-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-amber-400 hover:text-amber-400 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`transition-all duration-300 ${
                    i === current ? 'w-8 h-1.5 bg-amber-400' : 'w-1.5 h-1.5 bg-zinc-700 hover:bg-zinc-500'
                  } rounded-full`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-amber-400 hover:text-amber-400 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
