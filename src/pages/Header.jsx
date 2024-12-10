import React from "react";
import "./Header.css";
import logo from '../images/z blue logo.jpg';
const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
      <img src={logo} alt="Logo" className="logo" />
        <input
          type="text"
          className="search-bar"
          placeholder="Search in services, startups, etc..."
        />
      </div>
      <nav className="nav-menu">
        <a href="/" className="nav-item active">Home</a>
        <a href="/blog" className="nav-item">Blog</a>
        <a href="/club" className="nav-item">Club</a>
        <a href="/about-us" className="nav-item">About us</a>
      </nav>
      <div className="header-right">
        <span className="user-name">Kanee Thora</span>
        <img
          src="/path-to-profile-picture.jpg"
          alt="Profile"
          className="profile-picture"
        />
      </div>
    </header>
  );
};

export default Header;
