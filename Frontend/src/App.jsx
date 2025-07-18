import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/home/Home";
import Friends from "./pages/home/Friends";

import { Toaster } from "react-hot-toast";
import OTPVerificationPage from "./pages/auth/Otp";
import Videos from "./components/home/navbar/Videoss/Videos";
const App = () => {
  return (
    <>
      <Router>
        <Toaster />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp" element={<OTPVerificationPage />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
