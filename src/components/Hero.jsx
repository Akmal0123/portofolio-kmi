import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { TextReveal, FadeIn, ScrollReveal } from './ReactBits';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-animated">
        <motion.div 
          className="blob blob-1"
          animate={{
            x: [0, 30, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="blob blob-2"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <FadeIn delay={0.2}>
            <span className="greeting">Hello, I'm</span>
          </FadeIn>
          
          <h1 className="name">
            <TextReveal text="John Doe" />
          </h1>
          
          <h2 className="title">
            <TextReveal text="Web Developer" className="reveal-text" />
          </h2>
          
          <ScrollReveal delay={0.4}>
            <p className="description">
              Passionate web developer specializing in building exceptional digital experiences. 
              Currently seeking internship opportunities to contribute and grow my skills in a professional environment.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6} className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} style={{ verticalAlign: 'middle', marginLeft: '0.5rem' }} />
            </a>
            <a href="/cv.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Download CV <Download size={18} style={{ verticalAlign: 'middle', marginLeft: '0.5rem' }} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me <Mail size={18} style={{ verticalAlign: 'middle', marginLeft: '0.5rem' }} />
            </a>
          </ScrollReveal>
        </div>
        
        <div className="hero-image-wrapper">
          <ScrollReveal delay={0.3}>
            <div className="hero-image-container">
              <div className="hero-image-bg"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="John Doe - Web Developer" 
                className="hero-image" 
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
