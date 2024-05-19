import Events from '../models/events-model.js';

const getAll = async (req, res) => {
  const result = await Events.find();
  res.json(result);
  console.log(result);
};

export default getAll;
