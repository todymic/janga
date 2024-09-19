import {Sequelize} from "sequelize-typescript";
import dotenv from "dotenv";
import {Doctor} from "../model/Doctor";
import {DoctorSpecialities} from "../model/DoctorSpecialities";
import {Language} from "../model/Language";
import {Speciality} from "../model/Speciality";
import {DoctorLanguages} from "../model/DoctorLanguages";
import {Patient} from "../model/Patient";
import {Office} from "../model/Office";
import {DoctorRepository} from "../repository/doctor.repository";
import {OfficeRepository} from "../repository/office.repository";

dotenv.config();
export class Database {
    public sequelize: Sequelize | undefined;

    private DB_NAME: string = process.env.DB_NAME as string;
    private DB_USER: string = process.env.DB_USERNAME as string;
    private DB_PASSWORD: string = process.env.DB_PASSWORD as string;
    private DB_HOST: string = process.env.DB_HOST as string;


    constructor() {
        this.connect();
    }

    public async connect() {

        try {

            this.sequelize = new Sequelize({
                database: this.DB_NAME,
                username: this.DB_USER,
                password: this.DB_PASSWORD,
                host: this.DB_HOST,
                dialect: "postgres",
                models: [
                    Doctor,
                    DoctorSpecialities,
                    Language,
                    Speciality,
                    DoctorLanguages,
                    Patient,
                    Office
                ],
            });
           await this.sequelize?.authenticate().then(() => {
                console.log("DB Connected successfully.!");
            });
        } catch (e) {
            console.error(e);
        }

    }
}