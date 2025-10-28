'use client';

import { useEffect, useRef } from 'react';

interface Project {
  title: string;
  description: string;
  category: string;
  color: string;
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack marketplace with real-time inventory and payment processing.',
    category: 'Web Application',
    color: 'from-blue-400 to-blue-600',
  },
  {
    title: 'Financial Dashboard',
    description: 'Data visualization platform for portfolio management and analytics.',
    category: 'SaaS Product',
    color: 'from-emerald-400 to-emerald-600',
  },
  {
    title: 'Healthcare Portal',
    description: 'HIPAA-compliant patient management system with telemedicine features.',
    category: 'Enterprise Solution',
    color: 'from-purple-400 to-purple-600',
  },
  {
    title: 'Social Media API',
    description: 'RESTful API handling millions of requests with Redis caching.',
    category: 'Backend System',
    color: 'from-orange-400 to-orange-600',
  },
  {
    title: 'Real Estate Listing',
    description: 'Property search platform with interactive maps and virtual tours.',
    category: 'Web Application',
    color: 'from-teal-400 to-teal-600',
  },
  {
    title: 'Learning Management',
    description: 'Educational platform with video streaming and progress tracking.',
    category: 'EdTech Solution',
    color: 'from-indigo-400 to-indigo-600',
  },
];

export default function Projects() {
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
      { threshold: 0.1 }
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
      id="projects"
      className="py-24 sm:py-32 px-6 sm:px-12 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll opacity-0">
          <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-6 text-[var(--text-primary)]">
            Our Work
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          <p className="text-center text-[var(--text-secondary)] text-lg max-w-2xl mx-auto mb-16 font-[var(--font-inter)]">
            A selection of projects showcasing our expertise across various industries and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white border border-[var(--border-light)] rounded-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Project Image Placeholder */}
                <div className={`h-56 bg-gradient-to-br ${project.color} opacity-90 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="text-white text-6xl font-bold opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    {project.title.charAt(0)}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="text-[var(--accent)] text-sm font-medium mb-2 font-[var(--font-inter)] uppercase tracking-wide">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed font-[var(--font-inter)]">
                    {project.description}
                  </p>

                  {/* View Project Link */}
                  <div className="mt-4 flex items-center text-[var(--accent)] font-medium group-hover:translate-x-2 transition-transform duration-300 font-[var(--font-inter)]">
                    <span className="mr-2">View Case Study</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

