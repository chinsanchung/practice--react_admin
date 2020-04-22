import mongoose from "mongoose";

const ShopSchema = new mongoose.Schema({
  shopType: String,
  name: String,
  description: String,
  menuDescription: String,
  address: String,
});

const model = mongoose.model("shops", ShopSchema, "shops");
export default model;
