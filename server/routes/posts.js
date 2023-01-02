import express from "express";
import { getPosts, getUserPosts, updatePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// READ
router.get("/explore", verifyToken, getPosts);
router.get("/:userId", verifyToken, getUserPosts);
router.patch("/:postId", verifyToken, updatePost);

export default router;
