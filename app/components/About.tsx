'use client';

import { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 sm:py-32 px-6 sm:px-12 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll opacity-0">
          <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-6 text-[var(--text-primary)]">
            About Us
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-12"></div>
        </div>

        <div className="animate-on-scroll opacity-0 space-y-6 text-lg text-[var(--text-secondary)] font-[var(--font-inter)] leading-relaxed">
          <p className="text-center">
            <strong className="text-[var(--text-primary)]">iconiqeng</strong> is a boutique development team dedicated to transforming ideas into elegant, functional digital experiences. We believe in the power of clean code, thoughtful design, and seamless collaboration.
          </p>
          
          <p className="text-center">
            Our mission is to deliver <em>exceptional quality</em> in every project—whether it's a responsive web application, a sophisticated backend system, or a complete digital solution. We combine technical expertise with a deep understanding of user experience to create products that not only work flawlessly but feel intuitive.
          </p>

          <p className="text-center">
            From initial concept to final deployment, we work closely with our clients to ensure every detail aligns with their vision. Our process is transparent, efficient, and focused on delivering results that exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
}

