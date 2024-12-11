import React from "react";
import "./Header.css";
import logo from '../images/z blue logo.jpg'; // Ensure proper naming conventions

const Header = ({ userName = "Guest User", profilePicture = "placeholder.jpg" }) => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <input
          type="text"
          className="search-bar"
          placeholder="Search in services, startups, etc..."
          aria-label="Search"
        />
      </div>
      <div style={{
  backgroundColor: "#1E90FF",
  width: "500px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderTopLeftRadius: "40px",
  borderTopRightRadius: "40px",
  height: "100%", // Ensure the div spans the full height
  position: "relative", // Allow positioning adjustments
  marginBottom:"-13px"
}}>
  <nav className="nav-menu" >
    <a href="/" className="nav-item active" aria-current="page">Home</a>
    <a href="/blog" className="nav-item">Blog</a>
    <a href="/club" className="nav-item">Club</a>
    <a href="/about-us" className="nav-item">About Us</a>
  </nav>
</div>


      <div className="header-right">
        <span className="user-name">{userName}</span>
        <img
          src={profilePicture}
          alt={`${userName}'s Profile`}
          className="profile-picture"
        />
      </div>
    </header>
  );
};

export default Header;
