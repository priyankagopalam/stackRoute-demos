import express, { Router } from "express";
import ProductController from "../controllers/ProductController.js";
import ProductRepository from "../repository/ProductRepository.js";
import ProductService from "../services/ProductService.js";
import 'reflect-metadata';
import { injectable, inject } from "tsyringe";

@injectable()
export class ProductRoutes{
    private readonly router: Router
    // private readonly productController: ProductController;

    constructor(@inject("ProductController") private readonly productController: ProductController){
        this.router = express.Router();
        // this.productController = new ProductController(new ProductService(new ProductRepository));
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get('/', this.productController.getProducts.bind(this.productController));
        this.router.get('/:id', this.productController.getProductById.bind(this.productController));
        this.router.post('/', this.productController.addProduct.bind(this.productController));
        this.router.put('/:id', this.productController.updateProduct.bind(this.productController));
        this.router.get('/:id', this.productController.deleteProduct.bind(this.productController));
    }

    getRouter(): Router{
        return this.router;
    }

}