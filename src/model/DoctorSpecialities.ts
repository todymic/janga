import {Column, ForeignKey, Model, Table} from "sequelize-typescript";
import {Doctor} from "./Doctor";
import {Speciality} from "./Speciality";

@Table
export class DoctorSpecialities extends Model<DoctorSpecialities> {

    @ForeignKey(() => Doctor)
    @Column
    doctorId!: number

    @ForeignKey(() => Speciality)
    @Column
    specialityId!: number
}