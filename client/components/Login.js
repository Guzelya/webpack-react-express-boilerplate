import React, { useState } from "react";
import { useHistory, Redirect, useLocation } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const [values, setValues] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  //   const doc = this;
  //   console.log("location", location);
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("we are in the ");
    try {
      console.log("inside the try in login");
      const response = await axios.post(`/api/login`, {
        email,
        password,
      });
      console.log("response in login", response);
      if (response) {
        history.push("/auth", { params: response.data });
      }
      //   setUserInfo(response);
      //   console.log("history", history);
    } catch (err) {
      if (err.response.status === 401) {
        console.log("401");
        setLoginError(err.response.status);
      }
      console.log(err);
    }
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
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
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
      {/* <button onClick={newFunction}>hello</button> */}
    </div>
  );
};

export default Login;
