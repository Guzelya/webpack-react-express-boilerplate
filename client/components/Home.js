import React, { useContext } from "react";
import { LoggedInContext } from "../context/LoggedInContext";

const Home = () => {
  const { authenticated } = useContext(LoggedInContext);
  console.log("authenticated", authenticated);
  return (
    <div>
      <h1>is it hot reloading</h1>
    </div>
  );
};

export default Home;
