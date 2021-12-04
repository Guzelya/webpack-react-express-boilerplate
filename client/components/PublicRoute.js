import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";
// import { isLogin } from "../utils";
import { LoggedInContext } from "../context/LoggedInContext";
import ProtectedRoutes from "./ProtectedRoute";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { authenticated, setAuthenticated } = useContext(LoggedInContext);
  console.log("inside of a public route", authenticated);
  useEffect(async () => {
    // let mounted = true;
    try {
      const result = await axios.get(`api/login`);
      console.log("result in protected routes", result.status);
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
  }, []);
  //   if (!authenticated) {
  //     return <Route {...rest} render={(props) => <Component {...props} />} />;
  //   }
  //   if (authenticated && location.pathname === "/login") {
  //     return <Redirect to="/auth" />;
  //   }
  //   if (authenticated && location.pathname !== "/login") {
  //     return <ProtectedRoutes />;
  //   }
  return (
    <Route
      {...rest}
      render={(props) =>
        // console.log('props in public route', props)props.location.pathname === "/login"
        authenticated ? (
          //   console.log("props in public route", props, rest)
          <Redirect to="/auth" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
