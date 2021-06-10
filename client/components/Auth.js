import React, { useEffect } from "react";
import axios from "axios";

const Auth = () => {
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`api/login/auth`);
      console.log("result", result);
    };
    fetchData();
  }, []);
  return (
    <div>
      <p>Auth</p>
    </div>
  );
};

export default Auth;
