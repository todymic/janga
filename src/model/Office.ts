import {Column, HasMany, Model, Scopes, Table} from "sequelize-typescript";
import {Doctor} from "./Doctor";

@Table({
    tableName: 'Office'
})

@Scopes (() => ({
    doctors: {
        include: [Doctor]
    }
}))
export class Office extends Model {

    @Column
    name!: string;

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