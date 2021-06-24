import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Auth from "./components/Auth";
import Logout from "./components/Logout";
import Home from "./components/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/auth" component={Auth} />
      <Route path="/logout" component={Logout} />
    </Switch>
  );
};

export default withRouter(Routes);
