'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  gradient: string;
  features: string[];
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'Scalable marketplace with real-time inventory and secure payments.',
    longDescription: 'Built a comprehensive e-commerce solution handling 10K+ daily transactions with real-time inventory management, payment processing, and advanced analytics dashboard.',
    category: 'Full-Stack Web App',
    tags: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
    gradient: 'from-blue-500 to-cyan-500',
    features: ['Real-time inventory', 'Secure payment gateway', 'Admin dashboard', 'Email notifications'],
  },
  {
    title: 'FinTech Dashboard',
    description: 'Real-time financial analytics and portfolio management system.',
    longDescription: 'Developed a sophisticated financial dashboard with real-time data visualization, portfolio tracking, and automated reporting for institutional investors.',
    category: 'Data Visualization',
    tags: ['React', 'D3.js', 'Python', 'WebSocket'],
    gradient: 'from-emerald-500 to-teal-500',
    features: ['Real-time updates', 'Interactive charts', 'Portfolio tracking', 'Automated reports'],
  },
  {
    title: 'Healthcare Portal',
    description: 'HIPAA-compliant patient management and telemedicine platform.',
    longDescription: 'Created a secure healthcare platform with video consultations, patient records management, and appointment scheduling for a network of medical professionals.',
    category: 'Enterprise Solution',
    tags: ['Next.js', 'WebRTC', 'AWS', 'MongoDB'],
    gradient: 'from-purple-500 to-pink-500',
    features: ['Video consultations', 'Secure records', 'Appointment system', 'HIPAA compliant'],
  },
  {
    title: 'AI Content Generator',
    description: 'AI-powered content creation tool with GPT integration.',
    longDescription: 'Built an AI-powered platform that generates marketing copy, blog posts, and social media content using advanced language models with custom fine-tuning.',
    category: 'AI/ML Application',
    tags: ['Python', 'OpenAI', 'FastAPI', 'React'],
    gradient: 'from-orange-500 to-red-500',
    features: ['GPT-4 integration', 'Custom templates', 'Multi-language', 'SEO optimization'],
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing platform with virtual tours and AR features.',
    longDescription: 'Developed a modern real estate platform featuring interactive 3D tours, augmented reality property viewing, and intelligent search with ML-powered recommendations.',
    category: 'PropTech',
    tags: ['React', 'Three.js', 'Node.js', 'AWS'],
    gradient: 'from-teal-500 to-green-500',
    features: ['3D virtual tours', 'AR viewing', 'Smart search', 'Interactive maps'],
  },
  {
    title: 'Learning Management System',
    description: 'Comprehensive LMS with video streaming and progress tracking.',
    longDescription: 'Created an interactive learning platform with video streaming, quizzes, certificates, and detailed analytics for students and instructors.',
    category: 'EdTech Solution',
    tags: ['Next.js', 'AWS', 'MongoDB', 'Stripe'],
    gradient: 'from-indigo-500 to-blue-500',
    features: ['Video streaming', 'Progress tracking', 'Certificates', 'Analytics'],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="w-full relative overflow-hidden" style={{ paddingTop: 'clamp(3rem, 6vw, 6rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)' }}>
      <div ref={ref} className="relative z-10 w-full" style={{ padding: '0 clamp(2rem, 5vw, 6rem)' }}>
        <div className="text-center" style={{ marginBottom: 'clamp(2.5rem, 4vw, 4rem)', marginTop: 0 }}>
          <h2 className="text-3xl  sm:text-4xl md:text-5xl lg:text-6xl font-bold" style={{ marginBottom: 'clamp(2.5rem, 3vw, 3.5rem)' }}>
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-medium max-w-2xl mx-auto leading-relaxed" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            Showcasing our expertise across various industries and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 'clamp(2rem, 3vw, 3rem)' }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="modern-card overflow-hidden cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              {/* Gradient Header */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <motion.div
                  className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-6xl opacity-30"
                      whileHover={{ scale: 1.2, opacity: 0.5 }}
                    >
                      💼
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div style={{ padding: 'clamp(1.5rem, 2vw, 2rem)' }}>
                <div className="text-xs text-teal-accent font-semibold mb-4 md:mb-5 uppercase tracking-wide">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-5 md:mb-6 group-hover:text-teal-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-medium text-sm mb-6 md:mb-8 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/5 border border-white/10 text-xs text-gray-light rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details */}
                <div className="flex items-center text-teal-accent font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                  <span>View Details</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-navy-primary border border-teal-accent/30 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`h-64 bg-gradient-to-br ${selectedProject.gradient} relative`}>
                <button
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                  onClick={() => setSelectedProject(null)}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div style={{ padding: 'clamp(2rem, 3vw, 3rem)' }}>
                <div className="text-sm text-teal-accent font-semibold mb-3 uppercase tracking-wide">
                  {selectedProject.category}
                </div>
                <h3 className="text-3xl font-bold mb-6">{selectedProject.title}</h3>
                <p className="text-gray-medium mb-8 leading-relaxed text-base">
                  {selectedProject.longDescription}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4">Key Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-medium">
                        <span className="text-teal-accent">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-lg font-semibold mb-4">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-teal-accent/10 border border-teal-accent/30 text-teal-accent rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
