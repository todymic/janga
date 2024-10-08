import {Column, DataType, Model, Table} from "sequelize-typescript";
import Person from "./common/Person";
import {IAddress} from "./common/address";

@Table({
    tableName: "Patient",
})
export class Patient extends Person implements IAddress {

    @Column
    city!: string;

    @Column
    country!: string;

    @Column
    street!: string;

    @Column
    zipcode!: string;


}