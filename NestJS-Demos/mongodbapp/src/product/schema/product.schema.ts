import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema()
export class Product {
    @Prop({ required: true })
    _id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    brand: string;

    @Prop({ required: true })
    quantity: number;

    @Prop({ required: true })
    price: number;
}

// Creating instance of Schema class and export it
export const ProductSchema = SchemaFactory.createForClass(Product);
export type ProductDocument = HydratedDocument<Product>;