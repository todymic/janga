import {AutoIncrement, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import {Speciality} from "./Speciality";
import {Doctor} from "./Doctor";

@Table({
    tableName: "Language"
})
export class Language extends Model<Language> {

    @Column({ allowNull: false })
    name!: string;

    @Column({ allowNull: false })
    code!: string;
}