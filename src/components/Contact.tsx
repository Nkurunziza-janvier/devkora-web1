import { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { services } from '@/data/services';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-900 py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg-fine opacity-20" />
      <div className="absolute left-0 bottom-1/4 h-96 w-96 rounded-full bg-accent-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: info */}
          <div>
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent-300">
              Get In Touch
            </div>
            <h2 className="reveal reveal-delay-1 mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let's build your <span className="gradient-text">next digital solution</span>
            </h2>
            <p className="reveal reveal-delay-2 mt-5 text-base leading-relaxed text-slate-400 lg:text-lg">
              Share the details of what you're looking to build. We'll get back to you to discuss
              how DEVKORA can help.
            </p>

            {/* Contact info placeholders */}
            <div className="reveal reveal-delay-3 mt-8 space-y-4">
              <ContactInfoRow icon={Mail} label="Email" value="[your-email@devkora.com]" />
              <ContactInfoRow icon={Phone} label="Phone" value="[+xxx xxx xxx xxx]" />
              <ContactInfoRow icon={MapPin} label="Location" value="[Your Location]" />
            </div>

            {/* Social placeholders */}
            <div className="reveal reveal-delay-4 mt-8">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Follow DEVKORA</p>
              <div className="mt-3 flex gap-3">
                {['LinkedIn', 'Twitter', 'GitHub', 'Instagram'].map((social) => (
                  <a
                    key={social}
                    href="#contact"
                    className="rounded-lg border border-white/10 px-4 py-2 text-xs font-medium text-slate-400 transition-all hover:border-accent-500/30 hover:text-accent-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal reveal-delay-2">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/8 bg-ink-800/60 p-6 backdrop-blur-sm lg:p-8"
            >
              {submitted && (
                <div className="mb-5 flex items-center gap-3 rounded-xl border border-green-400/20 bg-green-400/10 px-4 py-3 text-sm text-green-300">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                  Your project request has been noted. We'll be in touch soon. (This is a demo form — connect it to your backend to receive messages.)
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" type="text" placeholder="John Doe" required />
                <Field label="Email" name="email" type="email" placeholder="john@company.com" required />
                <Field label="Phone" name="phone" type="tel" placeholder="+xxx xxx xxx" />
                <Field label="Company / Organization" name="company" type="text" placeholder="Your company" />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Service Needed
                </label>
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-accent-500/40"
                >
                  <option value="" disabled>Select a service...</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="other">Other / Not sure yet</option>
                </select>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Project Budget <span className="text-slate-500">(optional)</span>
                </label>
                <select
                  name="budget"
                  defaultValue=""
                  className="w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-accent-500/40"
                >
                  <option value="" disabled>Select a range...</option>
                  <option value="under-1k">Under $1,000</option>
                  <option value="1k-5k">$1,000 — $5,000</option>
                  <option value="5k-10k">$5,000 — $10,000</option>
                  <option value="10k+">$10,000+</option>
                  <option value="discuss">Prefer to discuss</option>
                </select>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Project Description
                </label>
                <textarea
                  name="description"
                  rows={4}
                  required
                  placeholder="Tell us about what you'd like to build..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-accent-500/40"
                />
              </div>

              <button
                type="submit"
                className="btn-shine mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-500 to-cyan2-500 px-6 py-3.5 text-base font-semibold text-ink-950 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/30"
              >
                Send Project Request
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoRow({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500/15 to-cyan2-500/15 text-accent-300">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{label}</p>
        <p className="text-sm font-medium text-slate-300">{value}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label} {required && <span className="text-accent-400">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-accent-500/40"
      />
    </div>
  );
}
