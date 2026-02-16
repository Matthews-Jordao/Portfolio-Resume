import { useState } from 'react'
import './Experience.css'

export default function Experience() {
  const [activeTab, setActiveTab] = useState('work')

  const workExperience = [
    {
      title: 'Full Stack Developer',
      company: 'Tech Company Inc',
      period: '2022 - Present',
      description: 'Building scalable web applications with React and Node.js'
    },
    {
      title: 'Junior Developer',
      company: 'Startup Co',
      period: '2021 - 2022',
      description: 'Developed frontend components and APIs for web applications'
    }
  ]

  const education = [
    {
      title: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      period: '2018 - 2022',
      description: 'Focused on software engineering and web development'
    },
    {
      title: 'Coding Bootcamp',
      school: 'Dev Academy',
      period: '2020 - 2021',
      description: 'Intensive full-stack web development training'
    }
  ]

  const items = activeTab === 'work' ? workExperience : education

  return (
    <section className="experience">
      <div className="experience-container">
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
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
