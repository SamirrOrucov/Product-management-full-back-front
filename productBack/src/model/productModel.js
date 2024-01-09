import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    title: String,
    price: Number,
  });
 export const Products = mongoose.model("Products", productSchema);
  