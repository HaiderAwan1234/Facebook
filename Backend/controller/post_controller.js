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
    res.status(404);
    throw new Error("Post not found !!");
  }

  // Find the index of the existing reaction
  const checkLike = findPost.reaction.findIndex((item) => {
    return item.id == user_id && item.type === emogi;
  });

  if (checkLike === -1) {
    // If not found, add the reaction
    findPost.reaction.push({ type: emogi, id: user_id });
  } else {
    // If found, remove it using splice
    findPost.reaction.splice(checkLike, 1);
  }

  await findPost.save();
  res.send(findPost);
};
