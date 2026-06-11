import React from 'react';
import { ScrollReveal } from './ReactBits';
import { Search, PenTool, Code, CheckCircle, Rocket, Users } from 'lucide-react';
import './ProjectJourney.css';

const ProjectJourney = () => {
  const journeySteps = [
    {
      icon: <Search size={24} />,
      title: "Requirement Analysis",
      desc: "Collaborating with stakeholders to understand project goals, target audience, and feature requirements.",
      date: "Phase 1"
    },
    {
      icon: <PenTool size={24} />,
      title: "UI/UX Design",
      desc: "Creating wireframes, mockups, and prototypes focused on clean aesthetics and intuitive user flow.",
      date: "Phase 2"
    },
    {
      icon: <Code size={24} />,
      title: "Development",
      desc: "Writing clean, modular code following best practices. Implementing frontend and integrating APIs.",
      date: "Phase 3"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Testing",
      desc: "Conducting rigorous testing to ensure cross-browser compatibility, responsiveness, and bug-free functionality.",
      date: "Phase 4"
    },
    {
      icon: <Rocket size={24} />,
      title: "Deployment",
      desc: "Optimizing assets and deploying the application to production environments using CI/CD pipelines.",
      date: "Phase 5"
    },
    {
      icon: <Users size={24} />,
      title: "Team Collaboration",
      desc: "Working closely with backend developers, designers, and project managers throughout the lifecycle.",
      date: "Ongoing"
    }
  ];

  return (
    <section id="journey" className="section">
      <div className="container">
        <ScrollReveal>
          <h2>Project Journey</h2>
          <div className="heading-line"></div>
          <p className="section-subtitle">
            A glimpse into my development process and how I approach building web applications from concept to completion.
          </p>
        </ScrollReveal>

        <div className="timeline">
          {journeySteps.map((step, index) => (
            <div key={index} className="timeline-item">
              <ScrollReveal delay={0.1 * index} className="timeline-content-wrapper">
                <div className="timeline-marker">
                  <div className="timeline-icon">{step.icon}</div>
                </div>
                <div className="timeline-content">
                  <span className="timeline-date">{step.date}</span>
                  <h3 className="timeline-title">{step.title}</h3>
                  <p className="timeline-desc">{step.desc}</p>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectJourney;
