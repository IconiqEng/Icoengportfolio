'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate form submission
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', project: '' });
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
    <section id="contact" className="w-full py-24 sm:py-32 md:py-40 lg:py-48 xl:py-56 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-accent/20 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 w-full" style={{ padding: '0 clamp(2rem, 5vw, 6rem)' }}>
        <div className="text-center mb-24 md:mb-28 lg:mb-32 xl:mb-36 mt-16 md:mt-20 lg:mt-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 md:mb-12 lg:mb-14">
            Let's Build Something <span className="gradient-text">Iconic</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-medium max-w-2xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Get in touch with us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-14 xl:gap-16 items-start">
          {/* Contact Form */}
          <div className="modern-card p-6 md:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-7 md:space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-teal-accent transition-all text-white placeholder-gray-medium"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-teal-accent transition-all text-white placeholder-gray-medium"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-semibold mb-2">
                  Project Details
                </label>
                <textarea
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-teal-accent transition-all resize-none text-white placeholder-gray-medium"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed hover:scale-102 transition-transform"
              >
                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent! ✓' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-7 md:space-y-9 lg:space-y-10">
            {/* Quick Response */}
            <div className="modern-card p-7 md:p-8 lg:p-9">
              <div className="text-4xl mb-5 md:mb-6">⚡</div>
              <h3 className="text-xl font-bold mb-3 md:mb-4">Quick Response</h3>
              <p className="text-gray-medium">
                We typically respond within 24 hours during business days.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="modern-card p-7 md:p-8 lg:p-9 space-y-7 md:space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-teal-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:hello@iconiqeng.com" className="text-teal-accent hover:text-teal-hover transition-colors">
                    hello@iconiqeng.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-teal-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">GitHub</h4>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-teal-accent hover:text-teal-hover transition-colors">
                    github.com/IconiqEng
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-teal-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">LinkedIn</h4>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-teal-accent hover:text-teal-hover transition-colors">
                    linkedin.com/company/iconiqeng
                  </a>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="modern-card p-6 md:p-7 border-l-4 border-teal-accent hover:translate-x-1 transition-transform">
              <p className="text-gray-medium italic">
                "Innovation distinguishes between a leader and a follower."
              </p>
              <p className="text-sm text-teal-accent mt-2">— Steve Jobs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
