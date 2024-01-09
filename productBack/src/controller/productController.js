import { Products } from "../model/productModel.js";

export const getAllProducts=async (req, res) => {
    try {
      const prod = await Products.find({});
      res.send(prod);
    } catch (error) {
      res.send(error.message);
    }
  }
  export const getByIdProduct=async (req, res) => {
    try {
      const { id } = req.params;
      const prod = await Products.findById(id);
  
      res.send(prod);
    } catch (error) {
      res.send(error.message);
    }
  }
  export const addProduct= async (req, res) => {
    try {
      const { title, price } = req.body;
      const newProd = new Products({ title, price });
      await newProd.save();
  
      res.send("Got a POST request");
    } catch (error) {
      res.send({ message: error.message });
    }
  }
  export const updateProduct= async (req, res) => {
    try {
        const { id } = req.params;
      const { title, price } = req.body;
      const newProd =  await Products.findByIdAndUpdate(id,{ title, price });
  
      res.send("Got a POST request");
    } catch (error) {
      res.send({ message: error.message });
    }
  }
  export const removeProduct= async (req, res) => {
    try {
      const { id } = req.params;
      const prod = await Products.findByIdAndDelete(id);
  
      res.send("successfully deleted!");
    } catch (error) {
      res.send(error.message);
    }
  }