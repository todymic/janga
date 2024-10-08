import express, {Application,Request, Response } from "express";
import dotenv from "dotenv";
import {Database} from "./config/Database";
import bodyParser from "body-parser";
import PractitionerRouter from "./router/practitioner.router";
import OfficeRouter from "./router/office.router";

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
        this.app.route('/').get((req: Request, res: Response) => {
            res.send('Welcome to the database!');
        })
        this.app.use('/api/practitioners', PractitionerRouter);
        this.app.use('/api/offices', OfficeRouter);
    }

    private connectDB(): void {
         const db = new Database();
         db.sequelize?.sync({ force: true });
    }

    private plugins(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    }
}

const app = new App().app;



app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})
