import React, { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  console.log("params in location in auth", location);
  if (location.state) {
    const { email } = location.state.params;
    return (
      <div>
        <p>You have successfully registered!</p>
        <p> welcome to home page {email}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>please login</p>
      </div>
    );
  }
  // const { username } = location.state.params;
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get(`api/auth`);
  //     console.log("result", result);
  //   };
  //   fetchData();
  // }, []);
};

export default Auth;
