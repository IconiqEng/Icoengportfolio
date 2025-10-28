'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2D3748] via-[#1a202c] to-[#2D3748]"
    >
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 text-center">
        <div className="animate-on-scroll opacity-0">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 tracking-tight">
            iconiqeng
          </h1>
        </div>

        <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white/90 mb-4 font-[var(--font-inter)]">
            Building Your Vision, From Concept to Code
          </h2>
        </div>

        <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light font-[var(--font-inter)]">
            Expert full-stack development team delivering elegant, scalable solutions.
          </p>
        </div>

        <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.6s' }}>
          <a
            href="#projects"
            className="px-8 py-4 bg-[var(--accent)] text-white rounded-sm font-medium hover:bg-[var(--accent-hover)] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-[var(--font-inter)]"
          >
            See Our Work
          </a>
          <a
            href="#team"
            className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-sm font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-[var(--font-inter)]"
          >
            Meet the Team
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-on-scroll opacity-0 absolute bottom-12 left-1/2 -translate-x-1/2" style={{ animationDelay: '0.8s' }}>
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white/60"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

