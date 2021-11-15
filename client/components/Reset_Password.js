import React, { useState } from "react";
import axios from "axios";

const Reset_Password = (props) => {
  const { password_token } = props.match.params;
  console.log("those are props", props, password_token);
  const [password, setPasword] = useState("");
  const ResetPassword = async () => {
    try {
      console.log("inside the axios function");
      const result = await axios.post("/api/new-password", {
        password,
        password_token,
      });
      console.log("result from new-password route", result);
    } catch (err) {
      console.log("error in resetpassword", err);
      return err;
    }
  };

  return (
    <div>
      <p>you'll be able to reset password here</p>
      <input
        type="password"
        placeholder="enter a new password"
        value={password}
        onChange={(e) => setPasword(e.target.value)}
      />
      <button
        // className="btn waves-effect waves-light #64b5f6 blue darken-1"
        onClick={ResetPassword}
      >
        Update password
      </button>
    </div>
  );
};

export default Reset_Password;
