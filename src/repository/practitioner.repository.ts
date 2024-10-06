import {Sequelize} from "sequelize-typescript";
import {Practitioner} from "../model/Practitioner";
import {Office} from "../model/Office";
import {Language} from "../model/Language";
import {Speciality} from "../model/Speciality";
interface PractitionerRepoInterface {

    save(reqPractitioner: Practitioner): Promise<Practitioner>;
    getById(practitionerId: string): Promise<Practitioner | null>;
    getAll(type: string): Promise<Practitioner[] | null>;
    update(id:string, practitioner: Practitioner): Promise<Practitioner|null>;
    delete(practitionerId: string): Promise<void>;
}
export class PractitionerRepository implements PractitionerRepoInterface {

    async delete(practitionerId: string): Promise<void> {

        try {

            const practitioner = await Practitioner.findOne({ where: { id: practitionerId } });

            if(!practitioner) {
                throw new Error("Practitioner not found");
            }

            await practitioner.destroy();


        }catch (e) {
            throw e;
        }
    }

    async getAll(): Promise<Practitioner[] | null> {

        try {
            return await Practitioner.findAll();
        } catch (e) {
            console.log(e)
            throw e;
        }
    }

    async getById(practitionerId: string): Promise<Practitioner | null> {

        try {
            const practitioner = await Practitioner.findOne({ where: { id: practitionerId } });

            if(!practitioner) {
                throw new Error("Practitioner not found");
            }

            return practitioner;
        } catch (e) {
            console.log(e)
            throw e;
        }
    }

    async save(reqPractitioner: Practitioner): Promise<Practitioner> {

        try {
            return await Practitioner.create({
                firstname: reqPractitioner.firstname,
                lastname: reqPractitioner.lastname,
                description: reqPractitioner.description,
                email: reqPractitioner.email,
                languages: reqPractitioner.languages,
                specialities: reqPractitioner.specialities,
                degrees: reqPractitioner.degrees,
                office: reqPractitioner.office,
                active: reqPractitioner.active ? "1" : "0",

            }, {
                include: [Office, Language, Speciality],
            })
        } catch (e: any) {
            throw e;
        }

    }

   async update(id: string, practitioner: Practitioner): Promise<Practitioner> {
        try {
           const updatedPractitioner = await Practitioner.findOne({ where: { id: id }, include: [Office, Language, Speciality] });

           if(!updatedPractitioner) {
               throw new Error("Practitioner not found");
           }

            updatedPractitioner.firstname = practitioner.firstname;
            updatedPractitioner.lastname = practitioner.lastname;
            updatedPractitioner.description = practitioner.description;
            updatedPractitioner.email = practitioner.email;
            updatedPractitioner.active = practitioner.active ? true : false;

            if(practitioner.description) {
                updatedPractitioner.description = practitioner.description;
            }

            if(practitioner.languages) {
                updatedPractitioner.languages = practitioner.languages;
            }

            if(practitioner.specialities) {
                updatedPractitioner.specialities = practitioner.specialities;
            }

            if(practitioner.degrees) {
                updatedPractitioner.degrees = practitioner.degrees;
            }

            return updatedPractitioner.save();


        } catch (e) {
            console.log(e)
            throw e;
        }

    }

    async getAllByType(type: string): Promise<Practitioner[]|undefined> {
        try {
            return await Practitioner.findAll({});
        } catch (e) {
            console.log(e)
            throw e;
        }
    }
}
