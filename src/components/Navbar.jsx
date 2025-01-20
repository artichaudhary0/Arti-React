import { NavLink } from "react-router-dom";

import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/products">Product</NavLink>
    </nav>
  );
}

export default Navbar;
