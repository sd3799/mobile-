import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';                             

const Navbar = () => (
  <header className="navbar">
    <div className="navbar__brand">
      <Link to="/">
        <img src={logo} alt="ANDI Logo" className="navbar__logo" />
      </Link>
    </div>

    <nav className="navbar__links">
      {['/', '/about', '/services', '/products', '/career', '/contact'].map(path => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            isActive ? 'navbar__link active' : 'navbar__link'
          }
          end={path === '/'}
        >
          {path === '/' ? 'Home' : path.replace('/', '').replace(/^\w/,
            c => c.toUpperCase())}
        </NavLink>
      ))}
    </nav>
  </header>
);

export default Navbar;
