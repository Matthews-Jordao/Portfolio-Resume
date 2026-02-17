import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo">Matthews Jordao</h2>
            <p className="footer-tagline">
              Software Engineer & Digital Creator
            </p>
          </div>

          <div className="footer-links">
            <a href="/projects">Projects</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="mailto:your.email@example.com">Email</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; 2024 Matthews Jordao. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
