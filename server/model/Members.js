import mongoose, { Schema } from "mongoose";

const MemberSchema = new Schema({
  member_id: String,
  name: String,
  phoneNumber: String,
  email: String,
  avatar: Buffer,
  avatar_type: String,
});

const model = mongoose.model("Members", MemberSchema, "Members");

export default model;
