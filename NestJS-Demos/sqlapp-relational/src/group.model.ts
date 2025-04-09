import { Table, Column, Model, PrimaryKey, AutoIncrement, BelongsToMany } from "sequelize-typescript";
import { User } from "./user.model";
import { UserGroup } from "./usergroup.model";

@Table
export class Group extends Model<Group> {
    @PrimaryKey
    @AutoIncrement
    @Column
    declare id: number;

    @Column
    name: string;

    @BelongsToMany(()=>User, ()=>UserGroup)
    users: User[];
}