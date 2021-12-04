import React, { useEffect, useContext } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Auth from "./components/Auth";
import Logout from "./components/Logout";
import Home from "./components/Home";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import { LoggedInContext } from "./context/LoggedInContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Settings from "./components/Settings";
import Reset_Password from "./components/Reset_Password";

const Routes = () => {
  const { authenticated, setAuthenticated } = useContext(LoggedInContext);
  return (
    // <Switch>
    //   <Route exact path="/" component={Home} />
    //   <Route path="/signup" component={SignUp} />
    //   <Route path="/login" component={Login} />
    //   <Route path="/auth" component={Auth} />
    //   <Route path="/logout" component={Logout} />
    // </Switch>
    <Switch>
      <PublicRoute restricted={false} component={Home} exact path="/" />
      <PublicRoute restricted={true} component={Login} exact path="/login" />
      <PublicRoute restricted={true} component={SignUp} exact path="/signup" />
      <PublicRoute
        restricted={false}
        path="/reset/:password_token"
        // render={(props) => <Reset_Password {...props} />}
        component={Reset_Password}
      />
      {/* <PrivateRoute component={Profile} exact path="/profile" /> */}
      <ProtectedRoute component={Auth} exact path="/auth" />
      <ProtectedRoute component={Logout} exact path="/logout" />
      <ProtectedRoute component={Profile} exact path="/profile" />
      <ProtectedRoute component={Settings} exact path="/settings" />
    </Switch>
  );
};

export default withRouter(Routes);
