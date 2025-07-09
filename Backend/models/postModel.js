import mongoose from "mongoose";

export const postSchema = mongoose.Schema(
  {
    textArea: {
      type: String,
      required: true,
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
  },
  {
    timestamps: true,
  }
);

export const Post = mongoose.model("Post", postSchema);
