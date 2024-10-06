import {Column, Model, Table} from "sequelize-typescript";

@Table({
    tableName: "Language"
})
export class Language extends Model {

    @Column({ allowNull: false })
    name!: string;

    @Column({ allowNull: false })
    code!: string;
}
