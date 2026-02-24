import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { projectsData } from '../data/projectsData'
import './ProjectsPage.css'

import reactIcon from '../assets/Teck Stack Img/react-svgrepo-com.svg'
import nodeIcon from '../assets/Teck Stack Img/node-js-svgrepo-com.svg'
import mongoIcon from '../assets/Teck Stack Img/mongo-svgrepo-com.svg'
import jsIcon from '../assets/Teck Stack Img/js-svgrepo-com.svg'
import cssIcon from '../assets/Teck Stack Img/css-3-svgrepo-com.svg'
import htmlIcon from '../assets/Teck Stack Img/html-5-svgrepo-com.svg'
import viteIcon from '../assets/Teck Stack Img/vitejs-svgrepo-com.svg'
import githubIcon from '../assets/Teck Stack Img/github-color-svgrepo-com.svg'

const techStackIcons = {
  'React': reactIcon,
  'Node.js': nodeIcon,
  'MongoDB': mongoIcon,
  'JavaScript': jsIcon,
  'CSS3': cssIcon,
  'HTML5': htmlIcon,
  'Vite': viteIcon,
  'GitHub': githubIcon
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const cardRefs = useRef([])

  const categories = ['All', 'Personal', 'Client']

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter)

  const handleMouseMove = (event, index) => {
    const cardElement = cardRefs.current[index]
    if (cardElement) {
      const rect = cardElement.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const mouseX = event.clientX
      const mouseY = event.clientY
      
      // Calculate distance and direction from center
      const deltaX = (mouseX - centerX) * 0.1  // More subtle movement
      const deltaY = (mouseY - centerY) * 0.1
      
      // Apply transform
      cardElement.style.transform = `translate(${deltaX}px, ${deltaY}px)`
    }
  }

  const handleMouseLeave = (index) => {
    // Reset card position
    const cardElement = cardRefs.current[index]
    if (cardElement) {
      cardElement.style.transform = 'translate(0px, 0px)'
    }
  }

  return (
    <div className="projects-page">
      <section className="projects-section">
        <div className="projects-wrapper">
          <h1 className="page-title">Projects</h1>
          <p className="projects-intro">
            A showcase of my recent work and personal projects. Each represents my commitment to quality code, 
            user experience, and continuous learning.
          </p>

          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
                <span className="filter-count">
                  ({category === 'All' ? projectsData.length : projectsData.filter(p => p.category === category).length})
                </span>
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <Link key={project.id} to={`/projects/${project.slug}`} className="project-card-link">
                <div 
                  ref={(el) => cardRefs.current[index] = el}
                  className="project-card"
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-overlay">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="overlay-btn github-btn" onClick={(e) => e.stopPropagation()}>
                        <svg viewBox="0 0 24 24" className="btn-icon">
                          <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="overlay-btn live-btn" onClick={(e) => e.stopPropagation()}>
                        <svg viewBox="0 0 24 24" className="btn-icon">
                          <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                        </svg>
                        Live
                      </a>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-tech-stack">
                      {project.tags.slice(0, 4).map(tech => (
                        techStackIcons[tech] ? (
                          <img key={tech} src={techStackIcons[tech]} alt={tech} className="project-tech-icon" title={tech} />
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
      </section>
    </div>
  )
}
