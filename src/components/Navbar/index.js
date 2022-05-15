import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-md-12 bg-secondary py-1">
      <nav className="navbar bg-secondary navbar-dark justify-content-center">
        <Link to={"/"} className="navbar-brand ml-auto">
          React Redux Contacts Manager
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
