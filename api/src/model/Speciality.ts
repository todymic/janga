import {
    BeforeBulkCreate, BeforeBulkUpdate, BeforeCreate, BeforeUpdate, BeforeValidate,
    Column,
    Model,
    Table, Unique
} from "sequelize-typescript";
import slugify from "slugify";

@Table({
    tableName: "Speciality"
})
export class Speciality extends Model {

    @Column({ allowNull: false })
    name!: string;

    @Unique
    @Column({ allowNull: false})
    slug!: string;


    @BeforeValidate
    @BeforeUpdate
    static onUpdateSlugify(instance: Speciality) {
        instance.slug = slugify(instance.name, { lower: true });
    }


}
