import mongoose, { Schema } from "mongoose";

const MemberSchema = new Schema({
  member_id: String,
  name: String,
  phoneNumber: String,
  email: String,
});

const model = mongoose.model("members", MemberSchema, "members");

export default model;
