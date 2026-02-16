import { Link } from 'react-router-dom'
import { projectsData } from '../data/projectsData'
import './FeaturedProjects.css'

export default function FeaturedProjects() {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 2)

  return (
    <section id="projects" className="featured-projects">
      <div className="projects-wrapper">
        <div className="projects-header">
          <h2 className="section-title">Featured Projects</h2>
          <Link to="/projects" className="view-more-link">View More →</Link>
        </div>
        <div className="projects-grid">
          {featuredProjects.map(project => (
            <Link key={project.id} to={`/projects/${project.slug}`} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
