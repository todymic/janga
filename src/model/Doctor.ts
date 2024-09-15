import {AutoIncrement, BelongsToMany, Column, DataType, HasMany, Model, PrimaryKey, Table} from "sequelize-typescript";
import {Language} from "./Language";

@Table
export class Doctor extends Model<Doctor> {


    @AutoIncrement
    @Column({ allowNull: false })
    @PrimaryKey
    id !: number;

    @Column({ allowNull: false })
    firstname!: string;

    @Column({ allowNull: false })
    lastname!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    description!: string;

    @HasMany(() => Language)
    languages!: string[];

    @BelongsToMany(() => Language, () => Language)
    specialities!: string[];



}