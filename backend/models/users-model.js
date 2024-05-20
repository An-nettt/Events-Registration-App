import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  id: String,
  name: String,
  email: String,
  date: String,
  socmedia: Boolean,
  friends: Boolean,
  found: Boolean,
  title: String,
});

const User = model('user', userSchema);

export default User;
