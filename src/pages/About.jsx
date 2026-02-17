import './About.css'

export default function About() {
  return (
    <div className="about-page">
      <section className="about-section">
        <div className="section-wrapper">
          <h1 className="page-title">About Me</h1>
          <div className="about-content">
            <div className="about-intro">
              <img 
                src="/images/profile.jpg" 
                alt="Matthews Jordao" 
                className="profile-image"
              />
              <div className="intro-text">
                <p>
                  Hi, I'm Matthews Jordao — a builder at heart who thrives at the intersection of technology, creativity, and real-world problem solving.
                </p>
                <p>
                  On a personal level, I've always been driven by curiosity and the desire to create things that make life easier for others. Whether it's helping a business streamline operations, designing a better user experience, or launching a new digital product, I enjoy turning ideas into tangible solutions.
                </p>
              </div>
            </div>
            
            <div className="photo-grid">
              <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&w=400&h=300&fit=crop" alt="Development workspace" className="about-photo" />
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&w=400&h=300&fit=crop" alt="Web development" className="about-photo" />
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=400&h=300&fit=crop" alt="Business strategy" className="about-photo" />
            </div>
            
            <p>
              I'm someone who values growth, consistency, and community — and I bring that same mindset into both my personal life and professional work. Outside of development, I'm deeply involved in marketing, branding, and entrepreneurship, constantly exploring new ways technology can empower businesses and people alike.
            </p>
            <p>
              As a software engineer, I specialize in building full-stack web applications with a strong focus on usability, performance, and scalability. My development approach blends technical execution with product thinking — meaning I don't just write code, I design solutions. I work primarily with modern JavaScript frameworks and tools, and I'm experienced in creating SaaS platforms, AI-powered tools, and business automation systems.
            </p>
            <p>
              I've built projects ranging from AI voice receptionist platforms and intake CRM systems to review aggregation tools and interactive web applications. These experiences have strengthened my abilities in system architecture, API design, database modeling, and deploying production-ready applications. I'm also comfortable working across the stack — from UI/UX design and frontend engineering to backend logic and infrastructure.
            </p>
            <p>
              What sets me apart is my ability to bridge business needs with technical execution. My background in marketing and operations allows me to think beyond the code and focus on building software that drives measurable impact.
            </p>
            <p>
              I'm young, driven, and constantly learning — always looking for better technologies, smarter workflows, and more efficient ways to solve problems. My goal is simple: build meaningful products, keep improving my craft, and use technology to create real value.
            </p>
            
            <h2>Core Technologies</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend Development</h3>
                <div className="skill-tags">
                  <span>React</span>
                  <span>Next.js</span>
                  <span>JavaScript</span>
                  <span>TypeScript</span>
                  <span>HTML5</span>
                  <span>CSS3</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Backend & Database</h3>
                <div className="skill-tags">
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>PostgreSQL</span>
                  <span>API Design</span>
                  <span>Database Modeling</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Specializations</h3>
                <div className="skill-tags">
                  <span>SaaS Platforms</span>
                  <span>AI Integration</span>
                  <span>Business Automation</span>
                  <span>UI/UX Design</span>
                  <span>System Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
