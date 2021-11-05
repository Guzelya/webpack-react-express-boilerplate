import React, { Suspense, lazy, useContext, useEffect, Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
// import { isLogin } from "../utils";
import { LoggedInContext } from "../context/LoggedInContext";
import Profile from "./Profile";
import Settings from "./Settings";
// import { lazy } from "react";
// import routes from "routes";
// Route list
// import Loader from "sharedComponent/Loader";

const routes = [
  {
    path: "profile",
    component: lazy(() => import("./Profile")),
    exact: true,
  },
  {
    path: "settings",
    // component: lazy(() => import('/Settings')
    exact: true,
  },
];
const ProtectedRoutes = ({ component: Component, restricted, ...rest }) => {
  const { authenticated, setAuthenticated } = useContext(LoggedInContext);
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
  if (authenticated) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } else {
    return <div> you cannot see this page please authenticate</div>;
  }
};

export default ProtectedRoutes;
