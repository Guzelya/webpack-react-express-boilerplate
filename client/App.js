import React from "react";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Logout from "./components/Logout";

const App = () => {
  return (
    // <HashRouter>
    <Router>
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
      <Route exact path="/">
        <Home />
      </Route>
      <Link to="/login">Login</Link>
      {/* <Route exact path="/logout" component={Logout} /> */}
      {/* </Switch> */}
      {/* </div> */}
    </Router>
    // </HashRouter>
  );
};

export default App;
