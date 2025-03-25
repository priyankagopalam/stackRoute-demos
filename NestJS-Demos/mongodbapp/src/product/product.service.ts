import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schema/product.schema';
import { Model } from 'mongoose';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private readonly productModel: Model<ProductDocument>) { }

    createProduct(product: ProductDto): Promise<ProductDocument> {
        const createdProduct = new this.productModel(product);
        return createdProduct.save();
    }

    findAll(): Promise<ProductDocument[]> {
        return this.productModel.find().exec();
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
