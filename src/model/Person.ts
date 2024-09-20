import {Column, DataType, Model} from "sequelize-typescript";

export interface IPerson {
    firstname: string;
    lastname: string;
    email: string;
    description?: string|null;
}
abstract class Person extends Model implements IPerson {

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
}

export default Person