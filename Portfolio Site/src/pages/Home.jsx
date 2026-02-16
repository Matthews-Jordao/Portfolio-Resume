import Hero from '../components/Hero'
import Experience from '../components/Experience'
import TechStack from '../components/TechStack'
import FeaturedProjects from '../components/FeaturedProjects'
import AnimatedBackground from '../components/AnimatedBackground'
import './Home.css'

export default function Home() {
  return (
    <div className="home-page">
      <AnimatedBackground />
      <Hero />
      <Experience />
      <TechStack />
      <FeaturedProjects />
    </div>
  )
}
