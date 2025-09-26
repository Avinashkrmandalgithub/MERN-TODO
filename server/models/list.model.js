import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  body: {
    type: String,
    required: true
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  completed: {
    type: Boolean,
    default: false
  }


}, {timestamps: true}); 

const ListModel = mongoose.model("List", listSchema);
export default ListModel;