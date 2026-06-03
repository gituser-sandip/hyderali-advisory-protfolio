import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Eye, Server, FileCheck, AlertTriangle } from 'lucide-react';

const securityFeatures = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    desc: 'All client communications and documents are encrypted using AES-256. Data in transit uses TLS 1.3 protocol.',
  },
  {
    icon: Shield,
    title: 'Secure Authentication',
    desc: 'Multi-factor authentication with JWT tokens using RS256 algorithm, bcrypt password hashing (cost factor 12+).',
  },
  {
    icon: Eye,
    title: 'Privacy Compliant',
    desc: 'Full GDPR & UAE PDPA compliance. Data minimization, purpose limitation, and right-to-erasure enforced.',
  },
  {
    icon: Server,
    title: 'Secure Infrastructure',
    desc: 'Hosted on ISO 27001-certified infrastructure. Rate limiting, WAF, CORS, and CSP headers fully configured.',
  },
  {
    icon: FileCheck,
    title: 'Audit Logging',
    desc: 'Comprehensive audit trails for all sensitive actions: logins, data access, modifications, and admin operations.',
  },
  {
    icon: AlertTriangle,
    title: 'Vulnerability Monitoring',
    desc: 'Continuous dependency scanning, SAST/DAST testing, and quarterly third-party penetration testing.',
  },
];

export default function SecurityBanner() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 bg-gradient-to-b from-[#0d0d14] to-[#080810] relative overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-emerald-500" />
            <span className="text-emerald-400 text-xs tracking-[0.3em] uppercase font-inter">
              Client Data Protection
            </span>
            <div className="w-10 h-px bg-emerald-500" />
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4">
            Security-First Approach
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto font-cormorant text-lg">
            Your confidential legal matters deserve the highest level of data protection. Our
            platform is built with enterprise-grade security at every layer, following the OWASP
            Top 10 security guidelines and industry best practices.
          </p>
        </motion.div>

        {/* Security grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {securityFeatures.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="group relative p-6 border border-zinc-800 bg-[#0d0d14] hover:border-emerald-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/10 transition-colors">
                  <Icon size={18} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-emerald-500/50 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Security badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          {[
            'OWASP Compliant',
            'ISO 27001',
            'GDPR Ready',
            'UAE PDPA',
            'SOC 2 Type II',
            'PCI DSS',
          ].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 px-4 py-2 border border-zinc-700 bg-zinc-900/50"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-zinc-400 text-xs font-mono tracking-wider">{badge}</span>
            </div>
          ))}
        </motion.div>

        {/* Laravel + React architecture note */}
        <motion.div
          className="mt-10 p-6 border border-zinc-800 bg-[#0a0a0f] max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <h4 className="text-emerald-400 font-mono text-sm font-bold mb-3 flex items-center gap-2">
            <Shield size={14} /> Backend Architecture Security Notes (Laravel + React)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            {[
              '✓ Laravel Sanctum — SPA token authentication',
              '✓ bcrypt (cost 12) — password hashing',
              '✓ Input validation via FormRequest classes',
              '✓ CSRF protection on all state-changing routes',
              '✓ SQL injection prevention via Eloquent ORM',
              '✓ Rate limiting: 60 req/min on API routes',
              '✓ Authorization via Laravel Policies & Gates',
              '✓ Secrets in .env — never committed to VCS',
            ].map((item) => (
              <span key={item} className="text-zinc-400">{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
