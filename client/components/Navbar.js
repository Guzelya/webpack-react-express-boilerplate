import React, { useContext } from "react";
import { LoggedInContext } from "../context/LoggedInContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { authenticated, setAuthenticated } = useContext(LoggedInContext);
  // const authenticated = true;
  console.log("authenticated from navbar", authenticated);
  return (
    <div style={{ backgroundColor: "#e6f7ff" }}>
      {/* <Link to="/" style={{ position: "relative", top: 25, left: 10 }}>
        HOME
      </Link> */}

      <div
        style={{
          // flex: 1,
          display: "flex",
          // backgroundColor: "#e6f7ff",
          // marginLeft: "70%",
          padding: "1%",
          // backgroundColor: "#d7d7da",
          // marginRight: "10%",
          // flexDirection: "row-reverse",
          // alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {/* {authenticated ? (
          <Link to="/" style={{ marginRight: "5%" }}>
            Home
          </Link>
        ) : null} */}
        <Link
          to="/"
          style={{ position: "absolute", left: "6%", fontWeight: "bold" }}
        >
          HOME
        </Link>
        {/* <Link to="/login" style={{ marginRight: "3%" }}>
          Login
        </Link>
        <Link to="/signUp" style={{ marginRight: "3%" }}>
          Register
        </Link> */}
        {authenticated ? (
          // <div>
          <>
            <Link to="/auth" style={{ marginRight: "3%" }}>
              Auth
            </Link>
            <Link to="/logout" style={{ marginRight: "3%" }}>
              Log out
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" style={{ marginRight: "3%" }}>
              Login
            </Link>
            <Link to="/signUp" style={{ marginRight: "3%" }}>
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
