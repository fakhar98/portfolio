import { useState } from 'react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || 'Unable to send message.');
      }

      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-gray-600" />
            <span className="text-gray-500 text-xs font-medium tracking-widest uppercase">
              Get In Touch
            </span>
            <span className="inline-block w-8 h-px bg-gray-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">Let's Work Together</h2>
          <p className="text-gray-500 max-w-md text-base leading-relaxed">
            Open to freelance projects, full-time roles, and interesting collaborations.
            Drop me a message and I'll get back within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              {[
                { icon: Mail, label: 'Email', value: 'fakharkaramat9@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+92 300 4436347' },
                { icon: MapPin, label: 'Location', value: 'Multan, PK' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-neutral-900 border border-white/5 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs uppercase tracking-wide">{label}</p>
                    <p className="text-white text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/5">
              <p className="text-gray-600 text-xs uppercase tracking-widest mb-4">Social</p>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: 'https://github.com/fakhar98', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/fakhar-karamat-a3b2a125a/', label: 'LinkedIn' },
                  { icon: Twitter, href: 'https://x.com/fakhar_karamat', label: 'Twitter' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="bg-neutral-950 border border-white/8 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-white font-semibold text-sm">Available for Hire</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Currently open to freelance projects and full-time opportunities.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 bg-neutral-950 border border-white/5 rounded-2xl p-12 text-center">
                <CheckCircle className="w-12 h-12 text-green-500" />
                <h3 className="text-white font-bold text-xl">Message Sent!</h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  Thanks for reaching out. I'll respond within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-2 text-sm text-gray-500 hover:text-white transition-colors border-b border-gray-700 hover:border-white pb-0.5"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-neutral-950 border border-white/5 rounded-2xl p-8 flex flex-col gap-5"
              >
                {error && (
                  <div className="rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-200">
                    {error}
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-500 text-xs uppercase tracking-wide">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-black text-sm placeholder-gray-700 focus:outline-none focus:border-white/25 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-500 text-xs uppercase tracking-wide">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="Your Email"
                      className="bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-black text-sm placeholder-gray-700 focus:outline-none focus:border-white/25 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 text-xs uppercase tracking-wide">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project inquiry, collaboration, etc."
                    className="bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-black text-sm placeholder-gray-700 focus:outline-none focus:border-white/25 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 text-xs uppercase tracking-wide">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-black text-sm placeholder-gray-700 focus:outline-none focus:border-white/25 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 bg-white text-black font-semibold rounded-xl py-3.5 hover:bg-gray-200 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed text-sm mt-1"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {loading ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
