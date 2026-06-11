import React from 'react';
import { ScrollReveal, HoverCard } from './ReactBits';
import './TechStack.css';

const TechStack = () => {
  const technologies = [
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      exp: "Advanced",
      desc: "Component-based UI development, hooks, context API, and state management."
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      exp: "Intermediate",
      desc: "Server-side rendering, static site generation, and optimized web apps."
    },
    {
      name: "Vue.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      exp: "Intermediate",
      desc: "Reactive interfaces, Vuex, Vue Router, and composition API."
    },
    {
      name: "NestJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
      exp: "Beginner",
      desc: "Scalable backend architecture, controllers, providers, and modules."
    },
    {
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
      exp: "Intermediate",
      desc: "MVC architecture, Eloquent ORM, routing, and RESTful APIs."
    }
  ];

  return (
    <section id="tech-stack" className="section">
      <div className="container">
        <ScrollReveal>
          <h2>Tech Stack Experience</h2>
          <div className="heading-line"></div>
          <p className="section-subtitle">
            Technologies I have worked with to build robust and scalable applications.
          </p>
        </ScrollReveal>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <ScrollReveal key={tech.name} delay={0.1 * index}>
              <HoverCard className="tech-card">
                <div className="tech-icon-wrapper">
                  <img src={tech.icon} alt={tech.name} className="tech-icon" />
                </div>
                <div className="tech-info">
                  <h3 className="tech-name">{tech.name}</h3>
                  <span className="tech-badge">{tech.exp}</span>
                  <p className="tech-desc">{tech.desc}</p>
                </div>
              </HoverCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
