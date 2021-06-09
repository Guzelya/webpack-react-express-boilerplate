import React, { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/login`);
        console.log("response in a list", response.data);
        setValues(response.data);
        // setRestaurants(response.data.data.restaurants);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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

  return (
    <div>
      <h1>please login</h1>
      <p>{values.name}</p>
      <button>get values</button>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <label>
          what else:
          <input type="text" name="password" />
        </label>
      </form>
      {/* <p>Works</p> */}
      {/* <p>works again</p> */}
    </div>
  );
};

export default Login;
