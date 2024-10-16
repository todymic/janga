import {Column, DefaultScope, Model, Table} from "sequelize-typescript";

@Table({
    tableName: "Language"
})
@DefaultScope(() => ({
    order: ['id']
}))
export class Language extends Model {

    @Column({ allowNull: false })
    name!: string;

    @Column({ allowNull: false })
    code!: string;
}
