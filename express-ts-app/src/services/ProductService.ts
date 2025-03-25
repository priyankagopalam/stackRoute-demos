import { IProduct } from "../models/Product.js";
import IProductRepository from "../repository/IProductRepository.js";
import IProductService from "./IProductService.js";
import 'reflect-metadata';
import { injectable, inject } from "tsyringe";

@injectable()
export default class ProductService implements IProductService {
    // private readonly productRepository: IProductRepository;

    // constructor(productRepository: IProductRepository) {
    //     this.productRepository = productRepository;
    // }
    constructor(@inject("IProductRepository") private readonly productRepository: IProductRepository) { }

    async getProducts(): Promise<IProduct[]> {
        return await this.productRepository.getProducts();
    }
    async getProductById(id: number): Promise<IProduct | null> {
        let product = await this.productRepository.getProductById(id);
        if (!product) {
            throw new Error(`Product with product id: ${id} does not exists`);
        }
        return product;
    }
    async addProduct(product: IProduct): Promise<IProduct> {
        let result = await this.productRepository.getProductById(product._id);
        if (result) {
            throw new Error(`Product with product id: ${product._id} already exists`);
        }
        return await this.productRepository.addProduct(product);
    }
    async updateProduct(id: number, product: IProduct): Promise<IProduct | null> {
        let result = await this.productRepository.getProductById(id);
        if (!result) {
            throw new Error(`Product with product id: ${id} does not exists`);
        }
        return await this.productRepository.updateProduct(id, product);
    }
    async deleteProduct(id: number): Promise<IProduct | null> {
        let product = await this.productRepository.getProductById(id);
        if (!product) {
            throw new Error(`Product with product id: ${id} does not exists`);
        }
        return await this.productRepository.deleteProduct(id);
    }
}