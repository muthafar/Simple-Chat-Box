import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="main-navbar">
        <ul className="nav-list-items">
          <li>
            <a href="#" className="nav-link">
              Hi <strong>Guest!</strong>
            </a>
          </li>
          <li>
            <img
              className="nav-img"
              src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/19216622/000115.jpg"
              alt="Guest photo"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
