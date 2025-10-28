'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const techStack = ['React', 'Node.js', 'Python', 'AWS', 'TypeScript', 'Next.js'];

  return (
    <section
      id="home"
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Animated Background with Teal Light Spots */}
      <div className="absolute inset-0">
        {/* Soft blurred teal spots */}
        <motion.div
          className="absolute"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(0, 201, 167, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
            top: '10%',
            right: '10%',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(0, 201, 167, 0.12) 0%, transparent 70%)',
            filter: 'blur(70px)',
            bottom: '20%',
            left: '15%',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(0, 201, 167, 0.1) 0%, transparent 70%)',
            filter: 'blur(60px)',
            top: '60%',
            right: '30%',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Floating circular outlines */}
        <div
          className="absolute border border-teal-accent rounded-full"
          style={{
            width: '400px',
            height: '400px',
            opacity: 0.08,
            top: '20%',
            left: '60%',
          }}
        />
        <div
          className="absolute border border-teal-accent rounded-full"
          style={{
            width: '300px',
            height: '300px',
            opacity: 0.05,
            bottom: '15%',
            right: '10%',
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 text-center w-full"
        style={{
          maxWidth: '900px',
          padding: '0 2rem',
          margin: '0 auto',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Heading */}
          <h1
            style={{
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
              fontWeight: 700,
            }}
          >
            Building <span className="gradient-text">Iconic</span>
            <br />
            Digital Experiences
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: '1.125rem',
              opacity: 0.85,
              maxWidth: '700px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.7,
            }}
          >
            At IconiqEng, we design and develop full-stack applications — from concept to deployment.
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <a href="#projects" className="btn-gradient w-full sm:w-auto text-center">
              View Our Work
            </a>
            <a href="#contact" className="btn-outline w-full sm:w-auto text-center">
              Start a Project
            </a>
          </motion.div>

          {/* Tech Stack Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center"
            style={{ 
              gap: '0.75rem',
              marginTop: '3rem',
            }}
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="px-3.5 py-1.5 rounded-full border border-white/20 text-sm font-medium
                          hover:border-teal-accent hover:bg-teal-accent/10 transition-all duration-300
                          cursor-default"
                style={{
                  backdropFilter: 'blur(8px)',
                  background: 'rgba(255, 255, 255, 0.03)',
                  paddingTop: '0.5rem',
                  paddingBottom: 'rem',
                  paddingLeft: '0.5rem',
                  paddingRight: '0.5rem'
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2"
        style={{ transform: 'translateX(-50%)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-teal-accent/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-teal-accent rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
