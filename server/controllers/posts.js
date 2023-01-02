import Post from "../models/Post";
import User from "../models/User";

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
