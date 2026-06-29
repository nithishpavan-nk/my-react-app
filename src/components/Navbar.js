import React, { useState } from 'react';
import Logo from '../assets/pizzaLogo.png';
import { Link, NavLink } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks((prev) => !prev);
  };

  const closeNavbar = () => {
    setOpenLinks(false);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className='navbar'>
      <div className='leftSide'>
        <Link to="/" onClick={closeNavbar} className="brandLink">
          <img src={Logo} alt="Nithish Pizzeria logo" />
          <span className="brandName">Nithish Pizzeria</span>
        </Link>
      </div>

      <div className='rightSide'>
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => isActive ? "navLink active" : "navLink"}
          >
            {link.label}
          </NavLink>
        ))}
        <button
          className="navToggle"
          onClick={toggleNavbar}
          aria-label={openLinks ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={openLinks}
        >
          {openLinks ? <CloseIcon /> : <ReorderIcon />}
        </button>
      </div>

      <div className={`mobileMenu ${openLinks ? "open" : ""}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={closeNavbar}
            className={({ isActive }) => isActive ? "navLink active" : "navLink"}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
