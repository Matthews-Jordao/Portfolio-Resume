import './About.css'

export default function About() {
  return (
    <div className="about-page">
      <section className="about-section">
        <div className="section-wrapper">
          <h1 className="page-title">About Me</h1>
          <div className="about-content">
            <p>
              I'm a passionate full-stack developer with expertise in building scalable web applications. 
              With a strong foundation in JavaScript and modern frameworks, I create seamless digital experiences 
              that blend aesthetic design with robust functionality.
            </p>
            <p>
              My journey in tech has taught me that great software is built through collaboration, 
              continuous learning, and attention to detail. I thrive in environments where innovation 
              meets pragmatism.
            </p>
            <h2>Skills & Technologies</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <div className="skill-tags">
                  <span>React.js</span>
                  <span>JavaScript</span>
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>Vite</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <div className="skill-tags">
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>MongoDB</span>
                  <span>PostgreSQL</span>
                  <span>REST APIs</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Tools & Practices</h3>
                <div className="skill-tags">
                  <span>Git</span>
                  <span>npm</span>
                  <span>Webpack</span>
                  <span>Babel</span>
                  <span>Agile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
