import './TechStack.css'

export default function TechStack() {
  const technologies = [
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'HTML5', icon: '📄' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Git', icon: '🔀' },
    { name: 'Express.js', icon: '🚀' },
    { name: 'MongoDB', icon: '🍃' },
  ]

  return (
    <section className="tech-stack-section">
      <div className="tech-stack-container">
        <h2 className="tech-stack-title">Tech Stack</h2>
        <div className="tech-stack-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-item">
              <span className="tech-icon">{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

