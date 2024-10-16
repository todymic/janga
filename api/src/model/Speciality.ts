import {
    BeforeBulkCreate, BeforeBulkUpdate, BeforeCreate, BeforeUpdate, BeforeValidate,
    Column, DefaultScope,
    Model,
    Table, Unique
} from "sequelize-typescript";
import slugify from "slugify";

@Table({
    tableName: "Speciality"
})
@DefaultScope(() => ({
    order: ['id']
}))
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
