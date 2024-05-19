import User from '../models/users-model.js';

const getAllUsers = async (req, res) => {
  const result = await User.find();
  res.json(result);
};

const addNewUser = async (req, res) => {
  try {
    const { name, email, date, socmedia, friends, found } = req.body;
    const newUser = new User({ name, email, date, socmedia, friends, found });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export default { getAllUsers, addNewUser };
