import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import { prdctRoute } from "./src/routes/productRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/",prdctRoute)
mongoose
  .connect(process.env.DB_KEY)
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connected!"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on poert ${process.env.PORT}`);
});
