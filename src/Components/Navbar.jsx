import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
function Navbar({ setIsLogin }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar-container">
        <Link to="/bookroom">BookRoom</Link>
        <Link to="/">History</Link>
        <button
          onClick={() => {
            setIsLogin(false);
            sessionStorage.setItem("isLogin", "false");
            navigate("/");
          }}
        >
          Logout{" "}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
