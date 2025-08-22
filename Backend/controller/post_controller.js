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

export const postEmogi = async (req, res) => {
  const { emogi } = req.body;
  const { user_id, post_id } = req.params;

  const findPost = await Post.findById(post_id);

  if (!findPost) {
    res.send(404);
    throw new Error("Post not found !!");
  }

  const checkLike = findPost.reaction.find((item) => {
    return item.id == user_id;
  });

  if (!checkLike) {
    findPost.reaction.push({ type: emogi, id: user_id });
  } else {
    findPost.reaction.splice(checkLike, 1);
  }

  findPost.save();
  res.send(findPost);
};
