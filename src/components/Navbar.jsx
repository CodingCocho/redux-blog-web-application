import './styles/Navbar.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="Navbar">
        <section 
        className="component"
        >
          <NavLink
          className="unactive-link"
          to="/"
          >
            Home 
          </NavLink>
          {/* <NavLink
          className={ ({isActive}) => isActive ? "active-link" : "unactive-link"}
          to="/a"
          >
            Link 2 
          </NavLink>
          <NavLink
          className={ ({isActive}) => isActive ? "active-link" : "unactive-link"}
          to="/b"
          >
            Link 3 
          </NavLink> */}
        </section>
    </div>
  )
}
