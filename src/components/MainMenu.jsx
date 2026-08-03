import { Link } from 'react-router-dom'
import './MainMenu.css'

function MainMenu() {
  return (
    <nav className="main-menu">
      <div className="menu-container">
        <div className="logo">
          <Link to="/">
            <h1>Point of Balance Sports Centre</h1>
          </Link>
        </div>
        <ul className="menu-items">
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default MainMenu
