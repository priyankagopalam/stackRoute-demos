import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";

export class ProductDto {
    @ApiProperty({example: '1', description: 'Product ID'})
    @IsNotEmpty()
    _id: string;

    @ApiProperty({example: 'Laptop', description: 'Product Name'})
    @IsNotEmpty()
    name: string;

    @ApiProperty({example: 'Dell', description: 'Product Brand'})
    @IsNotEmpty()
    brand: string;

    @ApiProperty({example: 5, description: 'Product Quantity'})
    @IsNotEmpty()
    @IsInt()
    quantity: number;

    @ApiProperty({example: 50000, description: 'Product Price'})
    @IsNotEmpty()
    @IsInt()
    price: number;
}