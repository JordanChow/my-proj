import mongoose from "mongoose";

const userRole = {
  BUSINESS: "BUSINESS",
  DEVELOPER: "DEVELOPER",
};

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    role: {
      type: userRole,
      required: true,
    },
    picturePath: {
      type: String,
      default: "",
    },
    location: String,
    birthday: Date,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
