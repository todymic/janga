import {Column, DefaultScope, HasMany, Model, Scopes, Table} from "sequelize-typescript";
import {Practitioner} from "./Practitioner";
import {IAddress} from "./common/address";

@Table({
    tableName: 'Office'
})

@DefaultScope(() => ({
    order: ['id']
}))

@Scopes (() => ({
    practitioners: {
        include: [Practitioner]
    }
}))
export class Office extends Model implements IAddress {

    @Column
    name!: string;

    @HasMany(() => Practitioner)
    practitioners!: Practitioner[];

    @Column
    street!: string;

    @Column
    city!: string;

    @Column
    zipcode!: string;

    @Column
    country!: string;
}
