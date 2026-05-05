import express from "express";
import {
  getEmogi,
  getPost,
  post,
  postComment,
  postEmogi,
} from "../controller/post_controller.js";
import { tokenHandler } from "./../middleware/tokenMiddleware.js";

export const userPost = express.Router();

userPost.post("/user_post/:user_id", post);

userPost.get("/getUserPost", getPost);

userPost.post("/emogiPost/:post_id/:user_id", postEmogi);

userPost.get("/getEmogi/:post_id", getEmogi);

userPost.post("/commentPost/:post_id", tokenHandler, postComment);
