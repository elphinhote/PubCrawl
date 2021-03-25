import React, { useState, useContext, useEffect } from "react";
import UserContext from "../Context/UserContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState();
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const register = () => {
    history.push("/register");
  };

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitLoginForm = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/users/login", form);

      setUserData({
        token: data.token,
        user: data.user,
      });

      localStorage.setItem("auth-token", data.token);
      history.push("/");
      console.log(data.user.displayName);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    if (userData.user) history.push("/profile");
  }, [userData.user, history]);

  const buttonStyle1 = {
    color: "#fafafa",
    backgroundColor: "#424242",
    border: "0px",
    borderRadius: "5px",
    width: "150px",
    padding: "8px 10px",
    margin: "0",
    position: "absolute",
    left: "50%",
    top: "40%",
    transform: "translate(-50%, -50%)",
  };

  const buttonStyle2 = {
    color: "#fafafa",
    backgroundColor: "#bdbdbd",
    border: "0px",
    borderRadius: "5px",
    width: "150px",
    padding: "8px 10px",
    margin: "0",
    position: "absolute",
    left: "50%",
    top: "46%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div className="white">
      <form className="container white" onSubmit={submitLoginForm}>
        <label>Email</label>
        <input onChange={onChange} type="text" name="email" />
        <label>Password</label>
        <input onChange={onChange} type="text" name="password" />
        <input style={buttonStyle1} type="submit" value="Log in" />
        <input
          style={buttonStyle2}
          onClick={register}
          type="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default Login;
