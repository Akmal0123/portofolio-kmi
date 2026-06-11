import React from 'react';
import { ScrollReveal, HoverCard } from './ReactBits';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A comprehensive admin dashboard for managing e-commerce operations, featuring real-time data visualization, inventory management, and sales reporting.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Recharts"],
      challenges: "Implementing complex data visualization that remains performant with large datasets.",
      contributions: "Architected the frontend layout, built reusable chart components, and integrated the REST API.",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 2,
      title: "Task Management Tool",
      image: "https://images.unsplash.com/photo-1507925922837-326f46a5c1f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A collaborative task management application with drag-and-drop kanban boards, real-time updates, and team collaboration features.",
      technologies: ["Vue.js", "Vuex", "Node.js", "Socket.io"],
      challenges: "Ensuring state synchronization across multiple connected clients in real-time.",
      contributions: "Developed the drag-and-drop interface, implemented websocket connections for live updates.",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 3,
      title: "Healthcare Portal",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A secure patient portal for booking appointments, viewing medical records, and communicating with healthcare providers.",
      technologies: ["React", "NestJS", "PostgreSQL", "TypeScript"],
      challenges: "Meeting strict accessibility standards and ensuring secure data handling.",
      contributions: "Built the appointment booking flow, integrated authentication, and ensured WCAG compliance.",
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="section section-light">
      <div className="container">
        <ScrollReveal>
          <h2>Featured Projects</h2>
          <div className="heading-line"></div>
          <p className="section-subtitle">
            A selection of my recent work, showcasing my skills in frontend development and problem-solving.
          </p>
        </ScrollReveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={0.1 * index}>
              <HoverCard className="project-card">
                <div className="project-img-wrapper">
                  <img src={project.image} alt={project.title} className="project-img" />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn" aria-label="GitHub Repository">
                        <FaGithub size={20} />
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link-btn" aria-label="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-details">
                    <div className="detail-item">
                      <span className="detail-label">Challenge:</span>
                      <p className="detail-text">{project.challenges}</p>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Contribution:</span>
                      <p className="detail-text">{project.contributions}</p>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
