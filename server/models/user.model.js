import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
  userid: { type: String, required: true, unique: true },
  name: { type: String, required: true }, // Changed to 'name' instead of 'firstName' and 'lastName'
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
});

// Create the User model
const User = mongoose.model('User', userSchema);

export default User;
