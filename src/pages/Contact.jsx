import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const socialLinks = [
    { icon: 'Github', label: 'GitHub', url: '#' },
    { icon: 'Linkedin', label: 'LinkedIn', url: '#' },
    { icon: 'Mail', label: 'Email', url: 'mailto:hello@example.com' }
  ]

  return (
    <div className="contact-page">
      <section className="contact-section">
        <div className="section-wrapper">
          <h1 className="page-title">Get In Touch</h1>
          <p className="contact-intro">
            I'm always open to new opportunities and interesting projects. Feel free to reach out!
          </p>

          <div className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  rows="6"
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>

              {submitted && (
                <div className="success-message">
                  ✓ Message sent successfully!
                </div>
              )}
            </form>

            <div className="contact-info">
              <div className="info-group">
                <h3>Other Ways to Connect</h3>
                <div className="social-links">
                  {socialLinks.map(link => (
                    <a
                      key={link.label}
                      href={link.url}
                      className="social-link"
                      title={link.label}
                    >
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="info-group">
                <h3>Quick Facts</h3>
                <ul className="facts-list">
                  <li>📍 Based in <strong>United States</strong></li>
                  <li>💼 Full-Stack Developer</li>
                  <li>⚡ Available for freelance work</li>
                  <li>🎓 Always learning new technologies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
