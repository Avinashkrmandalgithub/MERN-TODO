import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },

  username: {
    type: String,
    unique: true
  },

  password: {
    type: String,
    required: true,
  },

  lists: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "List",
  }],
}, {timestamps: true});

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
