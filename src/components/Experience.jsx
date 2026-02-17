import { useState } from 'react'
import './Experience.css'

export default function Experience() {
  const [activeTab, setActiveTab] = useState('work')

  const workExperience = [
    {
      title: 'New Business Lead & Digital Content Platform Manager',
      company: 'Haymond Law Firm — Hartford, CT',
      period: 'January 2025 – Present',
      description: [
        'Own and manage firm\'s full digital content ecosystem across website, social media, and streaming platforms',
        'Lead multi-channel campaigns including Google Ads, paid digital placements, and billboard advertising',
        'Manage streaming advertising strategy through Roku Ads Manager and MNTN for targeted OTT/CTV campaigns',
        'Serve as primary liaison with Fox News and ESPN for ad placements and performance reporting',
        'Oversee website design, content publishing, and UX improvements for SEO and lead generation',
        'Built CRM and intake automation systems using HubSpot and Zapier',
        'Increased digital impressions and online engagement by over 500%'
      ]
    },
    {
      title: 'Student Multimedia Producer — University Communications',
      company: 'University of Connecticut — Storrs, CT',
      period: 'May 2023 – May 2025',
      description: [
        'Produced digital content across web and media channels for institutional marketing',
        'Collaborated with cross-functional stakeholders on multimedia asset creation',
        'Authored project briefs and production documentation to streamline workflows',
        'Managed timelines and deliverables within structured content production processes'
      ]
    }
  ]

  const education = [
    {
      title: 'Software Engineering Certificate (Full-Stack)',
      school: 'TripleTen',
      period: 'Graduated February 2026',
      description: [
        'Comprehensive full-stack web development program',
        'Advanced JavaScript, React, and Node.js development',
        'Database design and management with MongoDB and SQL',
        'API development and integration',
        'Software engineering best practices and methodologies',
        'Project-based learning with real-world applications'
      ]
    },
    {
      title: 'BFA, Digital Media & Design',
      school: 'University of Connecticut',
      period: 'Graduated May 2024',
      description: [
        'Bachelor of Fine Arts focused on digital media and design',
        'Multimedia content creation and production',
        'User experience and interface design principles',
        'Creative problem-solving and design thinking',
        'Cross-platform media development and optimization'
      ]
    }
  ]

  const items = activeTab === 'work' ? workExperience : education

  return (
    <section className="experience">
      <div className="experience-container">
        <a 
          href="/src/assets/Resumes/Matthews Jordao Resume 2025.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="resume-button"
          title="View Resume"
        >
          <svg viewBox="0 0 24 24" className="document-icon">
            <path fill="currentColor" d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"/>
          </svg>
        </a>
        
        <div className="experience-tabs">
          <button
            className={`tab-button ${activeTab === 'work' ? 'active' : ''}`}
            onClick={() => setActiveTab('work')}
          >
            Work
          </button>
          <button
            className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>

        <div className="experience-content">
          {items.map((item, index) => (
            <div key={index} className="experience-item">
              <h3>{item.title}</h3>
              <p className="company-school">{item.company || item.school}</p>
              <p className="period">{item.period}</p>
              <div className="description">
                <ul>
                  {Array.isArray(item.description) 
                    ? item.description.map((bullet, bulletIndex) => (
                        <li key={bulletIndex}>{bullet}</li>
                      ))
                    : <li>{item.description}</li>
                  }
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
