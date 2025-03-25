import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
    _id: number,
    name: string,
    brand: string,
    quantity: number,
    price: number
}

const productSchema: Schema = new Schema({
    _id: { type: Number, required: true },
    name:{ type: String, required: true },
    brand: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
});

export const Product = mongoose.model<IProduct>("Product", productSchema, "products");