import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { LoggedInContext } from "../context/LoggedInContext";

const Auth = () => {
  const { authenticated, setAuthenticated } = useContext(LoggedInContext);
  // const location = useLocation();
  // console.log("params in location in auth", location);
  // if (location.state) {
  // const { email } = location.state.params;
  const { loggedIn, setLoggedIn } = useState(true);
  // let newValue = false;
  useEffect(async () => {
    try {
      const result = await axios.get(`api/auth`);
      console.log("result in Auth", result.status);
      if (result.status === 200) {
        setAuthenticated(true);
        // setLoggedIn(true);
        // newValue = true;
        // console.log("do we get here?", result.status, newValue);
        return result;
      } else {
        // setLoggedIn(false);
        // newValue = false;
      }
      // if (result) {
      //   console.log("truthy");
      //   setLoggedIn(true);
      //   return (await result).status;
      // } else {
      //   console.log("false");
      // }
      // setLoggedIn(result.status);
      // console.log(loggedIn);
      // if (result.status === 200) {
      //   // localVariable = true;
      // }
    } catch (err) {
      console.log("and here?", err);
      newValue = false;
    }
  }, []);
  // let localVariable = false;
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await axios.get(`api/auth`);
  //       console.log("result in Auth", result);
  //       if (!localVariable) {
  //         if (result.status === 200) {
  //           // setLoggedIn(true);
  //           localVariable = true;
  //         }
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  // const fetchData = async () => {
  //   const result = await axios.get(`api/auth`);
  //   console.log("result", result);
  //   if (!localVariable) {
  //     if (result.status === 200) {
  //       setLoggedIn(true);
  //     }
  //   }
  // };
  // fetchData();
  // return () => {
  //   localVariable = true;
  // };
  // }, []);
  if (authenticated) {
    console.log("newValue1", loggedIn);
    return (
      <div>
        <p>You have successfully registered!</p>
        <p> welcome to home page</p>
      </div>
    );
  } else {
    console.log("newValue2", loggedIn);
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
  // return <div>Welcome home</div>;
};

export default Auth;
