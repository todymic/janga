import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Language} from "./Language";
import {Speciality} from "./Speciality";
import {DoctorSpecialities} from "./DoctorSpecialities";
import {DoctorLanguages} from "./DoctorLanguages";

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