import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

// Security: Input sanitization helper
function sanitizeInput(value: string): string {
  // Strip potential XSS vectors from display - actual sanitization happens server-side
  return value.replace(/[<>]/g, '').trim();
}

// Security: Input validation helpers (mirrors server-side Laravel validation)
function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^\+?[1-9]\d{7,14}$/;
  return phoneRegex.test(phone.replace(/[\s\-()]/g, ''));
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+971 4 300 0000', href: 'tel:+97143000000' },
  { icon: Mail, label: 'Email', value: 'info@hyderadvisory.com', href: 'mailto:info@hyderadvisory.com' },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Level 14, Boulevard Plaza Tower, Downtown Dubai, UAE',
    href: 'https://maps.google.com/?q=Downtown+Dubai',
  },
  { icon: Clock, label: 'Hours', value: 'Sun–Thu: 9:00 AM – 6:00 PM', href: undefined },
];

const services = [
  'Corporate Advisory',
  'Family & Matrimonial Law',
  'Real Estate Law',
  'Dispute Resolution',
  'Criminal Law',
  'International Law',
  'Banking & Finance',
  'Employment Law',
  'Other',
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [honeypot, setHoneypot] = useState(''); // Anti-spam honeypot
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    const name = sanitizeInput(formData.name);
    const email = sanitizeInput(formData.email);
    const phone = sanitizeInput(formData.phone);
    const message = sanitizeInput(formData.message);

    if (!name || name.length < 2) newErrors.name = 'Please enter your full name (min 2 characters).';
    if (name.length > 100) newErrors.name = 'Name must be under 100 characters.';
    if (!email) newErrors.email = 'Email address is required.';
    else if (!validateEmail(email)) newErrors.email = 'Please enter a valid email address.';
    if (phone && !validatePhone(phone)) newErrors.phone = 'Please enter a valid international phone number.';
    if (!formData.service) newErrors.service = 'Please select a service area.';
    if (!message || message.length < 20) newErrors.message = 'Please describe your matter (min 20 characters).';
    if (message.length > 2000) newErrors.message = 'Message must be under 2000 characters.';

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    // Enforce max lengths on input (defence-in-depth)
    const maxLengths: Record<string, number> = {
      name: 100,
      email: 254,
      phone: 20,
      message: 2000,
    };
    const truncated = maxLengths[name] ? value.slice(0, maxLengths[name]) : value;
    setFormData((prev) => ({ ...prev, [name]: truncated }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam: Honeypot check
    if (honeypot) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    try {
      /**
       * SECURITY NOTE — Laravel Backend Integration:
       * POST /api/contact
       * Headers: {
       *   'Content-Type': 'application/json',
       *   'X-CSRF-TOKEN': csrfToken,  // Laravel CSRF
       *   'Accept': 'application/json',
       * }
       * Body: sanitized form fields (server also validates via FormRequest)
       * Rate limited: 5 requests per IP per 10 minutes via throttle middleware
       * - No sensitive data stored in client state
       * - Server returns generic success (no leaking of internal details)
       */
      await new Promise((resolve) => setTimeout(resolve, 1800));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      formRef.current?.reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#0d0d14] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

      {/* Background city skyline */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/images/dubai-skyline.jpg"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0d0d14]/80" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Get In Touch
            </span>
            <div className="w-10 h-px bg-amber-400" />
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4">
            Schedule Your Consultation
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto font-cormorant text-lg">
            Your first consultation is completely free and confidential. Our team is available six
            days a week to address your legal needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 border border-zinc-700 flex items-center justify-center flex-shrink-0 group-hover:border-amber-400/50 transition-colors">
                      <Icon size={16} className="text-amber-400" />
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs uppercase tracking-wider mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-zinc-200 text-sm hover:text-amber-400 transition-colors leading-relaxed"
                          {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-zinc-200 text-sm leading-relaxed">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative h-48 border border-zinc-800 overflow-hidden bg-zinc-900">
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                <MapPin size={32} className="text-amber-400" />
                <p className="text-zinc-400 text-sm text-center px-4">
                  Boulevard Plaza Tower<br />Downtown Dubai, UAE
                </p>
                <a
                  href="https://maps.google.com/?q=Boulevard+Plaza+Tower+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 text-xs hover:underline"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>

            {/* Confidentiality notice */}
            <div className="p-4 border border-zinc-800 bg-zinc-900/50">
              <p className="text-zinc-500 text-xs leading-relaxed">
                <span className="text-amber-400 font-semibold">🔒 Confidential:</span> All
                communications are protected by attorney-client privilege. Your information is
                encrypted and never shared with third parties. We comply with UAE PDPA and GDPR.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitStatus === 'success' ? (
              <motion.div
                className="h-full flex flex-col items-center justify-center text-center p-12 border border-zinc-800"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle size={56} className="text-emerald-400 mb-6" />
                <h3 className="font-playfair text-2xl font-semibold text-white mb-3">
                  Message Received
                </h3>
                <p className="text-zinc-400 max-w-sm font-cormorant text-lg">
                  Thank you for contacting us. A member of our team will reach out within 24
                  business hours to confirm your consultation.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-6 px-6 py-2.5 border border-amber-400/50 text-amber-400 text-sm hover:bg-amber-400/5 transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
                aria-label="Contact form"
              >
                {/* Honeypot field - hidden from real users, traps bots */}
                <div
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0 }}
                >
                  <label htmlFor="website_url">Leave this empty</label>
                  <input
                    type="text"
                    id="website_url"
                    name="website_url"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-zinc-400 text-xs mb-2 uppercase tracking-wider">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      autoComplete="name"
                      maxLength={100}
                      className={`w-full bg-zinc-900 border text-white placeholder-zinc-600 px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors ${
                        errors.name ? 'border-red-500' : 'border-zinc-700'
                      }`}
                      aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="mt-1 text-red-400 text-xs flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-zinc-400 text-xs mb-2 uppercase tracking-wider">
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      autoComplete="email"
                      maxLength={254}
                      className={`w-full bg-zinc-900 border text-white placeholder-zinc-600 px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors ${
                        errors.email ? 'border-red-500' : 'border-zinc-700'
                      }`}
                      aria-required="true"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1 text-red-400 text-xs flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-zinc-400 text-xs mb-2 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 5X XXX XXXX"
                      autoComplete="tel"
                      maxLength={20}
                      className={`w-full bg-zinc-900 border text-white placeholder-zinc-600 px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-zinc-700'
                      }`}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && (
                      <p id="phone-error" role="alert" className="mt-1 text-red-400 text-xs flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="contact-service" className="block text-zinc-400 text-xs mb-2 uppercase tracking-wider">
                      Service Area <span className="text-amber-400">*</span>
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full bg-zinc-900 border text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors appearance-none cursor-pointer ${
                        errors.service ? 'border-red-500' : 'border-zinc-700'
                      } ${!formData.service ? 'text-zinc-600' : 'text-white'}`}
                      aria-required="true"
                      aria-describedby={errors.service ? 'service-error' : undefined}
                      aria-invalid={!!errors.service}
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && (
                      <p id="service-error" role="alert" className="mt-1 text-red-400 text-xs flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.service}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-zinc-400 text-xs mb-2 uppercase tracking-wider">
                    Your Legal Matter <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Briefly describe your legal matter or question..."
                    maxLength={2000}
                    className={`w-full bg-zinc-900 border text-white placeholder-zinc-600 px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-zinc-700'
                    }`}
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  <div className="flex justify-between items-start mt-1">
                    {errors.message ? (
                      <p id="message-error" role="alert" className="text-red-400 text-xs flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.message}
                      </p>
                    ) : (
                      <span />
                    )}
                    <span className="text-zinc-600 text-xs ml-auto">
                      {formData.message.length}/2000
                    </span>
                  </div>
                </div>

                {/* Error state */}
                {submitStatus === 'error' && (
                  <div
                    role="alert"
                    className="flex items-center gap-2 p-3 border border-red-500/30 bg-red-500/10 text-red-400 text-sm"
                  >
                    <AlertCircle size={16} />
                    <span>Something went wrong. Please try again or email us directly.</span>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-amber-400 text-[#0a0a0f] font-bold text-sm tracking-widest uppercase hover:bg-amber-300 disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3"
                  aria-label={submitting ? 'Sending your message...' : 'Send consultation request'}
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#0a0a0f]/30 border-t-[#0a0a0f] rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Consultation Request
                    </>
                  )}
                </button>

                <p className="text-zinc-600 text-xs text-center">
                  By submitting, you agree to our Privacy Policy. Your data is protected under
                  UAE PDPA and handled with strict confidentiality.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
