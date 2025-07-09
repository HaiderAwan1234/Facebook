import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/home/Home";
import { Toaster } from "react-hot-toast";
import OTPVerificationPage from "./pages/auth/Otp";
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
        </Routes>
      </Router>
    </>
  );
};

export default App;
