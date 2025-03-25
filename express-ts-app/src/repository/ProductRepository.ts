import { Product, IProduct } from "../models/Product.js";
import IProductRepository from "./IProductRepository.js";
import 'reflect-metadata';
import { injectable } from "tsyringe";

@injectable()
export default class ProductRepository implements IProductRepository {
    async getProducts(): Promise<IProduct[]> {
        return await Product.find();
    }
    async getProductById(id: number): Promise<IProduct | null> {
        return await Product.findById(id);
    }
    async addProduct(product: IProduct): Promise<IProduct> {
        const { _id, name, brand, quantity, price } = product;
        const newProduct = new Product({ _id, name, brand, quantity, price });
        return await newProduct.save();
    }
    async updateProduct(id: number, product: IProduct): Promise<IProduct | null> {
        const { _id, name, brand, quantity, price } = product;
        return await Product.findByIdAndUpdate(id, {
            _id, name, brand, quantity, price
        });
    }
    async deleteProduct(id: number): Promise<IProduct | null> {
        return await Product.findByIdAndDelete(id);
    }

}