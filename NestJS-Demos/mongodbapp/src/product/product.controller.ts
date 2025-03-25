import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';
import { Response } from 'express';
import { ApiExcludeEndpoint, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SkipThrottle } from '@nestjs/throttler';

@Controller('product')
@ApiTags('Product API Endpoints')
@SkipThrottle()
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post()
    @ApiOperation({ summary: 'Add New Product' })
    @ApiResponse({ status: 201, description: 'Product Added Successfully' })
    // @ApiExcludeEndpoint()
    async createProduct(@Body() product: ProductDto) {
        return await this.productService.createProduct(product);
    }

    @Get()
    @ApiOperation({summary: 'Get All Products'})
    @ApiResponse({status: 200, description: 'Returns the list of products'})    
    async getAllProducts() {
        return await this.productService.findAll();
    }

    @SkipThrottle({default: false})
    @Get(":id")
    async getProductById(@Param("id") id: string, @Res() res: Response) {
        const prd = await this.productService.findOne(id);
        if (prd == null) {
            res.status(404).send({ message: `Product with product id: ${id} does not exists` });
        }
        return res.status(200).send(prd);
    }

    @Put(":id")
    async updateProduct(@Param("id") id: string, @Body() product: ProductDto) {
        return await this.productService.updateProduct(id, product);
    }

    @Delete(":id")
    async deleteProduct(@Param("id") id: string) {
        return await this.productService.removeProduct(id);
    }
}
