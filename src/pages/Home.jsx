import Hero from '../components/Hero'
import Experience from '../components/Experience'
import TechStack from '../components/TechStack'
import FeaturedProjects from '../components/FeaturedProjects'
import './Home.css'

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <TechStack />
      <Experience />
      <FeaturedProjects />
    </div>
  )
}
