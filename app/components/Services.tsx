'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    icon: '⚡',
    title: 'Full-Stack Web Development',
    description: 'End-to-end development using React, Node.js, and modern frameworks. We build scalable, performant applications.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    icon: '🎨',
    title: 'Custom Web App Design',
    description: 'Beautiful, intuitive interfaces that users love. From wireframes to pixel-perfect implementations.',
    tags: ['UI/UX', 'Figma', 'TailwindCSS'],
  },
  {
    icon: '🔗',
    title: 'API Integration & Cloud Deployment',
    description: 'Seamless third-party integrations and robust cloud infrastructure on AWS, Azure, or GCP.',
    tags: ['AWS', 'Docker', 'CI/CD'],
  },
  {
    icon: '🚀',
    title: 'UI/UX Design & Optimization',
    description: 'Performance optimization, accessibility improvements, and conversion-focused design strategies.',
    tags: ['Performance', 'A11y', 'Analytics'],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="services" className="w-full py-24 sm:py-32 md:py-40 lg:py-48 xl:py-56 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#00C9A7 1px, transparent 1px), linear-gradient(90deg, #00C9A7 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="relative z-10 w-full" style={{ padding: '0 clamp(2rem, 5vw, 6rem)' }}>
        <div ref={ref} className="text-center mb-24 md:mb-28 lg:mb-32 xl:mb-36 mt-16 md:mt-20 lg:mt-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 md:mb-12 lg:mb-14">
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-medium max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-14">
          {services.map((service, index) => (
            <div
              key={index}
              className="modern-card p-6 md:p-8 group cursor-pointer hover:scale-105 transition-transform"
              style={{ marginBottom: '0' }}
            >
              {/* Icon */}
              <div className="text-6xl mb-10 md:mb-12">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-6 md:mb-7 group-hover:text-teal-accent transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-medium mb-10 md:mb-12 leading-relaxed">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-teal-accent/10 border border-teal-accent/30 text-teal-accent text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Arrow */}
              <div className="mt-6 flex items-center text-teal-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn More</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

