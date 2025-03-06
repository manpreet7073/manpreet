import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
<header id="header" className="header d-flex align-items-center sticky-top">
  <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
    <Link
      to="/"
      className="logo d-flex align-items-center me-auto me-xl-0"
    >
      <img src="/img/logo.png" alt="" />
    </Link>
    <nav id="navmenu" className="navmenu">
      <ul>
        <li>
          <a href="#hero" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
    <div className="header-social-links">
    <a 
      href="https://www.linkedin.com/in/er-manpreet-singh-0a5a7a192" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="linkedin"
    >
      <i className="bi bi-linkedin" />
    </a>

    </div>
  </div>
</header>

  );
}
