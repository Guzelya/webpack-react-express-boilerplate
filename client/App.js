import React from "react";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Logout from "./components/Logout";
import Auth from "./components/Auth";
import Login from "./components/Login";
import Routes from "./routes";
import Navbar from "./components/Navbar";
import { LoggedInContextProvider } from "./context/LoggedInContext";

const App = () => {
  return (
    <LoggedInContextProvider>
      <div>
        {/* <Navbar /> */}
        <Routes />
      </div>
    </LoggedInContextProvider>
  );
};

export default App;
