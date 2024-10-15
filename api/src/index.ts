import express, {Application, Request, Response} from "express";
import dotenv from "dotenv";
import {Database} from "./config/Database";
import bodyParser from "body-parser";
import PractitionerRouter from "./router/practitioner.router";
import OfficeRouter from "./router/office.router";

import cors from "cors";
import {Practitioner} from "./model/Practitioner";
import {faker} from "@faker-js/faker";
import {Speciality} from "./model/Speciality";
import {Language} from "./model/Language";
import {Office} from "./model/Office";
import SpecialityRouter from "./router/speciality.router";


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
        this.app.use('/api/practitioners', PractitionerRouter);
        this.app.use('/api/specialities', SpecialityRouter);
        this.app.use('/api/offices', OfficeRouter);
    }


    private connectDB(): void {
        const db = new Database();
        db.sequelize?.sync({force: true})
            .then(async () => {
                Speciality.create({
                    name: 'dentiste generale'
                }).then(spe => {
                    // spe.update({
                    //      name: 'medecin generale'
                    // })

                });
            })

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
