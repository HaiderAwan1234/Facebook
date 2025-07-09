import express from "express";
import {
  login,
  register,
  verifyOTP,
} from "./../controller/resgister_controller.js";

export const userRegister = express.Router();

userRegister.post("/user_register", register);

userRegister.post("/verify_otp/:user_id", verifyOTP);

userRegister.post("/user_login", login);
