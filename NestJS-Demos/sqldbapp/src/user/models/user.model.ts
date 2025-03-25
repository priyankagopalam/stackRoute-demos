import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({tableName: 'users'})
export class User extends Model{
    @Column({
        type: DataType.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataType.UUIDV4
    })
    _id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    firstname: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    lastname: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    city: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    age: number
}