import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <p>Matthews Jordao.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h3>Explore</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Connect</h3>
              <ul>
                <li><a href="mailto:your.email@example.com">Email</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <p className="footer-copyright">&copy; 2024 Matthews Jordao. All rights reserved.</p>
      </div>
    </footer>
  )
}
