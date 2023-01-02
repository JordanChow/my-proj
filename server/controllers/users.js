import User from "../models/User";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = req.body;

    const user = await User.findById(id);

    Object.assign(user, updatedUser);
    user.save();

    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
