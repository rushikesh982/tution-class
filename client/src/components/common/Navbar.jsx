import React from "react";
import '../../assets/css/Navbar.css';
import { NavLink } from "react-router-dom";

function Navbar() {
  function toggleMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    if (menu) {
      menu.classList.toggle("active");
    }
  }
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">
            Excellence Academy
          </a>
          <ul className="nav-menu">
            <li>
              <NavLink to="/" className="nav-link active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/courses" className="nav-link active">
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink to="/batch-timings" className="nav-link active">
                Batch Timings
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link active">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link active">
                Contact
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/login" className="nav-link active">
                Login
              </NavLink>
            </li> */}
          </ul>
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>☰</button>
        </div>

        <div className="mobile-menu" id="mobile-menu">
          <NavLink to="/" className="mobile-nav-link" onClick={toggleMobileMenu}>
            Home
          </NavLink>
          <NavLink to="/courses" className="mobile-nav-link" onClick={toggleMobileMenu}>
            Courses
          </NavLink>
          <NavLink to="/batch-timings" className="mobile-nav-link" onClick={toggleMobileMenu}>
            Batch Timings
          </NavLink>
          <NavLink to="/about" className="mobile-nav-link" onClick={toggleMobileMenu}>
            About Us
          </NavLink>
          <NavLink to="/contact" className="mobile-nav-link" onClick={toggleMobileMenu}>
            Contact
          </NavLink>
          <NavLink to="/login" className="mobile-nav-link" onClick={toggleMobileMenu}>
            Login
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
