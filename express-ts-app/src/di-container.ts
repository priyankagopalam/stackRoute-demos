import "reflect-metadata";
import { container } from "tsyringe";
import IProductRepository from "./repository/IProductRepository.js";
import ProductRepository from "./repository/ProductRepository.js";
import IProductService from "./services/IProductService.js";
import ProductService from "./services/ProductService.js";
import ProductController from "./controllers/ProductController.js";
import { ProductRoutes } from "./routes/ProductRoutes.js";

container.register<IProductRepository>("IProductRepository", { useClass: ProductRepository });
container.register<IProductService>("IProductService", { useClass: ProductService });
container.register<ProductController>("ProductController", { useClass: ProductController });
container.register<ProductRoutes>("ProductRoutes", { useClass: ProductRoutes });