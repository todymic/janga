import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Language} from "./Language";
import {Speciality} from "./Speciality";
import {DoctorSpecialities} from "./DoctorSpecialities";
import {DoctorLanguages} from "./DoctorLanguages";

@Table({
    tableName: "Doctor"
})
export class Doctor extends Model<Doctor> {

    @Column({ allowNull: false })
    firstname!: string;

    @Column({ allowNull: false })
    lastname!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    description!: string;

    @BelongsToMany(() => Language, () => DoctorLanguages)
    languages ?: Array<Language & {DoctorLanguages: DoctorLanguages}>;

    @BelongsToMany(() => Speciality, () => DoctorSpecialities)
    specialities?: Array<Speciality & { DoctorSpecialities: DoctorSpecialities}>;

    @Column({
        type: DataType.JSON,
    })
    degrees!: string

    @Column
    address !:string


}