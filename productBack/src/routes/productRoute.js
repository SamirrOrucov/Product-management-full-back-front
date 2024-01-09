import { Router } from "express";
import { addProduct, getAllProducts, getByIdProduct, removeProduct, updateProduct } from "../controller/productController.js";
export const prdctRoute=Router()



prdctRoute.get("/", getAllProducts);
  prdctRoute.get("/:id", getByIdProduct);
  
  prdctRoute.post("/",addProduct);
  prdctRoute.put("/:id",updateProduct);

  prdctRoute.delete("/:id",removeProduct);
    