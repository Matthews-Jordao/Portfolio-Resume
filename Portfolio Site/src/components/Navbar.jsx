import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-circle">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
