import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

function sanitizeInput(value: string): string {
  return value.replace(/[<>]/g, '').trim();
}

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
  { icon: Phone, label: 'Phone', value: '04 - 271 1305', href: 'tel:+97142711305' },
  { icon: Phone, label: 'Mobile', value: '+971 52 416 7387', href: 'tel:+971524167387' },
  { icon: Mail, label: 'Email', value: 'info@hyderadvisory.com', href: 'mailto:info@hyderadvisory.com' },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Office No. 702, NGI House, Deira, P.O.Box 478473, Dubai U.A.E',
    href: 'https://maps.google.com/?q=NGI+House+Deira+Dubai',
  },
  { icon: Clock, label: 'Appointments', value: 'Contact Hyder Ali Advisory to arrange a consultation', href: undefined },
];

const services = [
  'Corporate & Commercial Law',
  'Corporate Services',
  'Commercial Litigation',
  'Criminal Law',
  'Interpol Law',
  'Family & Matrimonial Law',
  'Real Estate Law',
  'Dispute Resolution',
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
  const [honeypot, setHoneypot] = useState('');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    const name = sanitizeInput(formData.name);
    const email = sanitizeInput(formData.email);
    const phone = sanitizeInput(formData.phone);
    const message = sanitizeInput(formData.message);

    if (!name || name.length < 2) newErrors.name = 'Please enter your full name.';
    if (name.length > 100) newErrors.name = 'Name must be under 100 characters.';
    if (!email) newErrors.email = 'Email address is required.';
    else if (!validateEmail(email)) newErrors.email = 'Please enter a valid email address.';
    if (phone && !validatePhone(phone)) newErrors.phone = 'Please enter a valid international phone number.';
    if (!formData.service) newErrors.service = 'Please select a service area.';
    if (!message || message.length < 20) newErrors.message = 'Please describe your matter in at least 20 characters.';
    if (message.length > 2000) newErrors.message = 'Message must be under 2000 characters.';

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const maxLengths: Record<string, number> = {
      name: 100,
      email: 254,
      phone: 20,
      message: 2000,
    };
    const truncated = maxLengths[name] ? value.slice(0, maxLengths[name]) : value;
    setFormData((prev) => ({ ...prev, [name]: truncated }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      formRef.current?.reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full bg-white border text-slate-950 placeholder-slate-400 px-4 py-3 text-sm focus:outline-none focus:border-sky-600 transition-colors ${
      hasError ? 'border-red-500' : 'border-slate-200'
    }`;

  return (
    <section id="contact" className="py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="/images/dubai-skyline.jpg" alt="" className="w-full h-full object-cover" aria-hidden="true" loading="lazy" />
        <div className="absolute inset-0 bg-white/80" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-sky-700" />
            <span className="text-sky-800 text-xs tracking-[0.3em] uppercase font-inter">
              Get In Touch
            </span>
            <div className="w-10 h-px bg-sky-700" />
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-slate-950 mb-4">
            Contact Hyder Ali
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-cormorant text-lg">
            Share your legal or corporate matter confidentially and Hyder Ali Advisory will respond
            with the next steps for a consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-slate-950 mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 border border-slate-200 bg-white flex items-center justify-center flex-shrink-0 group-hover:border-sky-300 transition-colors">
                      <Icon size={16} className="text-sky-700" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-slate-800 text-sm hover:text-sky-700 transition-colors leading-relaxed"
                          {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-slate-800 text-sm leading-relaxed">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-48 border border-slate-200 overflow-hidden bg-white shadow-sm">
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                <MapPin size={32} className="text-sky-700" />
                <p className="text-slate-600 text-sm text-center px-4">
                  Office No. 702, NGI House<br />Deira, Dubai U.A.E
                </p>
                <a
                  href="https://maps.google.com/?q=NGI+House+Deira+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 text-xs hover:underline"
                >
                  View on Google Maps -&gt;
                </a>
              </div>
            </div>

            <div className="p-4 border border-sky-100 bg-white shadow-sm">
              <p className="text-slate-600 text-xs leading-relaxed">
                <span className="text-sky-700 font-semibold">Confidential:</span> Legal and
                corporate advisory enquiries are handled with professional discretion.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitStatus === 'success' ? (
              <motion.div
                className="h-full flex flex-col items-center justify-center text-center p-12 border border-slate-200 bg-white shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle size={56} className="text-emerald-500 mb-6" />
                <h3 className="font-playfair text-2xl font-semibold text-slate-950 mb-3">
                  Message Received
                </h3>
                <p className="text-slate-600 max-w-sm font-cormorant text-lg">
                  Thank you for contacting Hyder Ali Advisory. You will receive a response with
                  the next consultation steps.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-6 px-6 py-2.5 border border-sky-200 text-sky-700 text-sm hover:bg-sky-50 transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact form">
                <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0 }}>
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
                  <div>
                    <label htmlFor="contact-name" className="block text-slate-600 text-xs mb-2 uppercase tracking-wider">
                      Full Name <span className="text-sky-700">*</span>
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
                      className={inputClass(!!errors.name)}
                      aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p id="name-error" role="alert" className="mt-1 text-red-500 text-xs flex items-center gap-1"><AlertCircle size={11} /> {errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-slate-600 text-xs mb-2 uppercase tracking-wider">
                      Email Address <span className="text-sky-700">*</span>
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
                      className={inputClass(!!errors.email)}
                      aria-required="true"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p id="email-error" role="alert" className="mt-1 text-red-500 text-xs flex items-center gap-1"><AlertCircle size={11} /> {errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-phone" className="block text-slate-600 text-xs mb-2 uppercase tracking-wider">
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
                      className={inputClass(!!errors.phone)}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && <p id="phone-error" role="alert" className="mt-1 text-red-500 text-xs flex items-center gap-1"><AlertCircle size={11} /> {errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-slate-600 text-xs mb-2 uppercase tracking-wider">
                      Service Area <span className="text-sky-700">*</span>
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`${inputClass(!!errors.service)} appearance-none cursor-pointer ${!formData.service ? 'text-slate-400' : 'text-slate-950'}`}
                      aria-required="true"
                      aria-describedby={errors.service ? 'service-error' : undefined}
                      aria-invalid={!!errors.service}
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <p id="service-error" role="alert" className="mt-1 text-red-500 text-xs flex items-center gap-1"><AlertCircle size={11} /> {errors.service}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-slate-600 text-xs mb-2 uppercase tracking-wider">
                    Your Legal Matter <span className="text-sky-700">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Briefly describe your legal or corporate matter..."
                    maxLength={2000}
                    className={`${inputClass(!!errors.message)} resize-none`}
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  <div className="flex justify-between items-start mt-1">
                    {errors.message ? (
                      <p id="message-error" role="alert" className="text-red-500 text-xs flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.message}
                      </p>
                    ) : <span />}
                    <span className="text-slate-400 text-xs ml-auto">{formData.message.length}/2000</span>
                  </div>
                </div>

                {submitStatus === 'error' && (
                  <div role="alert" className="flex items-center gap-2 p-3 border border-red-200 bg-red-50 text-red-600 text-sm">
                    <AlertCircle size={16} />
                    <span>Something went wrong. Please try again or email Hyder Ali Advisory directly.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-sky-700 text-white font-bold text-sm tracking-widest uppercase hover:bg-sky-800 disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3"
                  aria-label={submitting ? 'Sending your message...' : 'Send consultation request'}
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Consultation Request
                    </>
                  )}
                </button>

                <p className="text-slate-500 text-xs text-center">
                  By submitting, you agree to be contacted about your enquiry.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
