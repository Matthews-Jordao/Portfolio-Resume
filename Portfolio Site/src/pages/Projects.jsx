import { Link } from 'react-router-dom'
import { projectsData } from '../data/projectsData'
import './ProjectsPage.css'

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <section className="projects-section">
        <div className="section-wrapper">
          <h1 className="page-title">My Projects</h1>
          <p className="projects-intro">
            A showcase of my recent work and personal projects. Each represents my commitment to quality code, 
            user experience, and continuous learning.
          </p>

          <div className="projects-grid">
            {projectsData.map(project => (
              <Link key={project.id} to={`/projects/${project.slug}`} className={`project-card ${project.featured ? 'featured' : ''}`}>
                <div className="project-header">
                  <h3>{project.title}</h3>
                  {project.featured && <span className="featured-badge">Featured</span>}
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <span className="project-link">
                  View Project →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
