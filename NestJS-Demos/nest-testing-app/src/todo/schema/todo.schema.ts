import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Todo extends Document{
    @Prop({required: true})
    declare _id: string;

    @Prop({required: true})
    description: string;

    @Prop({required: true})
    isCompleted: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);