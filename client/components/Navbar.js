import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/signUp">Sign up</Link>
      <Link to="/logout">Log out</Link>
    </div>
  );
};

export default Navbar;
