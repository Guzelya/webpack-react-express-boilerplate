import React, { useEffect, useContext } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { LoggedInContext } from "../context/LoggedInContext";

const Auth = () => {
  const { authenticated, setAuthenticated } = useContext(LoggedInContext);
  // const location = useLocation();
  // console.log("params in location in auth", location);
  // if (location.state) {
  // const { email } = location.state.params;
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`api/auth`);
      console.log("result", result);
    };
    fetchData();
  }, []);
  if (authenticated) {
    return (
      <div>
        <p>You have successfully registered!</p>
        <p> welcome to home page</p>
      </div>
    );
  } else {
    return <div>you're not authenticated</div>;
  }
  // } else {
  //   return (
  //     <div>
  //       <p>please login! it's an auth page</p>
  //     </div>
  //   );
  // }
  // const { username } = location.state.params;
};

export default Auth;
