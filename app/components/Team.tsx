'use client';

import { useEffect, useRef } from 'react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imagePlaceholder: string;
  linkedin?: string;
  github?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alex Richardson',
    role: 'Lead Full-Stack Developer',
    bio: 'With over 8 years of experience, Alex specializes in architecting scalable applications and leading development teams. Expert in React, Node.js, and cloud infrastructure.',
    imagePlaceholder: 'AR',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Maya Patel',
    role: 'UI/UX & Frontend Specialist',
    bio: 'Maya brings design and code together, creating beautiful, accessible user experiences. Passionate about modern CSS, animation, and design systems that scale.',
    imagePlaceholder: 'MP',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Jordan Chen',
    role: 'Backend & DevOps Engineer',
    bio: 'Jordan ensures our systems run smoothly and securely. Specializes in database optimization, API design, CI/CD pipelines, and cloud infrastructure management.',
    imagePlaceholder: 'JC',
    linkedin: '#',
    github: '#',
  },
];

export default function Team() {
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
      id="team"
      className="py-24 sm:py-32 px-6 sm:px-12 bg-[var(--bg-base)]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll opacity-0">
          <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-6 text-[var(--text-primary)]">
            The Team
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-16"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 flex flex-col items-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Profile Image Placeholder */}
              <div className="relative mb-6 overflow-hidden">
                <div className="w-48 h-48 rounded-sm bg-gradient-to-br from-[var(--text-primary)] to-[var(--text-secondary)] flex items-center justify-center text-white text-4xl font-semibold shadow-lg transition-transform duration-500 group-hover:scale-105">
                  {member.imagePlaceholder}
                </div>
              </div>

              {/* Member Info */}
              <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-2 text-center">
                {member.name}
              </h3>
              <p className="text-[var(--accent)] font-medium mb-4 text-center font-[var(--font-inter)]">
                {member.role}
              </p>
              <p className="text-[var(--text-secondary)] text-center leading-relaxed font-[var(--font-inter)] mb-6">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border-2 border-[var(--border-light)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border-2 border-[var(--border-light)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

