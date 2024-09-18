import {Column, HasMany, Model, Table} from "sequelize-typescript";
import {Doctor} from "./Doctor";

@Table({
    tableName: 'Office'
})
export class Office extends Model {
    @HasMany(() => Doctor)
    doctors!: Doctor[];

    @Column
    street!: string;

    @Column
    city!: string;

    @Column
    zipcode!: string;

    @Column
    country!: string;

}