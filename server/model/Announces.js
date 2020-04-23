import mongoose, { Schema } from "mongoose";

const AnnounceSchema = new Schema({
  title: String,
  description: String,
});

const model = mongoose.model("Announces", AnnounceSchema, "Announces");

export default model;
