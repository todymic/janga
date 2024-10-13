import {Column, Model, Table} from "sequelize-typescript";
import slugify from "slugify";

@Table({
    tableName: "Speciality"
})
export class Speciality extends Model<Speciality> {

    @Column({ allowNull: false })
    name!: string;

    @Column({ allowNull: false })
    slug!: string;

    @Column({ allowNull: false })
    lang!: string;
}
