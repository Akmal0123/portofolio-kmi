import React from 'react';
import { ScrollReveal } from './ReactBits';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section section-light">
      <div className="container">
        <ScrollReveal>
          <h2>Get In Touch</h2>
          <div className="heading-line"></div>
          <p className="section-subtitle">
            I am currently looking for internship opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </ScrollReveal>

        <div className="contact-container">
          <ScrollReveal delay={0.2} className="contact-info">
            <h3 className="contact-title">Contact Information</h3>
            <p className="contact-desc">
              Feel free to reach out to me through any of the platforms below or use the contact form.
            </p>
            
            <div className="contact-links">
              <a href="mailto:johndoe@example.com" className="contact-link-item">
                <div className="contact-icon-wrapper">
                  <Mail size={20} />
                </div>
                <span>johndoe@example.com</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <div className="contact-icon-wrapper">
                  <FaGithub size={20} />
                </div>
                <span>github.com/johndoe</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <div className="contact-icon-wrapper">
                  <FaLinkedin size={20} />
                </div>
                <span>linkedin.com/in/johndoe</span>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" className="form-input" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-input" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" className="form-textarea" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                Send Message <Send size={18} style={{ marginLeft: '0.5rem', verticalAlign: 'middle' }} />
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
