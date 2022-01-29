import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <NavLink to="/" className="navlink logo">
          JustPay
        </NavLink>
        <nav>
          <ul>
            <NavLink to="/" className="navlink">
              Home
            </NavLink>
            <NavLink to="/service" className="navlink">
              Services
            </NavLink>
            <NavLink to="/about" className="navlink">
              About
            </NavLink>
            <NavLink to="/contact" className="navlink">
              Contact
            </NavLink>
            <NavLink to="/register" className="navlink register">
              Sign Up
            </NavLink>
            <NavLink to="/login" className="navlink login">
              Log IN
            </NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
