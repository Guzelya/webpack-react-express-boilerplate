import React from "react";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Logout from "./components/Logout";
import Auth from "./components/Auth";

const App = () => {
  return (
    // <HashRouter>
    // <div>
    <BrowserRouter>
      {/* <div> */}
      {/* <h1>
        Hello world!Jupiter and Mars and Venus and Moon and Uranus and all the
        aliens of the universe!!!!
      </h1> */}
      {/* <Switch> */}
      {/* <Route exact path="/login">
          <Login />
        </Route> */}
      <Route exact path="/login" component={Login} />
      <Link to="/login">Login</Link>
      <Route exact path="/auth" component={Auth} />
      <Link to="/auth">Auth</Link>
      <Route exact path="/">
        <Home />
      </Route>
      {/* <Route exact path="/logout" component={Logout} /> */}
      {/* </Switch> */}
      {/* </div> */}
    </BrowserRouter>
    // </div>
    // </HashRouter>
  );
};

export default App;
