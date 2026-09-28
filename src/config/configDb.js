import "dotenv/config";
import { Sequelize } from "sequelize";

const db = new Sequelize(
    process.env.DB_NAME || "defaultdb", 
    process.env.DB_USERNAME || "avnadmin", 
    process.env.DB_PASSWORD || "",  
    {
        dialect: process.env.DB_DIALECT || "mysql",
        host: process.env.DB_HOST || "localhost",
        port: Number(process.env.DB_PORT) || 3306,
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false,
            },
        },
        pool: {
            max: 2,
            min: 0,
            idle: 10000,
            acquire: 30000,
        },
    }
);

export default db;
