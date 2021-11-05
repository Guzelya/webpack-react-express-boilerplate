import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
// import { isLogin } from "../utils";
import { LoggedInContext } from "../context/LoggedInContext";
import ProtectedRoutes from "./ProtectedRoute";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { authenticated, setAuthenticated } = useContext(LoggedInContext);
  console.log("inside of a public route", location);
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
        authenticated && restricted ? (
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
