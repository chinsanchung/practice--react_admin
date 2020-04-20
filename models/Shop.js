import mongoose from "mongoose";

const ShopSchema = new mongoose.Schema({
  shopType: { type: String, required: "shopType is required" },
  name: { type: String, required: "name is required" },
  description: { type: String, required: "description is required" },
  menuDescription: { type: String, required: "menuDescription is required" },
  address: { type: String, required: "address is required" },
});

const model = mongoose.model("Shop", ShopSchema);

export default model;
