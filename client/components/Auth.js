import React from "react";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div>
      <Link to="/profile">See you profile</Link>
      <p>You have successfully registered/logged in!</p>
      <p> welcome to home page</p>
    </div>
  );
};

export default Auth;
