import { Table, Column, Model, ForeignKey } from "sequelize-typescript";
import { User } from "./user.model";
import { Group } from "./group.model";

@Table
export class UserGroup extends Model<UserGroup> {

    @ForeignKey(() => User)
    @Column
    userId: number;

    @ForeignKey(() => Group)
    @Column
    groupId: number;

}