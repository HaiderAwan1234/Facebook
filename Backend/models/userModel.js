import mongoose, { Schema } from "mongoose";

export const userSchema = mongoose.Schema(
  {
    f_name: {
      type: String,
      required: [true, "Please enter first name !!"],
    },
    l_name: {
      type: String,
      required: [true, "Please enter last name !!"],
    },
    inputEmail: {
      type: String,
      required: [true, "Please enter email address or phone !!"],
    },
    inputPassword: {
      type: String,
      required: [true, "Please enter password !!"],
    },
    date: {
      type: Number,
      required: [true, "Plaese select date !!"],
    },
    month: {
      type: String,
      required: [true, "Please select month !!"],
    },
    year: {
      type: Number,
      required: [true, "Please select year !!"],
    },
    gender: {
      type: String,
      required: [true, "Please select gender !!"],
    },
    otp: {
      type: Number,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
