import React, { useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./Components/Register";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Bookroom from "./Components/Bookroom";
import History from "./Components/History";

function App() {
  const [isLogin, setIsLogin] = useState(
    sessionStorage.getItem("isLogin") === "true"
  );

  return (
    <div className="app-container">
      <BrowserRouter>
        {isLogin === "true" ? (
          <>
            <Navbar setIsLogin={setIsLogin} />
            <Routes>
              <Route path="/" element={<History />} />
              <Route path="/bookroom" element={<Bookroom />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Login setIsLogin={setIsLogin} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
