import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#e6f7ff", marginBottom: 3 }}>
      <div
        style={{
          marginLeft: "70%",
          padding: "1%",
          // backgroundColor: "#d7d7da",
          // marginRight: "10%",
        }}
      >
        <Link to="/login" style={{ marginRight: "5%" }}>
          Login
        </Link>
        <Link to="/signUp" style={{ marginRight: "5%" }}>
          Sign up
        </Link>
        <Link to="/logout" style={{ marginRight: "5%" }}>
          Log out
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
