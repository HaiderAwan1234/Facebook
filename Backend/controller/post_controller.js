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
  const { post_id, user_id } = req.params;

  const findPost = await Post.findById(post_id);

  if (!post_id) {
    res.status(404);
    throw new Error("Post not found !!");
  }

  findPost.reaction.push({ type: emogi, id: user_id });
  await findPost.save();

  res.send(findPost);
};
