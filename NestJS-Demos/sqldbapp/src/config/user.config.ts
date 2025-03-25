import { Dialect } from "sequelize";

export const databaseConfig = {
    development:{
        username: 'postgres',
        password: 'niit1234',
        database: 'nestdb',
        host: 'localhost',
        port: 5432,
        dialect: 'postgres' as Dialect,
        logging: console.log
    }
}