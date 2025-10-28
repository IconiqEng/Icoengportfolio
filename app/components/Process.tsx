'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const processSteps = [
  {
    number: '01',
    title: 'Plan',
    description: 'Discovery and strategy phase where we understand your vision, goals, and requirements.',
    icon: '📋',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Creating wireframes, mockups, and user experiences that bring your ideas to life.',
    icon: '🎨',
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Building robust, scalable applications with clean code and best practices.',
    icon: '⚙️',
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Launching your application with CI/CD pipelines and cloud infrastructure.',
    icon: '🚀',
  },
  {
    number: '05',
    title: 'Support',
    description: 'Ongoing maintenance, updates, and optimization to ensure peak performance.',
    icon: '🛠️',
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="w-full relative overflow-hidden" style={{ paddingTop: 'clamp(3rem, 6vw, 6rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #00C9A7 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}></div>
      </div>

      <div ref={ref} className="relative z-10 w-full" style={{ padding: '0 clamp(2rem, 5vw, 6rem)' }}>
        <div className="text-center" style={{ marginBottom: 'clamp(2.5rem, 4vw, 4.5rem)', marginTop: 0 }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold" style={{ marginBottom: 'clamp(2.5rem, 3vw, 3.5rem)' }}>
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-medium max-w-2xl mx-auto leading-relaxed" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            A proven methodology that delivers exceptional results every time.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-accent via-teal-accent to-transparent -translate-x-1/2" />

          {processSteps.map((step, index) => (
            <div key={index} className="relative last:mb-0" style={{ marginBottom: index === processSteps.length - 1 ? 0 : 'clamp(2.5rem, 4vw, 4rem)' }}>
              <div className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}`}>
                  <div className="inline-block modern-card text-left hover:scale-105 transition-transform" style={{ padding: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
                    <div className="text-5xl mb-6 md:mb-7">{step.icon}</div>
                    <div className="text-teal-accent text-sm font-bold mb-3 md:mb-4">{step.number}</div>
                    <h3 className="text-2xl font-bold mb-4 md:mb-5">{step.title}</h3>
                    <p className="text-gray-medium leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-teal-accent rounded-full border-4 border-navy-primary shadow-lg shadow-teal-accent/50 hover:scale-150 transition-transform" />
                </div>

                {/* Empty space for alternating layout */}
                <div className={index % 2 === 0 ? 'lg:col-start-2' : 'hidden lg:block'} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center" style={{ marginTop: 'clamp(2.5rem, 4vw, 3.5rem)', paddingTop: 'clamp(1.5rem, 2vw, 2.5rem)' }}>
          <a href="#contact" className="btn-primary inline-block">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}

