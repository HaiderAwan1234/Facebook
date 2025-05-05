import axios from "axios";

export const userService = async (userData) => {
  const response = await axios.post(
    "http://localhost:5174/api/user/user_register",
    userData
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};
