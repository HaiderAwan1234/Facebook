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

// Backend: controllers/postController.js
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

  // Fixed: Changed 'id' to 'user_id' for consistency
  const checkLike = findPost.reaction.find((item) => item.user_id == user_id);

  if (!checkLike) {
    findPost.reaction.push({ type: emogi, user_id: user_id }); // Fixed: using user_id
  } else {
    if (checkLike.type === emogi) {
      const index = findPost.reaction.findIndex(
        (item) => item.user_id == user_id,
      );
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

// controllers/postController.js
export const getEmogi = async (req, res) => {
  const { post_id } = req.params;

  const findPost = await Post.findById(post_id);

  if (!findPost) {
    res.status(404);
    throw new Error("Post not Found !!");
  }

  res.send(findPost.reaction);
};

export const postComment = async (req, res) => {
  res.send("This is comment");
};
