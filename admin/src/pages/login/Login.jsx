import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <input
        style={{ padding: "1rem 2em", marginBottom: "1rem", fontSize: "1rem" }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: "1rem 2em", marginBottom: "1rem", fontSize: "1rem" }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        style={{ padding: "1rem 2em", fontSize: "1rem", width: "10rem" }}
        onClick={handleClick}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
