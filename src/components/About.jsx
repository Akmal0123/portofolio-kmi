import React from 'react';
import { ScrollReveal } from './ReactBits';
import { GraduationCap, Code, Compass } from 'lucide-react';
import './About.css';

const About = () => {
  const infoCards = [
    {
      icon: <Code size={32} />,
      title: "Development",
      desc: "Passionate about writing clean, maintainable, and scalable code."
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Education",
      desc: "Computer Science major with a focus on Software Engineering."
    },
    {
      icon: <Compass size={32} />,
      title: "Interests",
      desc: "Web technologies, UI/UX design, and open-source contributions."
    }
  ];

  return (
    <section id="about" className="section section-light">
      <div className="container">
        <ScrollReveal>
          <h2>About Me</h2>
          <div className="heading-line"></div>
        </ScrollReveal>

        <div className="about-content">
          <ScrollReveal delay={0.2} className="about-text-wrapper">
            <p className="about-text">
              I am a detail-oriented web developer with a strong foundation in modern web technologies. 
              My journey began with a curiosity about how things work on the internet, which quickly 
              evolved into a passion for building interactive and user-friendly web applications.
            </p>
            <p className="about-text">
              I thrive in collaborative environments and am constantly seeking opportunities to learn 
              and implement new technologies. As an aspiring professional, I am looking for an internship 
              role where I can contribute to meaningful projects, solve complex problems, and grow 
              alongside experienced developers.
            </p>
          </ScrollReveal>

          <div className="about-cards">
            {infoCards.map((card, index) => (
              <ScrollReveal key={index} delay={0.3 + (index * 0.1)}>
                <div className="about-card">
                  <div className="card-icon">{card.icon}</div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-desc">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
