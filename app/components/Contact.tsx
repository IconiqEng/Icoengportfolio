'use client';

import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 sm:py-32 px-6 sm:px-12 bg-[var(--bg-base)]"
    >
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll opacity-0">
          <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-6 text-[var(--text-primary)]">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          <p className="text-center text-[var(--text-secondary)] text-lg max-w-2xl mx-auto mb-12 font-[var(--font-inter)]">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[var(--text-primary)] font-medium mb-2 font-[var(--font-inter)]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[var(--border-light)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all duration-300 bg-white font-[var(--font-inter)]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[var(--text-primary)] font-medium mb-2 font-[var(--font-inter)]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[var(--border-light)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all duration-300 bg-white font-[var(--font-inter)]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[var(--text-primary)] font-medium mb-2 font-[var(--font-inter)]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-[var(--border-light)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all duration-300 resize-none bg-white font-[var(--font-inter)]"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-[var(--accent)] text-white font-medium rounded-sm hover:bg-[var(--accent-hover)] hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-[var(--font-inter)]"
              >
                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
                  Contact Information
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed font-[var(--font-inter)]">
                  We typically respond within 24 hours during business days.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1 font-[var(--font-inter)]">
                      Email
                    </h4>
                    <a
                      href="mailto:hello@iconiqeng.com"
                      className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors font-[var(--font-inter)]"
                    >
                      hello@iconiqeng.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1 font-[var(--font-inter)]">
                      LinkedIn
                    </h4>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors font-[var(--font-inter)]"
                    >
                      linkedin.com/company/iconiqeng
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--border-light)]">
                <p className="text-sm text-[var(--text-secondary)] italic font-[var(--font-inter)]">
                  "Excellence in execution, elegance in design. That's the iconiqeng way."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

