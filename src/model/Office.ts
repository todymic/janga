import {Column, HasMany, Model, Scopes, Table} from "sequelize-typescript";
import {Doctor} from "./Doctor";
import {IAddress} from "./common/address";

@Table({
    tableName: 'Office'
})

@Scopes (() => ({
    doctors: {
        include: [Doctor]
    }
}))
export class Office extends Model implements IAddress {

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