'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/30 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div
        className="w-full flex items-center justify-between"
        style={{
          padding: 'clamp(1rem, 2vw, 1.25rem) clamp(2rem, 5vw, 6rem)',
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          className="text-teal-accent hover:opacity-80 transition-opacity"
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
          }}
        >
          IconiqEng
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white hover:text-teal-accent transition-all duration-300 relative group"
              style={{
                fontSize: '0.9375rem',
                fontWeight: 500,
              }}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-accent group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Get Started Button */}
        <a
          href="#contact"
          className="btn-gradient hidden lg:block"
        >
          Get Started
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white"
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-current"></span>
          <span className="block w-6 h-0.5 bg-current"></span>
          <span className="block w-6 h-0.5 bg-current"></span>
        </button>
      </div>
    </motion.nav>
  );
}
