import { IProduct } from "../models/Product.js";

export default interface IProductRepository {
    getProducts(): Promise<IProduct[]>;
    getProductById(id: number): Promise<IProduct | null>
    addProduct(product: IProduct): Promise<IProduct>;
    updateProduct(id: number, product: IProduct): Promise<IProduct | null>
    deleteProduct(id: number): Promise<IProduct | null>;
}