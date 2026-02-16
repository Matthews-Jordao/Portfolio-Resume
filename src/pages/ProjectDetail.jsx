import { useParams, Link } from 'react-router-dom'
import { projectsData } from '../data/projectsData'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projectsData.find(p => p.slug === slug)

  if (!project) {
    return (
      <div className="project-detail">
        <div className="detail-container">
          <div className="not-found">
            <h1>Project Not Found</h1>
            <p>Sorry, we couldn't find the project you're looking for.</p>
            <Link to="/projects" className="back-link">← Back to Projects</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail">
      <div className="detail-container">
        <Link to="/projects" className="back-link">← Back to Projects</Link>

        <div className="detail-header">
          <h1>{project.title}</h1>
          <p className="subtitle">{project.shortDescription}</p>
        </div>

        <img src={project.image} alt={project.title} className="detail-image" />

        <div className="detail-content">
          <section className="detail-section">
            <h2>Overview</h2>
            <p>{project.description}</p>
          </section>

          <section className="detail-section">
            <h2>The Challenge</h2>
            <p>{project.challenge}</p>
          </section>

          <section className="detail-section">
            <h2>The Solution</h2>
            <p>{project.solution}</p>
          </section>

          {project.results && (
            <section className="detail-section">
              <h2>Results & Impact</h2>
              <ul className="results-list">
                {project.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </section>
          )}

          {project.features && (
            <section className="detail-section">
              <h2>Key Features</h2>
              <div className="features-grid">
                {project.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-check">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="detail-section">
            <h2>Technologies Used</h2>
            <div className="technologies">
              {project.technologies.frontend && (
                <div className="tech-category">
                  <h3>Frontend</h3>
                  <div className="tech-list">
                    {project.technologies.frontend.map(tech => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
              {project.technologies.backend && (
                <div className="tech-category">
                  <h3>Backend</h3>
                  <div className="tech-list">
                    {project.technologies.backend.map(tech => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
              {project.technologies.api && (
                <div className="tech-category">
                  <h3>APIs & Services</h3>
                  <div className="tech-list">
                    {project.technologies.api.map(tech => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
              {project.technologies.tools && (
                <div className="tech-category">
                  <h3>Tools & Deployment</h3>
                  <div className="tech-list">
                    {project.technologies.tools.map(tech => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          <section className="detail-section">
            <h2>Project Timeline</h2>
            <p className="timeline">{project.timeline}</p>
          </section>

          <section className="detail-section cta-section">
            <h2>View the Project</h2>
            <div className="cta-buttons">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="cta-button live-button">
                  Visit Live Site →
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="cta-button github-button">
                  View on GitHub →
                </a>
              )}
            </div>
          </section>
        </div>

        <div className="related-projects">
          <h2>More Projects</h2>
          <div className="related-grid">
            {projectsData
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map(p => (
                <Link key={p.id} to={`/projects/${p.slug}`} className="related-card">
                  <img src={p.image} alt={p.title} />
                  <h3>{p.title}</h3>
                  <p>{p.shortDescription}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
