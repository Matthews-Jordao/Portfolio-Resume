import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-profile">
          <div className="hero-top">
            <img src="/images/profile.jpg" alt="Matthews Jordao" className="hero-photo" />
            <p className="hero-name">Matthews<br />Jordao</p>
          </div>
          <h1 className="hero-headline">FULL STACK ENGINEER</h1>
          <div className="hero-social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-btn github">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
              LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
              Instagram
            </a>
          </div>
          <p className="hero-description">I'm Matthews Jordao. I'm a software engineer and creative who loves figuring things out and making things that actually work for people. I'm always learning, building, and exploring new ideas — whether it's an app, a design, or a video project. At the end of the day, I just enjoy creating useful, thoughtful work and getting better at what I do.</p>
        </div>
      </div>
    </section>
  )
}
