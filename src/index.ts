import express, {Application } from "express";
import dotenv from "dotenv";
import {Database} from "./config/Database";

dotenv.config();

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.connectDB();
        this.plugins();
        this.routes();
    }

    private routes(): void {

    }

    private connectDB(): void {
         const db = new Database();
         db.sequelize?.sync();
    }

    private plugins(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

    }
}

const app = new App().app;

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})