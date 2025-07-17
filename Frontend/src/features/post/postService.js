import axios from "axios";

export const postService = async (postData) => {
  const response = await axios.post(
    `http://localhost:5174/api/post/user_post/${postData?.user_id}`,
    postData
  );

  return response.data;
};

export const getPostService = async () => {
  const response = await axios.get(
    "http://localhost:5174/api/post/getUserPost"
  );

  return response.data;
};
