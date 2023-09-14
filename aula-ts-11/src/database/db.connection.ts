import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

export const clientDB = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === "production" ? true : false
});