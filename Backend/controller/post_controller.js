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
    res.status(404).send("Post not found !!");
    return;
  }

  const checkLike = findPost.reaction.find((item) => item.id == user_id);

  if (!checkLike) {
    findPost.reaction.push({ type: emogi, id: user_id });
  } else {
    if (checkLike.type === emogi) {
      const index = findPost.reaction.findIndex((item) => item.id == user_id);
      findPost.reaction.splice(index, 1);
    } else {
      checkLike.type = emogi;
    }
  }

  // Force mongoose to detect nested array changes
  findPost.markModified("reaction");

  await findPost.save();
  res.send(findPost);
};
