import { IProduct } from "../models/Product.js";
import IProductRepository from "./IProductRepository.js";

class ProductRepository2 implements IProductRepository{
    getProducts(): Promise<IProduct[]> {
        throw new Error("Method not implemented.");
    }
    getProductById(id: number): Promise<IProduct | null> {
        throw new Error("Method not implemented.");
    }
    addProduct(product: IProduct): Promise<IProduct> {
        throw new Error("Method not implemented.");
    }
    updateProduct(id: number, product: IProduct): Promise<IProduct | null> {
        throw new Error("Method not implemented.");
    }
    deleteProduct(id: number): Promise<IProduct | null> {
        throw new Error("Method not implemented.");
    }

}