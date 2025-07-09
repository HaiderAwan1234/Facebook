import { Post } from "../models/postModel.js";

export const post = async (req, res) => {
  const { textArea, background } = req.body;
  const { user_id } = req.params;

  if (!textArea) {
    res.status(401);
    throw new Error("Please post something !!");
  }

  const newPost = await Post.create({
    textArea,
    // background,
    user_id,
  });

  res.send(newPost);
};
