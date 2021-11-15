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
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("we are in the ");
    try {
      console.log("inside the try in login");
      const response = await axios.post(`/api/login`, {
        username,
        password,
      });
      console.log("response in login", response);
      if (response.status === 200) {
        // history.push("/auth", { params: response.data });
        setUserInfo(true);
        setAuthenticated(true);
      }
      if (err.response.status === 401) {
        console.log("401");
        setLoginError(err.response.status);
      }
      setUserInfo(response);
    } catch (err) {
      return err;
    }
  };
  const sendEmail = async (e) => {
    e.preventDefault();
    console.log("sending email");
    try {
      console.log("inside the try in send email");
      const response = await axios.post(`/api/reset-password`, {
        email,
        password,
      });
      console.log("response in sendEmail", response);
      // if (response.status === 200) {
      //   // history.push("/auth", { params: response.data });
      //   setUserInfo(true);
      //   setAuthenticated(true);
      // }
      // if (err.response.status === 401) {
      //   console.log("401");
      //   setLoginError(err.response.status);
      // }
      // setUserInfo(response);
    } catch (err) {
      return err;
    }
  };
  return (
    <div>
      <h1>please login</h1>
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
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" onClick={handleLogin}>
          login returning user
        </button>
      </form>
      <p>forgot your password?</p>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={sendEmail}>reset password</button>
    </div>
  );
};

export default Login;
