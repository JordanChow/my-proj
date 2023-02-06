import Post from "../models/Post.js";
import User from "../models/User.js";

// CREATE
export const createPost = async (req, res) => {
  try {
    const { ownerUserId, businessName, location, description, picturePath } =
      req.body;

    const newPost = new Post({
      ownerUserId,
      businessName,
      location,
      description,
      picturePath,
    });

    await newPost.save();
    const posts = await Post.find();

    res.status(201).json(posts);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// READ
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// READ
export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const userPosts = await Post.find({ id });
    res.status(200).json(userPosts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// UPDATE
export const updatePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId } = req.body;

    const newPostData = req.body;
    newPostData.delete(userId);

    const post = await Post.findById(postId);

    if (post.ownerUserId != userId) {
      return res
        .status(403)
        .json({ message: "You cannot edit other people's posts. " });
    }

    const updatedPost = await Post.findByIdAndUpdate(postId, newPostData);
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
