import React, { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  console.log("params in location in auth", location);
  const { email } = location.state.params;
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get(`api/home`);
  //     console.log("result", result);
  //   };
  //   fetchData();
  // }, []);
  // console.log("find props", this.props.history);
  return (
    <div>
      <p>You have successfully registered!</p>
      <p> welcome to home page {email}</p>
    </div>
  );
};

export default Auth;
