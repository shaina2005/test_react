import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        {
          email,
          name,
          password,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      setResult(response.data);
    } catch (error) {
      console.log("Error in handleRegister frontend", error.message);
    }
  };
  return (
    <div>
      <form className="form-container">
        <legend>Register</legend>
        <label>Email </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button onClick={handleRegister}>Register </button>
        <p>
          Already have account ? <Link to="/">Login</Link>
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
            top: "72%",
            left: "43%",
          }}
        >
          {result.message}
        </div>
      )}
    </div>
  );
}

export default Register;
