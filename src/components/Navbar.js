import React, { useState } from "react";
import { FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css"; // Import CSS for styling

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    // Replace this URL with the link you want to navigate to
    window.location.href = 'https://datadiscover.ai';
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="left-info">
          <span><FaMapMarkerAlt />Tower B, 11th Floor, Spaze IT Tech Park, Gurugram, India</span>
        </div>
        <div className="right-info">
     
      <a href="https://x.com/i/flow/login?redirect_after_login=%2FOn_Meridian" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://www.instagram.com/onmeridian/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/company/on-meridian/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
    </div>
      </div>

      {/* Main Navbar */}
      <nav className="main-nav">
        <div className="logo">
          <h1>DataDiscover.ai</h1>
        </div>
        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#about-section">About Us</a></li>
          <li><a href="#timeline-main">Steps</a></li>
          <li><a href="#why-choose-us">Why Choose Us</a></li>
          <li><a href="#faq-form-section">Contact</a></li>
        </ul>
        <button className="get-started-btn"  onClick={handleClick}>Get Started</button>
      </nav>
    </header>
  );
};

export default Navbar;
