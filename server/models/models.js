import mongoose from "mongoose";

const userData = new mongoose.Schema({
  bio: {
    type: String,
    default: "",
  },
});
