import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {Language} from "./Language";
import {Speciality} from "./Speciality";
import {DoctorSpecialities} from "./DoctorSpecialities";
import {DoctorLanguages} from "./DoctorLanguages";
import {Office} from "./Office";


export interface IDoctor {
    firstname: string;
    lastname: string;
    office: Office | null;
    description?: string|null;
    degrees?: string;
    languages?: Language[] |null;
    specialities?: Speciality[] | null;

}

@Table({
    tableName: "Doctor"
})
export class Doctor extends Model implements IDoctor{

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
    availabilities!: string

    @Column({
        type: DataType.JSON,
    })
    degrees!: string

    @ForeignKey(() => Office)
    @Column
    officeId !: number

    @BelongsTo(() => Office)
    office !: Office


}