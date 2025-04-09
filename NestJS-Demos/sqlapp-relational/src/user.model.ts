import { Table, Column, Model, HasMany, PrimaryKey, AutoIncrement } from "sequelize-typescript";
import { Post } from "./post.model";

@Table
export class User extends Model<User> {
    @PrimaryKey
    @AutoIncrement
    @Column
    declare id: number;

    @Column
    name: string;

    @HasMany(() => Post)
    posts: Post[];
}