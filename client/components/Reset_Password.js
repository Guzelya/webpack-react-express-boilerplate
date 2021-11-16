import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Reset_Password = (props) => {
  const { password_token } = props.match.params;

  console.log("those are props", props, password_token);
  const [password, setPasword] = useState("");
  const [buttonToProfile, setButtonToProfile] = useState(false);
  const [passwordError, setPasswordError] = useState(true);
  const ResetPassword = async () => {
    try {
      console.log("inside the axios function");
      if (
        /^(?=(.*[a-z]){1,})(?=(.*[!@#$%^&*()\-+_=,.><?/]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})\S+$/.test(
          password
        ) &&
        password.length >= 7
      ) {
        console.log("password is", password);
        const result = await axios.post("/api/new-password", {
          password,
          password_token,
        });
        console.log("result from new-password route", result);
        if (result.status === 200) {
          setButtonToProfile(true);
        }
      } else {
        setPasswordError(false);
      }
    } catch (err) {
      console.log("error in resetpassword", err);
      return err;
    }
  };

  // const seeProfile = () => {

  // };

  return (
    <div>
      <p>you'll be able to reset password here</p>
      <input
        type="password"
        placeholder="enter a new password"
        value={password}
        onChange={(e) => {
          setPasword(e.target.value);
          setPasswordError(true);
        }}
        style={!passwordError ? { borderColor: "red" } : null}
      />
      <button
        // className="btn waves-effect waves-light #64b5f6 blue darken-1"
        onClick={ResetPassword}
      >
        Update password
      </button>
      {buttonToProfile ? (
        // <button onClick={seeProfile}>go to your profile</button>
        <Link to="/profile">See you profile</Link>
      ) : null}
    </div>
  );
};

export default Reset_Password;
