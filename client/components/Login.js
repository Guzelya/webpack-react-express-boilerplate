import React, { useState, useContext, useEffect } from "react";
import { useHistory, Redirect, useLocation, Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router";
import { LoggedInContext } from "../context/LoggedInContext";
import { GoogleLogin } from "react-google-login";
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

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("we are in the ");
    try {
      console.log("inside the try in login");
      const response = await axios.post(`/api/auth/google`, {
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
  const onGoogleSuccess = (response) => {
    console.log("response in google", response);
    console.log("access token", response.accessToken);
    // try {
    //   const result = await axios.get(`api/login`);
    //   console.log("result in protected routes", result.status);
    //   // if (mounted) {
    //   if (result.status === 200) {
    //     setAuthenticated(true);
    //     // <Redirect to="/auth" />;
    //     // setLoggedIn(true);
    //     // newValue = true;
    //     // console.log("do we get here?", result.status, newValue);
    //     return result;
    //   }
    //   // }
    // } catch (err) {
    //   console.log("not logged in", error);
    // }
  };
  const onGoogleFailure = (response) => {
    console.log(" failure to login", response);
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
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" onClick={handleLogin}>
          login returning user
        </button>
      </form>
      <h1>Google Oauth Sign In</h1>
      <GoogleLogin
        clientId={
          // "641928958844-eikgjdi2bm7pgkuor5rjv20ovb6r5rfm.apps.googleusercontent.com"
          process.env.GOOGLE_CLIENT_ID
        }
        buttonText="Sign in with Google"
        onSuccess={onGoogleSuccess}
        onFailure={onGoogleFailure}
        cookiePolicy={"single_host_origin"}
        className="google-login-button"
        // SameSite="None"
        // SameSite="Strict"
      />
    </div>
  );
};

export default Login;
