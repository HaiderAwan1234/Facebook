import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const {
    f_name,
    l_name,
    inputEmail,
    inputPassword,
    date,
    month,
    year,
    gender,
  } = req.body;

  if (
    !f_name ||
    !l_name ||
    !inputEmail ||
    !inputPassword ||
    !date ||
    !month ||
    !year ||
    !gender
  ) {
    res.status(400);

    throw new Error("Please enter all inputs !!!");
  }

  const checkUser = await User.findOne({ inputEmail });

  if (checkUser) {
    res.status(401);

    throw new Error("Email already exist");
  }

  const hashPassword = await bcrypt.hash(inputPassword, 10);

  const newUser = await User.create({
    f_name,
    l_name,
    inputEmail,
    inputPassword: hashPassword,
    date,
    month,
    year,
    gender,
  });

  res.send(newUser);
};
