import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { projectsData } from '../data/projectsData'
import './FeaturedProjects.css'

import intakeLawyerLogo from '../assets/projects/intake-lawyer/intakeLawyer-Logo-toIv-fit.png'
import atendiLogo from '../assets/projects/atendi/Atendi Stacked Transparent.png'
import reactIcon from '../assets/icons/tech/react-svgrepo-com.svg'
import nodeIcon from '../assets/icons/tech/node-js-svgrepo-com.svg'
import mongoIcon from '../assets/icons/tech/mongo-svgrepo-com.svg'
import jsIcon from '../assets/icons/tech/js-svgrepo-com.svg'
import cssIcon from '../assets/icons/tech/css-3-svgrepo-com.svg'
import htmlIcon from '../assets/icons/tech/html-5-svgrepo-com.svg'
import viteIcon from '../assets/icons/tech/vitejs-svgrepo-com.svg'
import githubIcon from '../assets/icons/tech/github-color-svgrepo-com.svg'
import supabaseIcon from '../assets/icons/tech/supabase-logo-icon.png'
import twilioIcon from '../assets/icons/tech/twilio-icon-svgrepo-com.svg'

const techStackIcons = {
  'React': reactIcon,
  'Node.js': nodeIcon,
  'MongoDB': mongoIcon,
  'JavaScript': jsIcon,
  'CSS3': cssIcon,
  'HTML5': htmlIcon,
  'Vite': viteIcon,
  'GitHub': githubIcon,
  'Supabase': supabaseIcon,
  'Express': 'https://cdn.simpleicons.org/express/555555',
  'PostgreSQL': 'https://cdn.simpleicons.org/postgresql',
  'Twilio': twilioIcon,
  'Stripe': 'https://cdn.simpleicons.org/stripe/635BFF',
  'Vercel': 'https://cdn.simpleicons.org/vercel/000000',
}

export default function FeaturedProjects() {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 2)
  const cardRefs = useRef([])
  const cardRectsRef = useRef([])
  const [tooltip, setTooltip] = useState({ visible: false, name: '', x: 0, y: 0 })

  const handleMouseEnter = (index) => {
    const el = cardRefs.current[index]
    if (el) {
      cardRectsRef.current[index] = el.getBoundingClientRect()
      el.style.transition = 'box-shadow 0.3s ease, border-color 0.3s ease'
    }
  }

  const handleMouseMove = (event, index) => {
    const rect = cardRectsRef.current[index]
    const el = cardRefs.current[index]
    if (rect && el) {
      const deltaX = (event.clientX - (rect.left + rect.width / 2)) * 0.1
      const deltaY = (event.clientY - (rect.top + rect.height / 2)) * 0.1
      el.style.transform = `translate(${deltaX}px, ${deltaY}px)`
    }
  }

  const handleMouseLeave = (index) => {
    const el = cardRefs.current[index]
    if (el) {
      el.style.transition = ''
      el.style.transform = 'translate(0px, 0px)'
    }
  }

  return (
    <section id="projects" className="featured-projects">
      <div className="projects-wrapper">
        <div className="projects-header">
          <h2 className="section-title">Featured Projects</h2>
          <Link to="/projects" className="view-more-link">View More →</Link>
        </div>
        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <Link key={project.id} to={`/projects/${project.slug}`} className="project-card-link">
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className="project-card"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="project-image-container">
                  <img
                    src={project.logoCard ? (project.slug === 'atendi-ai' ? atendiLogo : intakeLawyerLogo) : project.image}
                    alt={project.title}
                    className={`project-image${project.logoCard ? (project.slug === 'atendi-ai' ? ' project-image--logo-atendi' : ' project-image--logo') : ''}`}
                  />
                  {project.label && <span className="video-type-label">{project.label}</span>}
                  <div className="project-overlay">
                    {project.type === 'video' ? (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="overlay-btn live-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg viewBox="0 0 24 24" className="btn-icon">
                          <path fill="currentColor" d="M8 5v14l11-7z"/>
                        </svg>
                        Watch
                      </a>
                    ) : (
                      <>
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="overlay-btn github-btn"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg viewBox="0 0 24 24" className="btn-icon">
                              <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Code
                          </a>
                        )}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="overlay-btn live-btn"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg viewBox="0 0 24 24" className="btn-icon">
                              <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                            </svg>
                            Live
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-tech-stack">
                    {project.tags.map(tech => (
                      techStackIcons[tech] ? (
                        <img
                          key={tech}
                          src={techStackIcons[tech]}
                          alt={tech}
                          className="project-tech-icon"
                          onMouseEnter={(e) => setTooltip({ visible: true, name: tech, x: e.clientX, y: e.clientY - 10 })}
                          onMouseMove={(e) => setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY - 10 }))}
                          onMouseLeave={() => setTooltip({ visible: false, name: '', x: 0, y: 0 })}
                        />
                      ) : (
                        <span key={tech} className="tech-text">{tech}</span>
                      )
                    ))}
                  </div>
                  <p className="project-description">{project.shortDescription || project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {tooltip.visible && (
        <div
          className="tech-tooltip"
          style={{ position: 'fixed', left: `${tooltip.x}px`, top: `${tooltip.y}px`, transform: 'translate(-50%, -100%)', pointerEvents: 'none', zIndex: 1000 }}
        >
          {tooltip.name}
        </div>
      )}
    </section>
  )
}
