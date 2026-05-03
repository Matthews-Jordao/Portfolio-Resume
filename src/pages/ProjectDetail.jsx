import { useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import intakeLawyerLogo from '../assets/projects/intake-lawyer/intakeLawyer-Logo-toIv-fit.png'
import igboTitleImg from '../assets/projects/its-gonna-be-okay/Its Gonna Be Okay Title.png'
import filmStill1 from '../assets/projects/its-gonna-be-okay/vlcsnap-2024-03-06-17h12m55s416 (1).png'
import filmStill2 from '../assets/projects/its-gonna-be-okay/vlcsnap-2024-03-06-17h13m13s875.png'
import filmStill3 from '../assets/projects/its-gonna-be-okay/vlcsnap-2024-03-06-17h13m55s434.png'
import filmStill4 from '../assets/projects/its-gonna-be-okay/vlcsnap-2024-03-06-17h14m17s622.png'
import btsPhoto1 from '../assets/projects/its-gonna-be-okay/IMG_2007.jpeg'
import btsPhoto2 from '../assets/projects/its-gonna-be-okay/IMG_2066.jpeg'
import btsPhoto3 from '../assets/projects/its-gonna-be-okay/IMG_9110.jpeg'
import intakeLawyerIcon from '../assets/projects/intake-lawyer/intakeLawyer.png'
import intakeLawyerScreenshot from '../assets/projects/intake-lawyer/intake lawyer.png'
import intakeLawyerLeads from '../assets/projects/intake-lawyer/intakelawyer forms.png'
import intakeLawyerChatbot from '../assets/projects/intake-lawyer/intakelawyer chatbot.png'
import intakeLawyerLeadPage from '../assets/projects/intake-lawyer/intake lawyerLead page.png'
import intakeLawyerInfoTab from '../assets/projects/intake-lawyer/intakelawyer infotab.png'
import huskyGif from '../assets/projects/Huskython/HuskyThon Gif.gif'
import huskyStill1 from '../assets/projects/Huskython/Timeline 1_01_00_24_15.jpg'
import huskyStill2 from '../assets/projects/Huskython/Timeline 1_01_00_36_13.jpg'
import huskyStill3 from '../assets/projects/Huskython/Timeline 1_01_02_17_18.jpg'
import huskyStill4 from '../assets/projects/Huskython/Timeline 1_01_03_17_08.jpg'
import huskyStill5 from '../assets/projects/Huskython/Timeline 1_01_03_39_22.jpg'
import { projectsData } from '../data/projectsData'
import './ProjectDetail.css'

function VideoDetail({ project }) {
  const mediumLabel = { 'short-film': 'Short Film', 'commercial': 'Commercial', 'reel': 'Reel' }

  return (
    <div className="project-detail">
      <div className="detail-container">
        <Link to="/projects" className="back-link">← Back to Work</Link>

        <div className="detail-header">
          <span className="detail-eyebrow">
            {mediumLabel[project.medium] || project.medium} &middot; {project.category}
          </span>
          <h1>{project.title}</h1>

          <div className="video-meta-table">
            {project.duration && (
              <div className="meta-row">
                <span>Duration</span>
                <span>{project.duration}</span>
              </div>
            )}
            {project.year && (
              <div className="meta-row">
                <span>Year</span>
                <span>{project.year}</span>
              </div>
            )}
            {project.role && (
              <div className="meta-row">
                <span>Role</span>
                <span>{project.role}</span>
              </div>
            )}
            {project.category && (
              <div className="meta-row">
                <span>Type</span>
                <span>{project.category}</span>
              </div>
            )}
          </div>
        </div>

        <div className="video-embed-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${project.videoId}`}
            title={project.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="detail-content">
          <section className="detail-section">
            <span className="section-label">The Film</span>
            <p>{project.description}</p>
          </section>

          {project.themes && project.themes.length > 0 && (
            <section className="detail-section">
              <span className="section-label">Themes</span>
              <div className="themes-list">
                {project.themes.map(theme => (
                  <span key={theme} className="theme-tag">{theme}</span>
                ))}
              </div>
            </section>
          )}

          {project.shotGallery && project.shotGallery.length > 0 && (
            <section className="detail-section">
              <span className="section-label">Behind the Scenes</span>
              <div className="shot-gallery">
                {project.shotGallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.title} — shot ${i + 1}`}
                    className="gallery-img"
                  />
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="related-projects">
          <h2>More Work</h2>
          <div className="related-grid">
            {projectsData
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map(p => (
                <Link key={p.id} to={`/projects/${p.slug}`} className="related-card">
                  <img src={p.logoCard ? intakeLawyerLogo : p.image} alt={p.title} className={p.logoCard ? 'related-card-img--logo' : ''} />
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

function WebDetail({ project }) {
  return (
    <div className="project-detail">
      <div className="detail-container">
        <Link to="/projects" className="back-link">← Back to Work</Link>

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
          <h2>More Work</h2>
          <div className="related-grid">
            {projectsData
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map(p => (
                <Link key={p.id} to={`/projects/${p.slug}`} className="related-card">
                  <img src={p.logoCard ? intakeLawyerLogo : p.image} alt={p.title} className={p.logoCard ? 'related-card-img--logo' : ''} />
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

function StackIcon({ name, icon }) {
  const [failed, setFailed] = useState(false)
  const abbr = name.split(/[\s.-]/).map(w => w[0]).join('').slice(0, 3).toUpperCase()
  return (
    <div className="il-stack-icon-item">
      {icon && !failed
        ? <img src={icon} alt={name} className="il-stack-icon-img" onError={() => setFailed(true)} />
        : <div className="il-stack-icon-text">{abbr}</div>
      }
      <span className="il-stack-icon-name">{name}</span>
    </div>
  )
}

function IntakeLawyerDetail({ project }) {
  const [zoomed, setZoomed] = useState(null)
  const leadImgRef = useRef(null)
  const infoImgRef = useRef(null)

  const trackOrigin = (e, imgRef, isZoomed) => {
    if (isZoomed) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    if (imgRef.current) {
      imgRef.current.style.transformOrigin = `${x}% ${y}%`
    }
  }

  return (
    <div className="il-detail">
      <div className="il-container">
        <Link to="/projects" className="back-link">← Back to Work</Link>

        {/* Two-column header: heavy title left, meta table right */}
        <div className="il-header">
          <div>
            <img src={intakeLawyerLogo} alt="Intake Lawyer" className="il-brand-logo" />
            <h1 className="il-title">{project.title}</h1>
          </div>
          <div className="il-meta-table">
            <div className="il-meta-row"><span>Type</span><span>Web & Apps</span></div>
            <div className="il-meta-row"><span>Role</span><span>Designer & Developer</span></div>
            <div className="il-meta-row"><span>Stack</span><span>React · Node.js · Supabase</span></div>
            <div className="il-meta-row"><span>Year</span><span>2024 – Present</span></div>
            <div className="il-meta-row">
              <span>Live</span>
              <span>
                <a href="https://intakelawyer.com" target="_blank" rel="noopener noreferrer">
                  intakelawyer.com
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Hero — live screenshot of intakelawyer.com */}
        <div className="il-hero">
          <img
            src={intakeLawyerScreenshot}
            alt="Intake Lawyer — live site"
            className="il-hero-img"
          />
        </div>

        {/* Split 1: what it does */}
        <div className="il-split">
          <div className="il-split-lede">
            <p>A unified workspace replacing scattered spreadsheets, phone logs, and inbox threads.</p>
          </div>
          <div className="il-split-body">
            <p>Before building Intake Lawyer, I spent time working at a personal injury law firm. Intake coordinators juggled leads across email threads, shared spreadsheets, and handwritten notes — no single source of truth, no clear view of where each potential client stood. Good cases went cold. Follow-ups slipped.</p>
            <p>IntakeLawyer covers the full intake lifecycle: lead management, in-app SMS and email with threaded replies, in-browser voice calling, automated follow-up workflows, an embeddable intake chatbot for firm websites, built-in e-signature document collection, and Stripe subscription billing — all in one place.</p>
          </div>
        </div>

        {/* Full-width: leads page UI */}
        <div className="il-full-img">
          <img src={intakeLawyerLeads} alt="Intake Lawyer — leads table" className="il-full-img-el" style={{ objectPosition: 'top' }} />
        </div>

        {/* Split 2: communication system */}
        <div className="il-split">
          <div className="il-split-lede">
            <p>Every call, SMS, and email — one live feed, two email providers.</p>
          </div>
          <div className="il-split-body">
            <p>The lead page communication panel is a chronological card stack of every call, text, and email tied to that lead, with per-channel filtering. Users send outbound SMS, make in-browser calls via the Twilio Voice SDK, and compose email — all without leaving the lead page. Incoming messages surface in real time.</p>
            <p>Email supports both Gmail and Microsoft accounts via dual-provider OAuth. Threading is bidirectional: outbound emails and replies group under a single anchor card. When a lead writes back, their reply appears inline under the sent message, not as a disconnected card. Clicking Reply opens an inline compose box pre-filled with the correct Re: subject, sent with proper RFC 2822 In-Reply-To headers so everything threads in the lead's inbox too.</p>
          </div>
        </div>

        {/* Branding grid: icon on gradient + logo on light */}
        <div className="il-img-grid">
          <div className="il-brand-card il-brand-card--gradient">
            <img src={intakeLawyerIcon} alt="Intake Lawyer app icon" className="il-brand-icon" />
          </div>
          <div className="il-brand-card il-brand-card--light">
            <img src={intakeLawyerLogo} alt="Intake Lawyer logo" className="il-brand-logo-display" />
          </div>
        </div>

        {/* Full-width: chatbot overview */}
        <div className="il-full-img">
          <img src={intakeLawyerChatbot} alt="Intake Lawyer — chatbot" className="il-full-img-el" style={{ objectPosition: 'top' }} />
        </div>

        {/* Side-by-side: lead page + info tab — click to zoom at cursor */}
        <div className="il-img-grid">
          <div
            className={`il-zoom-wrap${zoomed === 'lead' ? ' il-zoom-wrap--active' : ''}`}
            onClick={() => setZoomed(zoomed === 'lead' ? null : 'lead')}
            onMouseMove={(e) => trackOrigin(e, leadImgRef, zoomed === 'lead')}
          >
            <img
              ref={leadImgRef}
              src={intakeLawyerLeadPage}
              alt="Lead page"
              className={`il-zoom-img${zoomed === 'lead' ? ' il-zoom-img--in' : ''}`}
            />
          </div>
          <div
            className={`il-zoom-wrap${zoomed === 'info' ? ' il-zoom-wrap--active' : ''}`}
            onClick={() => setZoomed(zoomed === 'info' ? null : 'info')}
            onMouseMove={(e) => trackOrigin(e, infoImgRef, zoomed === 'info')}
          >
            <img
              ref={infoImgRef}
              src={intakeLawyerInfoTab}
              alt="Lead information tab"
              className={`il-zoom-img${zoomed === 'info' ? ' il-zoom-img--in' : ''}`}
            />
          </div>
        </div>

        {/* Split 3: engineering */}
        <div className="il-split">
          <div className="il-split-lede">
            <p>Production-grade engineering — built end-to-end with no shortcuts.</p>
          </div>
          <div className="il-split-body">
            <p>The e-signature system is custom-built with pdf-lib — no DocuSign or PandaDoc. Every signed document gets a court-compliant audit trail appended as a final PDF page. The embeddable chatbot widget runs in a Shadow DOM so it can mount on any third-party site without CSS bleed. Automated follow-up workflows run through an async engine backed by a DB-scheduled delay system, not cron jobs.</p>
            <p>The architecture is multi-tenant with org-scoped authorization — every query is scoped to the firm. Stripe handles subscription billing with usage limits enforced per plan tier. The OAuth callback flow handles popup and same-tab redirect cases differently, using sessionStorage to return users to exactly the lead page they came from after re-authenticating.</p>
          </div>
        </div>

        {/* Stack */}
        <div className="il-section">
          <span className="section-label" style={{ textAlign: 'center' }}>Stack</span>
          <div className="il-stack-groups">
            {[
              {
                label: 'Frontend',
                items: [
                  { name: 'React 18',     icon: 'https://cdn.simpleicons.org/react' },
                  { name: 'Vite',         icon: 'https://cdn.simpleicons.org/vite' },
                  { name: 'React Router', icon: 'https://cdn.simpleicons.org/reactrouter' },
                ],
              },
              {
                label: 'Backend',
                items: [
                  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs' },
                  { name: 'Express', icon: 'https://cdn.simpleicons.org/express/555555' },
                ],
              },
              {
                label: 'Database',
                items: [
                  { name: 'Supabase',   icon: 'https://cdn.simpleicons.org/supabase' },
                  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql' },
                ],
              },
              {
                label: 'Integrations',
                items: [
                  { name: 'Gmail API',       icon: 'https://cdn.simpleicons.org/gmail' },
                  { name: 'Microsoft Graph', icon: 'https://cdn.simpleicons.org/microsoftgraph' },
                  { name: 'Twilio',          icon: 'https://cdn.simpleicons.org/twilio/F22F46' },
                  { name: 'Stripe',          icon: 'https://cdn.simpleicons.org/stripe' },
                ],
              },
              {
                label: 'Infrastructure',
                items: [
                  { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/000000' },
                  { name: 'Render', icon: 'https://cdn.simpleicons.org/render' },
                ],
              },
              {
                label: 'Libraries',
                items: [
                  { name: 'pdf-lib', icon: null },
                ],
              },
            ].map(({ label, items }) => (
              <div key={label} className="il-stack-group">
                <span className="il-stack-group-label">{label}</span>
                <div className="il-stack-icons">
                  {items.map(({ name, icon }) => (
                    <StackIcon key={name} name={name} icon={icon} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="il-cta">
          <a
            href="https://intakelawyer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button live-button"
          >
            Visit intakelawyer.com →
          </a>
        </div>

        <div className="related-projects">
          <h2>More Work</h2>
          <div className="related-grid">
            {projectsData
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map(p => (
                <Link key={p.id} to={`/projects/${p.slug}`} className="related-card">
                  <img src={p.logoCard ? intakeLawyerLogo : p.image} alt={p.title} className={p.logoCard ? 'related-card-img--logo' : ''} />
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

function ItsGonnaBeOkayDetail({ project }) {
  const [currentStill, setCurrentStill] = useState(0)
  const stills = [filmStill1, filmStill2, filmStill3, filmStill4]
  const prev = () => setCurrentStill(i => (i - 1 + stills.length) % stills.length)
  const next = () => setCurrentStill(i => (i + 1) % stills.length)

  return (
    <div className="il-detail">
      <div className="il-container">
        <Link to="/projects" className="back-link">← Back to Work</Link>

        <div className="il-header">
          <div>
            <img src={igboTitleImg} alt={project.title} className="igbo-title-img" />
          </div>
          <div className="il-meta-table">
            <div className="il-meta-row"><span>Type</span><span>Short Film</span></div>
            <div className="il-meta-row"><span>Role</span><span>{project.role}</span></div>
            <div className="il-meta-row"><span>Duration</span><span>{project.duration}</span></div>
            <div className="il-meta-row"><span>Year</span><span>{project.year}</span></div>
            <div className="il-meta-row"><span>Category</span><span>{project.category}</span></div>
          </div>
        </div>

        {/* Hero — YouTube embed */}
        <div className="il-hero">
          <div className="video-embed-wrapper" style={{ marginBottom: 0, borderRadius: 0 }}>
            <iframe
              src={`https://www.youtube.com/embed/${project.videoId}`}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Split — synopsis */}
        <div className="il-split">
          <div className="il-split-lede">
            <p>A surreal reckoning with self-worth — where the darkest versions of yourself can either destroy you or set you free.</p>
          </div>
          <div className="il-split-body">
            <p>{project.description}</p>
          </div>
        </div>

        {/* Film stills carousel */}
        <div className="igbo-stills">
          <span className="section-label">Film Stills</span>
          <div className="igbo-stills-viewer">
            <img
              src={stills[currentStill]}
              alt={`Film still ${currentStill + 1}`}
              className="igbo-stills-hero"
            />
            <button className="igbo-stills-btn igbo-stills-btn--prev" onClick={prev}>&#8592;</button>
            <button className="igbo-stills-btn igbo-stills-btn--next" onClick={next}>&#8594;</button>
            <span className="igbo-stills-counter">{currentStill + 1} / {stills.length}</span>
          </div>
          <div className="igbo-stills-thumbs">
            {stills.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Still ${i + 1}`}
                onClick={() => setCurrentStill(i)}
                className={`igbo-stills-thumb${i === currentStill ? ' igbo-stills-thumb--active' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* BTS scattered photos */}
        <div className="igbo-bts">
          <span className="section-label">Behind the Scenes</span>
          <div className="igbo-bts-scatter">
            <img src={btsPhoto1} alt="BTS 1" className="igbo-bts-photo igbo-bts-photo--1" />
            <img src={btsPhoto2} alt="BTS 2" className="igbo-bts-photo igbo-bts-photo--2" />
            <img src={btsPhoto3} alt="BTS 3" className="igbo-bts-photo igbo-bts-photo--3" />
          </div>
        </div>

        {/* Themes */}
        {project.themes && project.themes.length > 0 && (
          <div className="il-section">
            <span className="section-label">Themes</span>
            <div className="themes-list">
              {project.themes.map(theme => (
                <span key={theme} className="theme-tag">{theme}</span>
              ))}
            </div>
          </div>
        )}

        <div className="il-cta">
          <a
            href={project.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button live-button"
          >
            Watch on YouTube →
          </a>
        </div>

        <div className="related-projects">
          <h2>More Work</h2>
          <div className="related-grid">
            {projectsData
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map(p => (
                <Link key={p.id} to={`/projects/${p.slug}`} className="related-card">
                  <img src={p.logoCard ? intakeLawyerLogo : p.image} alt={p.title} className={p.logoCard ? 'related-card-img--logo' : ''} />
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

function HuskythonDetail({ project }) {
  const [currentStill, setCurrentStill] = useState(0)
  const stills = [huskyStill1, huskyStill2, huskyStill3, huskyStill4, huskyStill5]
  const prev = () => setCurrentStill(i => (i - 1 + stills.length) % stills.length)
  const next = () => setCurrentStill(i => (i + 1) % stills.length)

  return (
    <div className="il-detail">
      <div className="il-container">
        <Link to="/projects" className="back-link">← Back to Work</Link>

        <div className="il-header">
          <div>
            <h1 className="il-title">{project.title}</h1>
          </div>
          <div className="il-meta-table">
            <div className="il-meta-row"><span>Type</span><span>Promotional Video</span></div>
            <div className="il-meta-row"><span>Role</span><span>{project.role}</span></div>
            <div className="il-meta-row"><span>Duration</span><span>{project.duration}</span></div>
            <div className="il-meta-row"><span>Year</span><span>{project.year}</span></div>
            <div className="il-meta-row"><span>Client</span><span>UConn Huskython</span></div>
          </div>
        </div>

        <div className="il-hero">
          <div className="video-embed-wrapper" style={{ marginBottom: 0, borderRadius: 0 }}>
            <iframe
              src={`https://www.youtube.com/embed/${project.videoId}`}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="il-split">
          <div className="il-split-lede">
            <p>12 hours. Thousands of students. One mission — the kids.</p>
          </div>
          <div className="il-split-body">
            <p>{project.description}</p>
          </div>
        </div>

        <div className="husky-impact">
          <span className="section-label">Impact</span>
          <div className="husky-impact-number">$1,736,591.22</div>
          <p className="husky-impact-context">raised in 2024 for Connecticut Children's Medical Center in Hartford, CT — providing toys, supplies, and experiences for children living with terminal and chronic illnesses.</p>
          <div className="husky-impact-sub">
            <div className="husky-impact-sub-item">
              <span className="husky-impact-sub-value">12 Hours</span>
              <span className="husky-impact-sub-label">Dance Marathon</span>
            </div>
            <div className="husky-impact-sub-item">
              <span className="husky-impact-sub-value">UConn</span>
              <span className="husky-impact-sub-label">University of Connecticut</span>
            </div>
            <div className="husky-impact-sub-item">
              <span className="husky-impact-sub-value">2024</span>
              <span className="husky-impact-sub-label">Year</span>
            </div>
          </div>
        </div>

        <div className="il-section">
          <span className="section-label">The Story</span>
          <div className="husky-story">
            <p>Produced in coordination with the Huskython organization and Connecticut Children's Medical Center, this film had one goal: put a human face on what fundraising actually means. Working alongside both organizations, I arranged and conducted real, unscripted interviews with the students who make it happen, CCMC staff, and the people whose lives have been shaped by it.</p>
            <p>Three stories anchored the film. The student organizers — the ones who spend a full year quietly coordinating every detail of Huskython, building the event that raises millions year after year. A Huskython Miracle Child living with muscular dystrophy, who shared how Huskython's support and the hope it gave her growing up inspired her to dream of attending UConn — so she could one day create that same feeling for the next generation of kids who need it. And a current UConn student working on Huskython today who, years earlier, was a child at CCMC himself — someone who once benefited from those very donations, and now shows up every year to give back.</p>
          </div>
        </div>

        <div className="igbo-stills">
          <span className="section-label">Event Stills</span>
          <div className="igbo-stills-viewer">
            <img src={stills[currentStill]} alt={`Event still ${currentStill + 1}`} className="igbo-stills-hero" />
            <button className="igbo-stills-btn igbo-stills-btn--prev" onClick={prev}>&#8592;</button>
            <button className="igbo-stills-btn igbo-stills-btn--next" onClick={next}>&#8594;</button>
            <span className="igbo-stills-counter">{currentStill + 1} / {stills.length}</span>
          </div>
          <div className="igbo-stills-thumbs">
            {stills.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Still ${i + 1}`}
                onClick={() => setCurrentStill(i)}
                className={`igbo-stills-thumb${i === currentStill ? ' igbo-stills-thumb--active' : ''}`}
              />
            ))}
          </div>
        </div>

        {project.themes && project.themes.length > 0 && (
          <div className="il-section">
            <span className="section-label">Themes</span>
            <div className="themes-list">
              {project.themes.map(theme => (
                <span key={theme} className="theme-tag">{theme}</span>
              ))}
            </div>
          </div>
        )}

        <div className="il-cta">
          <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="cta-button live-button">
            Watch on YouTube →
          </a>
        </div>

        <div className="related-projects">
          <h2>More Work</h2>
          <div className="related-grid">
            {projectsData.filter(p => p.id !== project.id).slice(0, 3).map(p => (
              <Link key={p.id} to={`/projects/${p.slug}`} className="related-card">
                <img src={p.logoCard ? intakeLawyerLogo : p.image} alt={p.title} className={p.logoCard ? 'related-card-img--logo' : ''} />
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
            <Link to="/projects" className="back-link">← Back to Work</Link>
          </div>
        </div>
      </div>
    )
  }

  if (project.slug === 'huskython') return <HuskythonDetail project={project} />
  if (project.slug === 'its-gonna-be-okay') return <ItsGonnaBeOkayDetail project={project} />
  if (project.slug === 'intake-lawyer') return <IntakeLawyerDetail project={project} />
  return <WebDetail project={project} />
}
