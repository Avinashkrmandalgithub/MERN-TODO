import mongoose from "mongoose";

async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb connected");
  } catch (error) {
    console.log("Mongo connection error: ", error)
  }
}

export default connectToDb;