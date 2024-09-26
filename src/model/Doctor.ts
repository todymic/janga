import {
    BelongsTo,
    BelongsToMany,
    Column,
    DataType,
    DefaultScope,
    ForeignKey,
    HasMany,
    Model,
    Table
} from "sequelize-typescript";
import {Language} from "./Language";
import {Speciality} from "./Speciality";
import {DoctorSpecialities} from "./DoctorSpecialities";
import {DoctorLanguages} from "./DoctorLanguages";
import {Office} from "./Office";
import Person, {IPerson} from "./common/Person";

 interface IDoctor extends IPerson {
    degrees?: string;
    languages?: Language[] |null;
    specialities?: Speciality[] | null;
}

@Table({
    tableName: "Doctor"
})
@DefaultScope(() => ({
    include: [Office, Language, Speciality]
}))
export class Doctor extends Person implements IDoctor {

    @Column({ allowNull: false })
    firstname!: string;

    @Column({ allowNull: false })
    lastname!: string;

    @Column({ allowNull: false })
    email!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    description!: string;

    @BelongsToMany(() => Language, () => DoctorLanguages)
    languages?: Array<Language & {DoctorLanguages: DoctorLanguages}>;

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
    officeId!: number

    @BelongsTo(() => Office)
    office!: Office


}