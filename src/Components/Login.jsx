import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Login({ setIsLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response.data);

      setResult(response.data);
      setIsLogin(response.data.success);
      sessionStorage.setItem("isLogin", response.data.success);
      sessionStorage.setItem("userEmail", response.data.user.email);
      console.log(sessionStorage.getItem("userEmail"));
      
    } catch (error) {
      setResult(error.response.data);
      console.log("error in handleLogin frontend : ", error.response);
    }
  };
  return (
    <div>
      <form className="form-container">
        <legend>Login</legend>
        <label>Email </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button onClick={handleLogin}>Login </button>
        <p>
          Dont have an account ? <Link to="/register">Register</Link>
        </p>
      </form>
      {result && (
        <div
          style={{
            position: "absolute",
            color: result?.color,
            fontSize: "18px",
            textAlign: " center",
            marginTop: "10px",
            top: "65%",
            left: "45%",
          }}
        >
          {result.message}
        </div>
      )}
    </div>
  );
}

export default Login;
