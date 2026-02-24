import { useState, useRef } from 'react'
import './TechStack.css'
import jsIcon from '../assets/Teck Stack Img/js-svgrepo-com.svg'
import reactIcon from '../assets/Teck Stack Img/react-svgrepo-com.svg'
import nodeIcon from '../assets/Teck Stack Img/node-js-svgrepo-com.svg'
import htmlIcon from '../assets/Teck Stack Img/html-5-svgrepo-com.svg'
import cssIcon from '../assets/Teck Stack Img/css-3-svgrepo-com.svg'
import githubIcon from '../assets/Teck Stack Img/github-color-svgrepo-com.svg'
import viteIcon from '../assets/Teck Stack Img/vitejs-svgrepo-com.svg'
import mongoIcon from '../assets/Teck Stack Img/mongo-svgrepo-com.svg'

export default function TechStack() {
  const [tooltip, setTooltip] = useState({ visible: false, name: '', x: 0, y: 0 })
  const iconRefs = useRef([])

  const technologies = [
    { name: 'JavaScript', icon: jsIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Node.js', icon: nodeIcon },
    { name: 'HTML5', icon: htmlIcon },
    { name: 'CSS3', icon: cssIcon },
    { name: 'GitHub', icon: githubIcon },
    { name: 'Vite', icon: viteIcon },
    { name: 'MongoDB', icon: mongoIcon },
  ]

  const handleMouseEnter = (tech, event, index) => {
    setTooltip({
      visible: true,
      name: tech.name,
      x: event.clientX,
      y: event.clientY - 10
    })
  }

  const handleMouseMove = (event, index) => {
    if (tooltip.visible) {
      setTooltip(prev => ({
        ...prev,
        x: event.clientX,
        y: event.clientY - 10
      }))
    }

    // Mouse-responsive movement
    const iconElement = iconRefs.current[index]
    if (iconElement) {
      const rect = iconElement.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const mouseX = event.clientX
      const mouseY = event.clientY
      
      // Calculate distance and direction from center
      const deltaX = (mouseX - centerX) * 0.3  // Reduce sensitivity
      const deltaY = (mouseY - centerY) * 0.3
      
      // Apply transform
      iconElement.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.1)`
    }
  }

  const handleMouseLeave = (index) => {
    setTooltip({ visible: false, name: '', x: 0, y: 0 })
    
    // Reset icon position
    const iconElement = iconRefs.current[index]
    if (iconElement) {
      iconElement.style.transform = 'translate(0px, 0px) scale(1)'
    }
  }

  return (
    <section className="tech-stack-section">
      <div className="tech-stack-container">
        <h2 className="tech-stack-title">Tech Stack</h2>
        <div className="tech-stack-grid">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="tech-item"
              onMouseEnter={(e) => handleMouseEnter(tech, e, index)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <img 
                ref={(el) => iconRefs.current[index] = el}
                src={tech.icon} 
                alt={tech.name} 
                className="tech-icon"
                draggable="false"
              />
            </div>
          ))}
        </div>
        
        {tooltip.visible && (
          <div 
            className="tech-tooltip"
            style={{
              position: 'fixed',
              left: `${tooltip.x}px`,
              top: `${tooltip.y}px`,
              transform: 'translate(-50%, -100%)',
              pointerEvents: 'none',
              zIndex: 1000
            }}
          >
            {tooltip.name}
          </div>
        )}
      </div>
    </section>
  )
}

