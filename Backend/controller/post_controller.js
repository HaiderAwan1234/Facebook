import { Post } from "../models/postModel.js";

export const post = async (req, res) => {
  const { textArea, background, cloudLink } = req.body;
  const { user_id } = req.params;

  const newPost = await Post.create({
    textArea,
    background,
    cloudLink,
    user_id,
  });

  res.send(newPost);
};

export const getPost = async (req, res) => {
  const allPost = await Post.find().sort({ createdAt: -1 });

  res.send(allPost);
};
