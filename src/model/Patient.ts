import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({
    tableName: "Patient",
})
export class Patient extends Model<Patient> {

    @Column({ allowNull: false })
    firstname!: string;

    @Column({ allowNull: false })
    lastname!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    description!: string;

    @Column
    address!: string;

}