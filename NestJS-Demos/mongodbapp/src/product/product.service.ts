import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schema/product.schema';
import { Model } from 'mongoose';
import { ProductDto } from './dto/product.dto';
import Redis from 'ioredis';

@Injectable()
export class ProductService {
    constructor(@Inject('REDIS_CLIENT') private readonly cacheManager: Redis, @InjectModel(Product.name) private readonly productModel: Model<ProductDocument>) { }

    createProduct(product: ProductDto): Promise<ProductDocument> {
        const createdProduct = new this.productModel(product);
        return createdProduct.save();
    }

    async findAll(): Promise<ProductDocument[]> {
        const cachedProducts = await this.cacheManager.get('products');
        if (cachedProducts) {
            console.log('Retrieved data from cache');
            return JSON.parse(cachedProducts);
        }
        console.log('Retrieving data from DB');
        const dbProducts = await this.productModel.find().exec();
        const products = dbProducts.map(p => p.toObject());
        await this.cacheManager.set('products', JSON.stringify(products), 'EX', 60);
        return products;
    }

    findOne(id: string): Promise<ProductDocument | null> {
        return this.productModel.findById(id).exec();
    }

    updateProduct(id: string, product: ProductDto): Promise<ProductDocument | null> {
        return this.productModel.findByIdAndUpdate(id, product, { new: true }).exec();
    }

    removeProduct(id: string): Promise<ProductDocument | null> {
        return this.productModel.findByIdAndDelete(id).exec();
    }

}
