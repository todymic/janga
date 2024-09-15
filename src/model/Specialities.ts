import {AutoIncrement, Column, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table
export class Language extends Model<Language> {


    @AutoIncrement
    @Column({ allowNull: false })
    @PrimaryKey
    id !: number;

    @Column({ allowNull: false })
    name!: string;

    @Column({ allowNull: false })
    code!: string;
}