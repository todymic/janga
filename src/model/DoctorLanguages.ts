import {Column, ForeignKey, Model, Table} from "sequelize-typescript";
import {Doctor} from "./Doctor";
import {Speciality} from "./Speciality";
import {Language} from "./Language";

@Table
export class DoctorLanguages extends Model<DoctorLanguages> {

    @ForeignKey(() => Doctor)
    @Column
    doctorId!: number

    @ForeignKey(() => Language)
    @Column
    LanguageId!: number
}