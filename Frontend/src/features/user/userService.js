import axios from "axios";

export const userService = async (userData) => {
  const response = await axios.post(
    "http://localhost:5174/api/user/user_register",
    userData
  );

  if (response.data) {
    localStorage.setItem("resgister-user", JSON.stringify(response.data));
  }

  return response.data;
};

// >

// >

export const otpService = async (otpData) => {
  const response = await axios.post(
    `http://localhost:5174/api/user/verify_otp/${otpData?.id}`,
    otpData
  );

  return response.data;
};

// >

// >

export const loginService = async (loginData) => {
  const response = await axios.post(
    "http://localhost:5174/api/user/user_login",
    loginData
  );

  if (response.data) {
    localStorage.setItem("login-user", JSON.stringify(response.data));
  }

  return response.data;
};
