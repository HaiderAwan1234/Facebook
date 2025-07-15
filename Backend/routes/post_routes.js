import express from "express";
import { getPost, post } from "../controller/post_controller.js";

export const userPost = express.Router();

userPost.post("/user_post/:user_id", post);

userPost.get("/getUserPost", getPost);
