import React, { useEffect, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const history = useHistory();
  const [values, setValues] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    console.log("we are in the ");
    try {
      console.log("inside the try");
      const response = await axios.post(`/api/register`, {
        email,
        password,
      });
      console.log("response", response);
      history.push("/auth");
    } catch (err) {
      console.log(err);
    }
  };

  const newFunction = () => {
    console.log("in new function", email, password);
    history.push("/auth");
  };

  return (
    <div>
      <h1>please register</h1>
      <form>
        <label>
          Email:
          <input
            value={email}
            type="text"
            // name="email"
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
        <button type="submit" onClick={handleNewUser}>
          register a new user
        </button>
      </form>
      <button onClick={newFunction}>hello</button>
    </div>
  );
};

export default SignUp;
