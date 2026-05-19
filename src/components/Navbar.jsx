import { useState } from "react";
import { navItems } from "../data";
import kiitLogo from "../assets/kiit-logo.png";
import "./Navbar.css";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        {/* Logo */}
        <a href="https://kiit.ac.in" className="nav-logo" target="_blank" rel="noreferrer">
          <img src={kiitLogo} alt="KIIT University Logo" className="nav-logo-img" />
        </a>

        {/* Desktop Links */}
        <div className="nav-links">
          {navItems.map((item) => (
            <div key={item.label} className="nav-item">
              <button className="nav-link">
                {item.label}
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 4l4 4 4-4" />
                </svg>
              </button>
              <div className="mega-menu">
                <div className="mega-menu-grid">
                  {item.children.map((c) => (
                    <a key={c.title} href="#" className="mega-item">
                      <div className="mega-icon">{c.icon}</div>
                      <div className="mega-item-text">
                        <span className="mega-item-title">{c.title}</span>
                        <span className="mega-item-desc">{c.desc}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <a href="#" className="nav-link plain">About</a>
          <a href="#" className="nav-link plain">Placements</a>
        </div>

        {/* CTA + Hamburger */}
        <div className="nav-right">
          <a href="https://kiit.ac.in/admissions" target="_blank" rel="noreferrer" className="nav-cta">
            Apply Now →
          </a>
          <button
            className="hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span style={menuOpen ? { transform: "rotate(45deg) translate(5px, 5px)" } : {}} />
            <span style={menuOpen ? { opacity: 0 } : {}} />
            <span style={menuOpen ? { transform: "rotate(-45deg) translate(5px, -5px)" } : {}} />
          </button>
        </div>
      </div>
    </nav>
  );
}
