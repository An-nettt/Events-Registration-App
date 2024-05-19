import User from '../models/users-model.js';

const getAllUsers = async (req, res) => {
  const result = await User.find();
  res.json(result);
  console.log(result);
};

// const addNewUser = async (req, res) => {
//   const { _id: owner } = req.user;
//   const result = await User.create({ ...req.body, owner });
//   res.status(201).json(result);
// };

export default getAllUsers;
