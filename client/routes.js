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
import { LoggedInContext } from "./context/LoggedInContext";

const Routes = () => {
  const { authenticated, setAuthenticated } = useContext(LoggedInContext);
  // useEffect(async () => {
  //   // let mounted = true;
  //   try {
  //     const result = await axios.get(`api/login`);
  //     console.log("result in Login", result.status);
  //     // if (mounted) {
  //     if (result.status === 200) {
  //       setAuthenticated(true);
  //       // <Redirect to="/auth" />;
  //       // setLoggedIn(true);
  //       // newValue = true;
  //       // console.log("do we get here?", result.status, newValue);
  //       return result;
  //     }
  //     // }
  //   } catch (err) {
  //     console.log("not logged in", error);
  //   }
  //   // return () => {
  //   //   mounted = false;
  //   // };
  // }, []);
  return (
    // <Switch>
    //   <Route exact path="/" component={Home} />
    //   <Route path="/signup" component={SignUp} />
    //   <Route path="/login" component={Login} />
    //   <Route path="/auth" component={Auth} />
    //   <Route path="/logout" component={Logout} />
    // </Switch>
    <Switch>
      <PublicRoute restricted={true} component={Home} exact path="/" />
      <PublicRoute restricted={true} component={Login} exact path="/login" />
      <PublicRoute restricted={true} component={SignUp} exact path="/signup" />
      <PrivateRoute component={Auth} exact path="/auth" />
      <PrivateRoute component={Logout} exact path="/logout" />
    </Switch>
  );
};

export default withRouter(Routes);
