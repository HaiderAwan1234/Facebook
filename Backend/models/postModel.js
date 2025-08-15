import mongoose from "mongoose";

export const postSchema = mongoose.Schema(
  {
    textArea: {
      type: String,
      required: false,
    },
    background: {
      startColor: {
        type: String,
        default: "#ffffff",
      },
      endColor: {
        type: String,
        default: "#ffffff",
      },
      image: {
        type: String,
        default: "",
      },
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    cloudLink: {
      type: "String",
      default: "",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Post = mongoose.model("Post", postSchema);
