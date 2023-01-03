import mongoose from "mongoose";
import { userRole } from "../models/User.js";
import { PostStatus } from "../models/Post.js";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "TEST USER 1",
    lastName: "TEST USER 1",
    email: "testuser1@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p11.jpeg",
    location: "San Fran, CA",
    role: userRole.DEVELOPER,
    birthday: new Date(2001, 2, 10),
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "TEST USER 2",
    lastName: "TEST USER 2",
    email: "testuser2@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p2.jpeg",
    location: "San Fran, CA",
    role: userRole.DEVELOPER,
    birthday: new Date(2001, 3, 10),
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "TEST USER 3",
    lastName: "TEST USER 3",
    email: "testuser3@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p3.jpeg",
    location: "San Fran, CA",
    role: userRole.BUSINESS,
    birthday: new Date(2001, 4, 10),
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    businessName: "POST 1",
    ownerUserId: userIds[0],
    devUserId: "",
    description: "Test description text.",
    location: "New York City, NY",
    picturePath: "post1.jpeg",
    status: PostStatus.OPEN,
    content: "",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    businessName: "POST 2",
    ownerUserId: userIds[1],
    devUserId: "",
    description: "Test description text.",
    location: "San Francisco, CA",
    picturePath: "post2.jpeg",
    status: PostStatus.OPEN,
    content: "",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
];
