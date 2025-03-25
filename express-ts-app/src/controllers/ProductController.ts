import { Request, Response } from "express";
import IProductService from "../services/IProductService.js";
import 'reflect-metadata';
import { inject, injectable } from "tsyringe";

@injectable()
export default class ProductController {
    // private readonly productService: IProductService;
    // constructor(productService: IProductService) {
    //     this.productService = productService;
    // }

    constructor(@inject("IProductService") private readonly productService: IProductService) { }

    async getProducts(req: Request, res: Response): Promise<void> {
        try {
            const products = await this.productService.getProducts();
            res.status(200).send(products);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'Error fetching products' });
        }
    }

    async getProductById(req: Request, res: Response): Promise<void> {
        try {
            const product = await this.productService.getProductById(parseInt(req.params.id));
            res.status(200).send(product);
        } catch (error: any) {
            console.log(error);
            res.status(404).send({ message: error.message });
        }
    }

    async addProduct(req: Request, res: Response): Promise<void> {
        try {
            await this.productService.addProduct(req.body);
            res.status(200).send({ status: 200, message: 'Product added successfully' });
        } catch (error: any) {
            console.log(error);
            res.status(409).send({ status: 409, message: error.message });
        }
    }

    async updateProduct(req: Request, res: Response): Promise<void> {
        try {
            await this.productService.updateProduct(parseInt(req.params.id), req.body);
            res.status(200).send({ status: 200, message: 'Product updated successfully' });
        } catch (error: any) {
            console.log(error);
            res.status(404).send({ status: 404, message: error.message });
        }
    }

    async deleteProduct(req: Request, res: Response): Promise<void> {
        try {
            await this.productService.deleteProduct(parseInt(req.params.id));
            res.status(200).send({ status: 200, message: 'Product deleted successfully' });
        } catch (error: any) {
            console.log(error);
            res.status(404).send({ status: 404, message: error.message });
        }
    }
}