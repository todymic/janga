import {Speciality} from "../model/Speciality";
import {NotFoundException} from "../exceptions/NotFoundException";

interface SpecialityRepoInterface {
    save(reqSpeciality: Speciality): Promise<Speciality>;

    getById(specialityId: string): Promise<Speciality | null>;

    getAll(type: string): Promise<Speciality[] | null>;

    update(id: string, speciality: Speciality): Promise<Speciality | null>;

    delete(specialityId: string): Promise<void>;
}


export class SpecialityRepository implements SpecialityRepoInterface {

    async delete(specialityId: string): Promise<void> {

        const speciality = await Speciality.findOne({where: {id: specialityId}});

        if (!speciality) {
            throw new NotFoundException("Speciality not found");
        }

        await speciality.destroy();
    }

    async getAll(): Promise<Speciality[] | null> {

        return await Speciality.findAll();
    }

    async getById(specialityId: string): Promise<Speciality> {

        const speciality = await Speciality.findOne({where: {id: specialityId}});

        if (!speciality) {
            throw new NotFoundException(`Speciality ID ${specialityId} not found`);
        }

        return speciality;
    }

    async save(reqSpeciality: Speciality): Promise<Speciality> {

        let newSpeciality = {
            name: reqSpeciality.name
        }

        return await Speciality.create(newSpeciality)

    }

    async update(id: string, speciality: Speciality): Promise<Speciality | null> {

        return Speciality.findOne({
            where: {
                id: id
            }
        }).then((existSpeciality) => {

            if(!existSpeciality) {
                throw new NotFoundException(`Speciality with id ${id} not found`);
            }

            existSpeciality.name = speciality.name
            return existSpeciality.save({
                validate: false
            })

        })

    }
}
