import express from "express";
import { register } from "./../controller/resgister_controller.js";

export const userRegister = express.Router();

userRegister.post("/user_register", register);
