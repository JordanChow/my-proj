import express from "express";
import { getFeedPosts, getUserPosts } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// READ
router.get("/explore", verifyToken, getFeedPosts);
router.get("/:user-id", verifyToken, getUserPosts);

export default router;
