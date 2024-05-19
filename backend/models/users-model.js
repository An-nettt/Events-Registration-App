import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: String,
  email: String,
  date: Date,
  socMedia: Boolean,
  friends: Boolean,
  found: Boolean,
});

const User = model('user', userSchema);

export default User;
