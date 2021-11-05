import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
// import { isLogin } from "../utils";
import { LoggedInContext } from "../context/LoggedInContext";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { authenticated, setAuthenticated } = useContext(LoggedInContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated && restricted ? (
          <Redirect to="/auth" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
