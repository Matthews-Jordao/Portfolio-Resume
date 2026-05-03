import { Link } from 'react-router-dom'
import resumePdf from '../assets/Resumes/Matthews Jordao Resume 2025.pdf'
import reactIcon from '../assets/icons/tech/react-svgrepo-com.svg'
import nodeIcon from '../assets/icons/tech/node-js-svgrepo-com.svg'
import jsIcon from '../assets/icons/tech/js-svgrepo-com.svg'
import cssIcon from '../assets/icons/tech/css-3-svgrepo-com.svg'
import htmlIcon from '../assets/icons/tech/html-5-svgrepo-com.svg'
import viteIcon from '../assets/icons/tech/vitejs-svgrepo-com.svg'
import mongoIcon from '../assets/icons/tech/mongo-svgrepo-com.svg'
import githubIcon from '../assets/icons/tech/github-color-svgrepo-com.svg'
import supabaseIcon from '../assets/icons/tech/supabase-logo-icon.png'
import twilioIcon from '../assets/icons/tech/twilio-icon-svgrepo-com.svg'
import './About.css'

const techCategories = [
  {
    label: 'Frontend',
    items: [
      { name: 'React', icon: reactIcon },
      { name: 'JavaScript', icon: jsIcon },
      { name: 'HTML5', icon: htmlIcon },
      { name: 'CSS3', icon: cssIcon },
      { name: 'Vite', icon: viteIcon },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js', icon: nodeIcon },
      { name: 'Express', icon: 'https://cdn.simpleicons.org/express/555555' },
      { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql' },
      { name: 'Supabase', icon: supabaseIcon },
      { name: 'MongoDB', icon: mongoIcon },
    ],
  },
  {
    label: 'Integrations & Tools',
    items: [
      { name: 'Stripe', icon: 'https://cdn.simpleicons.org/stripe/635BFF' },
      { name: 'Twilio', icon: twilioIcon },
      { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/000000' },
      { name: 'GitHub', icon: githubIcon },
    ],
  },
]

export default function About() {
  return (
    <div className="about-page">
      <div className="about-container">

        <h1 className="about-title">About</h1>

        {/* Profile split */}
        <div className="about-split">
          <div className="about-photo-wrap">
            <img src="/images/profile.jpg" alt="Matthews Jordao" className="about-profile-img" />
          </div>
          <div className="about-bio">
            <h2 className="about-name">Matthews Jordao</h2>
            <p className="about-tagline">Software Engineer · Filmmaker · Creative</p>
            <p className="about-bio-text">
              I build things — software, films, and ideas. Based in Connecticut, I work at the intersection of technology and creativity, turning complex problems into clean, usable products. I specialize in full-stack web development with a focus on SaaS platforms, AI-powered tools, and business automation.
            </p>
            <p className="about-bio-text">
              Outside the IDE, I direct, shoot, and edit — from narrative short films to commercial and documentary work. I'm driven by a simple belief: everything I create should have real impact on real people.
            </p>
            <div className="about-quick-facts">
              <div className="about-fact">
                <span className="about-fact-label">Based in</span>
                <span className="about-fact-value">Connecticut, USA</span>
              </div>
              <div className="about-fact">
                <span className="about-fact-label">Education</span>
                <span className="about-fact-value">University of Connecticut</span>
              </div>
              <div className="about-fact">
                <span className="about-fact-label">Focus</span>
                <span className="about-fact-value">Full-stack Engineering & Film</span>
              </div>
            </div>
          </div>
        </div>

        {/* What I Do */}
        <div className="about-section">
          <span className="about-section-label">What I Do</span>
          <div className="about-disciplines">

            <div className="about-discipline">
              <div className="about-discipline-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <h3>Software Engineering</h3>
              <p>Full-stack web applications, SaaS platforms, and AI-powered tools built from architecture to deployment.</p>
              <ul>
                <li>SaaS & web application development</li>
                <li>API design & database modeling</li>
                <li>AI integration & automation</li>
                <li>UI/UX & product thinking</li>
              </ul>
            </div>

            <div className="about-discipline">
              <div className="about-discipline-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14"/>
                  <rect x="3" y="6" width="12" height="12" rx="2"/>
                </svg>
              </div>
              <h3>Film & Video</h3>
              <p>Narrative short films, promotional videos, and documentary work — handled end-to-end from concept to final cut.</p>
              <ul>
                <li>Direction & cinematography</li>
                <li>Editing & post-production</li>
                <li>Commercial & promotional work</li>
                <li>Narrative & documentary storytelling</li>
              </ul>
            </div>

            <div className="about-discipline">
              <div className="about-discipline-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              </div>
              <h3>Creative Direction</h3>
              <p>Branding, marketing strategy, and visual identity — helping businesses build a cohesive and compelling presence.</p>
              <ul>
                <li>Brand identity & strategy</li>
                <li>Digital marketing</li>
                <li>Content creation</li>
                <li>Product positioning</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Tech Stack */}
        <div className="about-section">
          <span className="about-section-label">Tech Stack</span>
          <div className="about-tech-groups">
            {techCategories.map(({ label, items }) => (
              <div key={label} className="about-tech-group">
                <span className="about-tech-group-label">{label}</span>
                <div className="about-tech-icons">
                  {items.map(({ name, icon }) => (
                    <div key={name} className="about-tech-item">
                      <img src={icon} alt={name} className="about-tech-img" />
                      <span className="about-tech-name">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resume */}
        <div className="about-resume">
          <div className="about-resume-left">
            <span className="about-section-label">Resume</span>
            <h2 className="about-resume-heading">Matthews Jordao</h2>
            <p className="about-resume-sub">Software Engineer · Filmmaker · Creative</p>
            <p className="about-resume-desc">Full resume covering work experience, projects, education, and skills.</p>
          </div>
          <div className="about-resume-actions">
            <a
              href={resumePdf}
              download="Matthews Jordao Resume 2025.pdf"
              className="about-resume-btn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download PDF
            </a>
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="about-resume-btn about-resume-btn--outline"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              View PDF
            </a>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="about-cta">
          <Link to="/projects" className="about-cta-link">View My Work →</Link>
          <Link to="/contact" className="about-cta-link about-cta-link--secondary">Get in Touch →</Link>
        </div>

      </div>
    </div>
  )
}
