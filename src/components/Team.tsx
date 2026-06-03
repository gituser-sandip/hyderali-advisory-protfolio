import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Award, ExternalLink, Phone } from 'lucide-react';

const team = [
  {
    name: 'Hyder Ali',
    role: 'Managing Director',
    specialties: ['Corporate Law', 'Criminal Defence', 'Dispute Resolution'],
    experience: '20+ Years',
    education: 'Managing Director & Founder',
    initials: 'HA',
    gradient: 'from-amber-800 to-amber-600',
    image: 'https://hyderadvisory.com/assets/images/team/HYDER ALI - MANAGING DIRECTOR - NO 1.jpg',
  },
  {
    name: 'Maisara M A Alqattawi',
    role: 'Manager & Legal Advisor',
    specialties: ['Legal Advisory', 'Corporate Services', 'Compliance'],
    experience: '10+ Years',
    education: 'LLB, Legal Management',
    initials: 'MA',
    gradient: 'from-rose-900 to-rose-700',
    image: 'https://hyderadvisory.com/assets/images/team/Maisara---Legal-Advisor.jpg',
  },
  {
    name: 'Bashar Al Masayba',
    role: 'Senior Advocate',
    specialties: ['Civil Litigation', 'Commercial Law', 'Arbitration'],
    experience: '12+ Years',
    education: 'LLB, Senior Advocate',
    initials: 'BA',
    gradient: 'from-blue-900 to-blue-700',
    image: 'https://hyderadvisory.com/assets/images/team/Bashar.jpg',
  },
  {
    name: 'Mohamed Khamis',
    role: 'Legal Advisor',
    specialties: ['Real Estate Law', 'Corporate Advisory', 'Contracts'],
    experience: '8+ Years',
    education: 'LLB, Legal Advisory',
    initials: 'MK',
    gradient: 'from-emerald-900 to-emerald-700',
    image: 'https://hyderadvisory.com/assets/images/team/MOHAMED KHAMIS MOHAMED HASSAN - NO 4..jpg',
  },
  {
    name: 'Mahmoud Youssef',
    role: 'Legal Advisor',
    specialties: ['Family Law', 'Inheritance', 'Dispute Resolution'],
    experience: '7+ Years',
    education: 'LLB, Legal Advisory',
    initials: 'MY',
    gradient: 'from-violet-900 to-violet-700',
    image: 'https://hyderadvisory.com/assets/images/team/Mahmoud-Youssef.jpg',
  },
  {
    name: 'Sabeena',
    role: 'Secretary',
    specialties: ['Client Relations', 'Office Management', 'Administration'],
    experience: '5+ Years',
    education: 'Business Administration',
    initials: 'SB',
    gradient: 'from-pink-900 to-pink-700',
    image: 'https://hyderadvisory.com/assets/images/team/SABEENA - SECRETARY  NO 5.jpg',
  },
  {
    name: 'Navas Abdullah',
    role: 'Legal Assistant',
    specialties: ['Legal Research', 'Case Management', 'Documentation'],
    experience: '4+ Years',
    education: 'Legal Studies',
    initials: 'NA',
    gradient: 'from-cyan-900 to-cyan-700',
    image: 'https://hyderadvisory.com/assets/images/team/NAVAS ABDULLAH - EXECUTIVE - ACCOUNTS - NO 7NAVAS ABDULLAH - EXECUTIVE - ACCOUNTS - NO 7.jpg',
  },
  {
    name: 'Sheik Ussain',
    role: 'Accounts Executive',
    specialties: ['Financial Management', 'Accounting', 'Audit'],
    experience: '6+ Years',
    education: 'B.Com, Accounting',
    initials: 'SU',
    gradient: 'from-teal-900 to-teal-700',
    image: 'https://hyderadvisory.com/assets/images/team/Sheik-Ussain---Accounts-Executive.jpg',
  },
];

export default function Team() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="team" className="py-28 bg-[#0a0a0f] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-amber-400" />
            <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-inter">
              Our Leadership
            </span>
            <div className="w-10 h-px bg-amber-400" />
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4">
            Meet the Legal Minds
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto font-cormorant text-lg">
            Our team of dedicated attorneys brings together diverse expertise, cultural fluency,
            and an unwavering commitment to client success.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(({ name, role, specialties, experience, education, initials, gradient, image }, i) => (
            <motion.div
              key={name}
              className="group relative bg-[#0d0d14] border border-zinc-800/50 overflow-hidden hover:border-amber-400/30 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Avatar area */}
              <div className={`relative h-52 bg-gradient-to-br ${gradient} flex items-end overflow-hidden`}>
                {/* Real photo */}
                <img
                  src={image}
                  alt={name}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                {/* Fallback initials (shown when image fails) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-[.img-error]:opacity-100">
                  <div className="w-24 h-24 rounded-full border-4 border-white/10 flex items-center justify-center bg-black/20">
                    <span className="font-playfair font-bold text-4xl text-white/80">{initials}</span>
                  </div>
                </div>
                {/* Experience badge */}
                <div className="absolute top-4 right-4 bg-amber-400 px-2 py-1 z-10">
                  <span className="text-[#0a0a0f] text-xs font-bold">{experience}</span>
                </div>
                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0d0d14] to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-playfair text-lg font-semibold text-white mb-1">{name}</h3>
                <p className="text-amber-400/80 text-xs tracking-wide mb-3 leading-tight">{role}</p>

                <div className="flex items-start gap-2 mb-4">
                  <Award size={12} className="text-zinc-600 mt-0.5 flex-shrink-0" />
                  <p className="text-zinc-500 text-xs">{education}</p>
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {specialties.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] px-2 py-0.5 bg-zinc-800 text-zinc-400 border border-zinc-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Social links */}
                <div className="flex gap-3 pt-4 border-t border-zinc-800">
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="flex items-center gap-1.5 text-zinc-500 hover:text-amber-400 transition-colors text-xs"
                    aria-label={`Email ${name}`}
                  >
                    <Mail size={13} />
                    <span>Email</span>
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=+971524167387&text=Hi, I would like to speak with your team."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-zinc-500 hover:text-green-400 transition-colors text-xs"
                    aria-label={`WhatsApp ${name}`}
                  >
                    <Phone size={13} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Join team CTA */}
        <motion.div
          className="mt-16 text-center p-10 border border-zinc-800 bg-[#0d0d14] relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
          <h3 className="font-playfair text-2xl font-semibold text-white mb-3">
            Join Our Team
          </h3>
          <p className="text-zinc-400 font-cormorant text-lg max-w-xl mx-auto mb-6">
            We're always looking for exceptional legal talent. If you're passionate about justice
            and committed to excellence, we'd love to hear from you.
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 px-7 py-3 border border-amber-400/50 text-amber-400 text-sm font-semibold hover:bg-amber-400/5 transition-colors"
          >
            Apply Now →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
