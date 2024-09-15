import {Sequelize} from "sequelize";
import dotenv from "dotenv";

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

    public connect() {

        try {

            this.sequelize = new Sequelize(this.DB_NAME, this.DB_USER, this.DB_PASSWORD, {
                host: this.DB_HOST,
                dialect: "postgres"
            } );
            this.sequelize?.authenticate().then(() => {
                console.log("DB Connected!");
            });
        } catch (e) {
            console.error(e);
        }

    }
}