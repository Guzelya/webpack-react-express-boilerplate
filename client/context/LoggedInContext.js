import React, { useState, createContext } from "react";

export const LoggedInContext = createContext();

export const LoggedInContextProvider = (props) => {
  const [authenticated, setAuthenticated] = useState(false);
  console.log("authenticated from context", authenticated);
  return (
    <LoggedInContext.Provider
      value={{
        authenticated,
        setAuthenticated,
      }}
    >
      {props.children}
    </LoggedInContext.Provider>
  );
};
