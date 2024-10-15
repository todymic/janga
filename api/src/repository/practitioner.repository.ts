import {Sequelize} from "sequelize-typescript";
import {Practitioner} from "../model/Practitioner";
import {Office} from "../model/Office";
import {Language} from "../model/Language";
import {Speciality} from "../model/Speciality";
import {Op} from "sequelize";
import slugify from "slugify";
import {NotFoundException} from "../exceptions/NotFoundException";

interface PractitionerRepoInterface {
    save(reqPractitioner: Practitioner): Promise<Practitioner>;

    getById(practitionerId: string): Promise<Practitioner | null>;

    getAll(type: string): Promise<Practitioner[] | null>;

    update(id: string, practitioner: Practitioner): Promise<Practitioner | null>;

    delete(practitionerId: string): Promise<void>;
}

interface PractitionerUpSet {

}

export class PractitionerRepository implements PractitionerRepoInterface {

    async delete(practitionerId: string): Promise<void> {

        try {

            const practitioner = await Practitioner.findOne({where: {id: practitionerId}});

            if (!practitioner) {
                throw new Error(`Practitioner ${practitionerId} not found`);
            }

            await practitioner.destroy();


        } catch (e) {
            throw e;
        }
    }

    async getAll(): Promise<Practitioner[] | null> {

        return await Practitioner.findAll();
    }

    async getById(practitionerId: string): Promise<Practitioner> {

        const practitioner = await Practitioner.findOne({where: {id: practitionerId}});

        if (!practitioner) {
            throw new NotFoundException(`Practitioner ${practitionerId} not found`);
        }

        return practitioner;
    }

    async save(reqPractitioner: Practitioner): Promise<Practitioner> {

            let newPractitioner = {
                firstname: reqPractitioner.firstname,
                lastname: reqPractitioner.lastname,
                description: reqPractitioner.description,
                email: reqPractitioner.email,
                languages: reqPractitioner.languages,
                degrees: reqPractitioner.degrees,
                office: reqPractitioner.office,
                active: reqPractitioner.active ? "1" : "0",
                specialities: reqPractitioner.specialities
            }


            return await Practitioner.create(newPractitioner)

    }

    async update(id: string, practitioner: Practitioner): Promise<Practitioner> {
        try {
            const updatedPractitioner = await Practitioner.findOne({
                where: {id: id},
                include: [Office, Language, Speciality]
            });

            if (!updatedPractitioner) {
                throw new Error("Practitioner not found");
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
