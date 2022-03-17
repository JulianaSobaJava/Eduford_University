import React from "react";
import "../../styles/navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../image/logo.png";
import * as Icons from "react-icons/fa";

export default function Navbar() {
  return (
    <header>
      <nav className="menu">
        <Link to="/" className="link">
          <img src={logo} className="logo" alt="" />
        </Link>

        <div className="nav_links" id="nav_link">
          <Icons.FaTimes className="fas" />
          <ul>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li>
              <Link to="/courses" className="link">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/blog" className="link">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Icons.FaBars className="fas" />
      </nav>
    </header>
  );
}
