import mongoose, { Schema } from "mongoose";

const EventSchema = new Schema({
  title: String,
  description: String,
  file_name: String,
  src: String,
});

const model = mongoose.model("Events", EventSchema, "Events");

export default model;
