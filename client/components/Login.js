import React, { useState, useContext, useEffect } from "react";
import { useHistory, Redirect, useLocation, Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router";
import { LoggedInContext } from "../context/LoggedInContext";
// import { Redirect } from "react-router-dom";
import Auth from "./Auth";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const [values, setValues] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [userInfo2, setUserInfo2] = useState(null);
  const { authenticated, setAuthenticated } = useContext(LoggedInContext);
  console.log("authenticated value", authenticated);

  // useEffect(async () => {
  //   // let mounted = true;
  //   try {
  //     const result = await axios.get(`api/auth`);
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
  //   const doc = this;
  //   console.log("location", location);
  const checkIfLoggedIn = async () => {
    try {
      const result = await axios.get(`/api/auth`);
      console.log("ressult in useEffect", result);
      setUserInfo2(result);
    } catch (err) {
      console.log("error in useEffect", err);
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("we are in the ");
    // let mounted = true;
    try {
      console.log("inside the try in login");
      const response = await axios.post(`/api/login`, {
        username,
        password,
      });
      console.log("response in login", response);
      // if (mounted) {
      if (response.status === 200) {
        // history.push("/auth", { params: response.data });
        // <Redirect to="/auth" />;

        setUserInfo(true);
        setAuthenticated(true);
        // <Redirect to={{ pathname: "/auth" }} />;
        // return <Redirect to="/auth" />;
      }
      if (err.response.status === 401) {
        console.log("401");
        setLoginError(err.response.status);
      }
      //   console.log(err);
      // }
      // }
      setUserInfo(response);
      // return () => {
      //   mounted = false;
      // };
      //   console.log("history", history);
    } catch (err) {
      //   if (err.response.status === 401) {
      //     console.log("401");
      //     setLoginError(err.response.status);
      //   }
      // console.log(err);
      return err;
    }
  };
  const callRedirect = () => {
    console.log("function was called");
    // return <Redirect to="/auth" />;
    return <Redirect to={{ pathname: "/auth" }} />;
  };
  return (
    <div>
      <h1>please login</h1>
      {/* {messages.error ? messages.error : null} */}
      {loginError ? <p>invalid credentials</p> : null}
      <form>
        <label>
          Email:
          <input
            value={username}
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" onClick={handleLogin}>
          login returning user
        </button>
      </form>
      {/* {authenticated ? <Auth /> : <p>lost its athentication value</p>} */}
      {/* <button type="submit" onClick={checkIfLoggedIn}>
        if logged in
      </button>
      {userInfo2 ? <h4>still logged in</h4> : <h4>not logged in any more</h4>} */}
      <button onClick={callRedirect}>redirect to another page</button>
      <Link to="/auth">to new page!</Link>
      {/* {authenticated ? <Redirect to="/auth" /> : null} */}
      {}
    </div>
  );
};

export default Login;
