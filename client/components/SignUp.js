import React, { useEffect, useState, useContext } from "react";
import { useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import { LoggedInContext } from "../context/LoggedInContext";

const SignUp = () => {
  const history = useHistory();
  const [values, setValues] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { authenticated, setAuthenticated } = useContext(LoggedInContext);
  const [correctValues, setCorrectValues] = useState(false);
  const [passwordError, setPasswordError] = useState(true);
  const [usernameError, setUsernameError] = useState(true);
  // console.log("history", history);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(`/api/register`);
  //         console.log("response in a list", response.data);
  //         setValues(response.data);
  //         // setRestaurants(response.data.data.restaurants);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     fetchData();
  //   }, []);

  // componentDidMount() {
  //     axios.get(`https://localhost:3002/api/login`)
  //       .then(res => {
  //         console.log('res', res);
  //       })
  //   }
  //   const getResult = async (e) => {
  //     e.preventDefault;
  //     console.log("in function");
  //     try {
  //       const value = await axios.get(`http://localhost:3002/api/login`);
  //       console.log("value", value);
  //     } catch (err) {
  //       console.log("error in login", err);
  //     }
  //   };
  //   console.log("value!!!", getResult());
  //   const newFunction = () => {
  //     // e.preventDefault;
  //     console.log("we are here");
  //   };
  const handleNewUser = async (e) => {
    e.preventDefault();
    console.log("see password", password);
    if (
      /^(?=(.*[a-z]){1,})(?=(.*[!@#$%^&*()\-+_=,.><?/]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})\S+$/.test(
        password
      ) &&
      password.length >= 7 &&
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        username
      )
    ) {
      console.log("both values are correct");
      //   setCorrectValues(true);
      // } else {
      //   console.log("did not work");
      //   setCorrectValues(false);
      // }
      // if (
      //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      //     username
      //   )
      // ) {
      //   console.log("email is correct");
      //   setCorrectValues(true);
      // } else {
      //   console.log("email address is invalid");
      //   setCorrectValues(false);
      // }
      // if (correctValues) {
      //   console.log("correct values indeed", correctValues);
      try {
        console.log("inside the try");
        const response = await axios.post(`/api/register`, {
          username,
          password,
        });
        console.log("response", response);
        // if (response) {
        //   setAuthenticated(true);
        //   history.push("/auth", { params: response.data.username });
        // }
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("one of the values is incorrect");
      if (
        /^(?=(.*[a-z]){1,})(?=(.*[!@#$%^&*()\-+_=,.><?/]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})\S+$/.test(
          password
        ) === false
      ) {
        setPasswordError(false);
      }
      if (
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          username
        ) === false
      ) {
        setUsernameError(false);
      }
    }
  };

  // const newFunction = () => {
  //   // console.log("in new function", email, password);
  //   history.push("/auth");
  // };
  // const checkPassword = (value) => {
  //   console.log("each new letter", value);
  // };

  return (
    <div>
      <h1>please register</h1>
      <form>
        <label>
          Email:
          <input
            value={username}
            type="text"
            // name="email"
            onChange={(e) => {
              setUsername(e.target.value), setUsernameError(true);
            }}
            style={!usernameError ? { borderColor: "red" } : null}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(true);
            }}
            style={!passwordError ? { borderColor: "red" } : null}
          />
        </label>
        <button type="submit" onClick={handleNewUser}>
          register a new user
        </button>
      </form>
      {/* <button onClick={newFunction}>hello</button> */}
    </div>
  );
};

export default SignUp;
