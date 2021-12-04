import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";
// import { isLogin } from "../utils";
import { LoggedInContext } from "../context/LoggedInContext";
import Home from "./Home";
import Auth from "./Auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authenticated, setAuthenticated } = useContext(LoggedInContext);
  useEffect(async () => {
    // let mounted = true;
    try {
      const result = await axios.get(`api/login`);
      console.log("result in Login", result.status);
      // if (mounted) {
      if (result.status === 200) {
        setAuthenticated(true);
        // <Redirect to="/auth" />;
        // setLoggedIn(true);
        // newValue = true;
        // console.log("do we get here?", result.status, newValue);
        return result;
      }
      // }
    } catch (err) {
      console.log("not logged in", error);
    }
    // return () => {
    //   mounted = false;
    // };
  }, [authenticated]);
  console.log(
    "authenticate value from private route page",
    authenticated,
    location
  );
  // <Component {...props} />;
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) => {
        console.log("inside route in private routing", authenticated);
        authenticated === true ? <Auth /> : <Home />;
      }}
    />
  );
};

export default PrivateRoute;
