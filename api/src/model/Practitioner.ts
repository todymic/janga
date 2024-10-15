import {
    BeforeBulkCreate, BeforeCreate,
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
import {PractitionerSpecialities} from "./PractitionerSpecialities";
import {PractitionerLanguages} from "./PractitionerLanguages";
import {Office} from "./Office";
import Person, {IPerson} from "./common/Person";

 export interface IPractitioner extends IPerson {
    degrees?: string;
    languages?: Language[] |null;
    specialities?: Speciality[] | null;
}

@Table({
    tableName: "Practitioner"
})
@DefaultScope(() => ({
    include: [Office, Language, Speciality]
}))
export class Practitioner extends Person implements IPractitioner {

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

    @BelongsToMany(() => Language, () => PractitionerLanguages)
    languages?: Array<Language & {PractitionerLanguages: PractitionerLanguages}>;

    @BelongsToMany(() => Speciality, () => PractitionerSpecialities)
    specialities?: Array<Speciality & { PractitionerSpecialities: PractitionerSpecialities}>;


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
