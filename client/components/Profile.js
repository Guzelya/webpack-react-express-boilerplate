import React from "react";
import { Link } from "react-router-dom";

const Profile = (props) => {
  console.log("props in Profile", props);
  return (
    <div>
      <h1>Welcome to the blood donor's page</h1>
      <p>My name is INSERT NAME HERE</p>
      <Link to="/settings">see your settings</Link>
    </div>
  );
};

export default Profile;
