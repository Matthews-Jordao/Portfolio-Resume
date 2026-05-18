import './Hero.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import profileImg from '../assets/profile/Photo of me.png'

export default function Hero() {
  const titles = [
    'Software Engineer',
    'Filmmaker',
    'Writer',
    'Dog Lover',
    'Marketing Specialist'
  ]

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [showComingSoon, setShowComingSoon] = useState(false)

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]
    
    const typewriterSpeed = isDeleting ? 50 : 80
    const delay = isDeleting ? 0 : displayText === currentTitle ? 1200 : 0

    const timer = setTimeout(() => {
      if (!isDeleting && displayText !== currentTitle) {
        setDisplayText(currentTitle.slice(0, displayText.length + 1))
      } else if (isDeleting && displayText !== '') {
        setDisplayText(currentTitle.slice(0, displayText.length - 1))
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
      } else if (!isDeleting && displayText === currentTitle) {
        setIsDeleting(true)
      }
    }, delay || typewriterSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentTitleIndex, titles])

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hey, I'm Matthews<br />
            <span className="engineer-text">
              {displayText}
              <span className="cursor">|</span>
              <svg className="marker-stroke" viewBox="0 0 300 20">
                <path 
                  d="M5 15 Q50 5 100 12 Q150 18 200 10 Q250 5 295 15"
                  stroke="currentColor" 
                  strokeWidth="3" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </h1>
          
          {/* Mobile image - shows before subtitle on small screens */}
          <div className="hero-image-mobile">
            <img src={profileImg} alt="Matthews Jordao" className="profile-image" />
          </div>

          <p className="hero-subtitle">
            From content management sites to legal content management, to creative marketing ideas, and apps. I provide end-to-end solutions that bridge creativity with technical excellence.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn-primary">
              Projects
              <svg className="arrow-icon" viewBox="0 0 16 16">
                <path d="M8.293 1.707a1 1 0 0 1 1.414 0L15 7l-5.293 5.293a1 1 0 0 1-1.414-1.414L11.586 8H2a1 1 0 0 1 0-2h9.586L8.293 3.293a1 1 0 0 1 0-1.414z" fill="currentColor"/>
              </svg>
            </Link>
            <button className="btn-play" aria-label="Play intro video" onClick={() => setShowComingSoon(true)}>
              <div className="play-icon-circle">
                <svg className="play-icon" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" fill="currentColor"/>
                </svg>
              </div>
              <div className="play-text">
                <span className="watch-text">WATCH</span>
                <span className="intro-text">intro video</span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Desktop image - shows on the right side on larger screens */}
        <div className="hero-image">
          <img src={profileImg} alt="Matthews Jordao" className="profile-image" />
        </div>
      </div>

      {showComingSoon && (
        <div className="coming-soon-overlay" onClick={() => setShowComingSoon(false)}>
          <div className="coming-soon-modal" onClick={e => e.stopPropagation()}>
            <button className="coming-soon-close" onClick={() => setShowComingSoon(false)} aria-label="Close">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="coming-soon-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path d="M15 10l4.553-2.277A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="coming-soon-label">Coming Soon</p>
            <h2 className="coming-soon-title">Intro video in production</h2>
            <p className="coming-soon-sub">Check back soon — it's being edited right now.</p>
          </div>
        </div>
      )}
    </section>
  )
}
