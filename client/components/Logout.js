import React from "react";
import { useHistory, Redirect, useLocation } from "react-router-dom";
import axios from "axios";

const Logout = () => {
  const history = useHistory();
  const logoutFunction = async () => {
    const result = await axios.get(`api/logout`);
    console.log("result", result);
    if (result) {
      history.push("/auth");
    }
  };

  return (
    <div>
      <p>Logout</p>
      <button onClick={logoutFunction}>please logout</button>
    </div>
  );
};

export default Logout;
