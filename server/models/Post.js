import mongoose from "mongoose";

export const PostStatus = {
  OPEN: "OPEN",
  IN_PROGRESS: "IN PROGRESS",
  COMPLETE: "COMPLETE",
};

const PostSchema = new mongoose.Schema(
  {
    businessName: {
      type: String,
      required: true,
    },
    ownerUserId: {
      type: String,
      required: true,
    },
    devUserId: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    picturePath: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: PostStatus,
      default: PostStatus.OPEN,
    },
    content: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);
export default Post;
