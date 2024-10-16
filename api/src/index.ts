import express, {Application} from "express";
import dotenv from "dotenv";
import {Database} from "./config/Database";
import bodyParser from "body-parser";

import cors from "cors";
import {Routes} from "./routes";


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
        const router = new Routes(this.app);
        router.routes();
    }


    private connectDB(): void {
        const db = new Database();
        db.sequelize?.sync({force: true})

    }

    private plugins(): void {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(bodyParser.json());
    }
}


const app = new App().app;
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})
