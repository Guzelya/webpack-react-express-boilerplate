import React, { useState, useContext } from "react";
import { useHistory, Redirect, useLocation } from "react-router-dom";
import axios from "axios";
import { LoggedInContext } from "../context/LoggedInContext";

const Logout = () => {
  const history = useHistory();
  const [loggedOut, setLoggedOut] = useState(false);
  const { authenticated, setAuthenticated } = useContext(LoggedInContext);
  const logoutFunction = async () => {
    const result = await axios.get(`api/logout`);
    console.log("result", result);
    if (result) {
      // return <h1>logged out just now!</h1>;
      setLoggedOut(true);
      setAuthenticated(false);
    }
  };

  return (
    <div>
      {loggedOut ? (
        <h1>you're logged out</h1>
      ) : (
        <div>
          <p>Logout</p>
          <button onClick={logoutFunction}>please logout</button>
        </div>
      )}
    </div>
  );
};

export default Logout;
