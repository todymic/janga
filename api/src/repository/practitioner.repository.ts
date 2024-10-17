import {Sequelize} from "sequelize-typescript";
import {Practitioner} from "../model/Practitioner";
import {Office} from "../model/Office";
import {Language} from "../model/Language";
import {Speciality} from "../model/Speciality";
import {Op} from "sequelize";
import slugify from "slugify";
import {NotFoundException} from "../exceptions/NotFoundException";
import {Service} from "typedi";

interface PractitionerRepoInterface {

    save(reqPractitioner: Practitioner): Promise<Practitioner>;

    getById(practitionerId: number): Promise<Practitioner>;

    getAll(where?: object): Promise<Practitioner[]>;

    update(id: number, practitioner: Practitioner): Promise<Practitioner>;

    delete(practitionerId: number): Promise<void>;
}


@Service()
export class PractitionerRepository implements PractitionerRepoInterface {

    async delete(practitionerId: number): Promise<void> {

        await Practitioner.findOne({where: {id: practitionerId}})
            .then((practitioner: Practitioner | null) => {
                if (!practitioner) {
                    throw new NotFoundException(`Practitioner ${practitionerId} not found`);
                }

                practitioner.destroy();
            });
    }

    async getAll(where?: object): Promise<Practitioner[]> {

        return await Practitioner.findAll({
            include: [ Office, Speciality, Language ]
        });
    }

    async getById(practitionerId: number): Promise<Practitioner> {

        return await Practitioner
            .findByPk(practitionerId, {
                include: [ Office, Speciality, Language ]
            })
            .then((practitioner: Practitioner | null) => {

                if (!practitioner) {
                    throw new NotFoundException(`Practitioner ${practitionerId} not found`);
                }

                return practitioner;
            });


    }

    async save(reqPractitioner: Practitioner): Promise<Practitioner> {
        return await reqPractitioner.save();
    }

    async update(id: number, practitioner: Practitioner): Promise<Practitioner> {
        try {
            return await Practitioner.findOne({
                where: {id: id}
            })
                .then((updatedPractitioner: Practitioner | null) => {

                    if (!updatedPractitioner) {
                        throw new NotFoundException(`Practitioner ${id} not found`);
                    }

                    updatedPractitioner.firstname = practitioner.firstname;
                    updatedPractitioner.lastname = practitioner.lastname;
                    updatedPractitioner.description = practitioner.description;
                    updatedPractitioner.email = practitioner.email;
                    updatedPractitioner.active = practitioner.active ? true : false;

                    if (practitioner.description) {
                        updatedPractitioner.description = practitioner.description;
                    }

                    if (practitioner.languages) {
                        updatedPractitioner.languages = practitioner.languages;
                    }

                    if (practitioner.specialities) {
                        updatedPractitioner.specialities = practitioner.specialities;
                    }

                    if (practitioner.degrees) {
                        updatedPractitioner.degrees = practitioner.degrees;
                    }

                    return updatedPractitioner.update(updatedPractitioner);

                });


        } catch (e) {
            console.log(e)
            throw e;
        }

    }

    async getAllByType(type: string): Promise<Practitioner[]> {
        return await Practitioner.findAll({
            include: {
                model: Speciality,
                where: {
                    slug: {[Op.eq]: type}
                }
            }
        });
    }
}
