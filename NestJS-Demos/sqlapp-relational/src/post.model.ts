import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./user.model";

@Table
export class Post extends Model<Post> {
    @PrimaryKey
    @AutoIncrement
    @Column
    declare id: number;

    @Column
    title: string;

    @ForeignKey(() => User)
    @Column
    userId: number;

    @BelongsTo(() => User)
    user: User;
}