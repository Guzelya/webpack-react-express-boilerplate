import React, { useState, useContext, useEffect } from "react";
import { useHistory, Redirect, useLocation, Link } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";
import { withRouter } from "react-router";
import { LoggedInContext } from "../context/LoggedInContext";
import { GoogleLogin } from "react-google-login";
import { tt } from "trusted-types";
// import { Redirect } from "react-router-dom";
// require("dotenv").config();
// import { config } from "dotenv";
import Auth from "./Auth";
// config();

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
  const onGoogleSuccess = async (response) => {
    console.log("response in google", response);
    console.log("access token", response.accessToken);
    const { accessToken } = response;
    try {
      await axios.post(`api/auth/google`, { accessToken });
      console.log("result in protected routes");
      // if (mounted) {
      // if (result.status === 200) {
      //   setAuthenticated(true);
      //   // <Redirect to="/auth" />;
      //   // setLoggedIn(true);
      //   // newValue = true;
      //   // console.log("do we get here?", result.status, newValue);
      //   return result;
      // }
      // }
    } catch (err) {
      console.log("not logged in", error);
    }
  };
  const onGoogleFailure = (response) => {
    console.log(" failure to login", response);
  };
  const callGoogleOauth = async () => {
    // const headers = {
    //   "Content-Type": "text/plain",
    // };
    // const headers = {
    //   "Content-Type": "application/json;charset=UTF-8",
    //   "Access-Control-Allow-Origin": "*",
    // };
    try {
      // window.open("http://localhost:3002/api/auth/google", "_self");
      await axios.get(
        `api/auth/google`
        // { headers }
        // headers: {
        //   "Access-Control-Allow-Origin": "*",
        //   "Access-Control-Allow-Headers": "*",
        //   "Access-Control-Allow-Methods": "*",
        // },
      );
      // console.log("result for google oauth2", result);
    } catch (err) {
      console.log("failued to connect to OAuth2", err);
      return err;
    }
  };
  const callGoogleOauth1 = () => {
    window.open("http://localhost:3002/api/auth/google", "_self");
    // if (window.trustedTypes && trustedTypes.createPolicy) {
    //   // Feature testing
    //   const myPolicy = trustedTypes.createPolicy("myPolicy", {
    //     createHTML: (string) => string.replace(/\</g, "&lt;"),
    //   });
    //   myPolicy.createHTML(
    //     window.open("http://localhost:3002/api/auth/google", "_self")
    //   );w
    //   DOMPurify.sanitize(
    //     window.open("http://localhost:3002/api/auth/google", "_self")
    //   );
    // }
    // return window.open("http://localhost:3002/api/auth/google", "_self");
    // // let clean = DOMPurify.sanitize(window);
    // return (
    //   <p
    //     dangerouslySetInnerHTML={{
    //       __html: DOMPurify.sanitize(
    //         window.open("http://localhost:3002/api/auth/google", "_self")
    //       ),
    //     }}
    //   ></p>
    // );
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
      <h1>Google Oauth Sign In</h1>
      {/* <GoogleLogin
        clientId={process.env.GOOGLE_CLIENT_ID}
        buttonText="Sign in with Google"
        onSuccess={onGoogleSuccess}
        onFailure={onGoogleFailure}
        cookiePolicy={"single_host_origin"}
        className="google-login-button"
        // SameSite="None"
        // SameSite="Strict"
      /> */}
      <button onClick={callGoogleOauth1}>google login</button>

      {/* <a href="http://localhost:3002/api/auth/google">Log in to google</a> */}
    </div>
  );
};

export default Login;
