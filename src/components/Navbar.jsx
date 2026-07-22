import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <aside className="sidebar-nav">
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/create">Create a Crewmate!</NavLink></li>
        <li><NavLink to="/gallery">Crewmate Gallery</NavLink></li>
      </ul>
    </aside>
  )
}

export default Navbar
