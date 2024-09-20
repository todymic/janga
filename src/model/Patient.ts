import {Column, DataType, Model, Table} from "sequelize-typescript";
import Person from "./Person";

@Table({
    tableName: "Patient",
})
export class Patient extends Person {

    @Column
    address!: string;

}