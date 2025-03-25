import express from "express";
import mongoose from "mongoose";
import "./di-container.js"
import "reflect-metadata";
import { container } from "tsyringe";
import { ProductRoutes } from "./routes/ProductRoutes.js";
const app = express();

mongoose.connect("mongodb://localhost:27017/ProductsDB");
mongoose.connection.once("open", () => {
    console.log("Connected to DB");
}).on("error", (err) => {
    console.log(err);
})

app.use(express.json());
const routes = container.resolve(ProductRoutes);
app.use('/api/v1/product', routes.getRouter());


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

