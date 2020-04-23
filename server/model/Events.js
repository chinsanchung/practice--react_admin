import mongoose, { Schema } from "mongoose";

const EventSchema = new Schema({
  title: String,
  description: String,
});

const model = mongoose.model("Events", EventSchema, "Events");

export default model;
