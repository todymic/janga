import {Sequelize} from "sequelize-typescript";
import {Doctor} from "../model/Doctor";
import {Office} from "../model/Office";
interface DoctorRepoInterface {

    save(reqDoctor: Doctor): Promise<Doctor>;
    getById(doctorId: string): Promise<Doctor | null>;
    getAll(): Promise<Doctor[] | null>;
    update(doctor: Doctor): Promise<Doctor|null>;
    delete(doctorId: string): Promise<void>;
}
export class DoctorRepository implements DoctorRepoInterface {

    async delete(doctorId: string): Promise<void> {

        try {

            const doctor = await Doctor.findOne({ where: { id: doctorId } });

            if(!doctor) {
                throw new Error("Doctor not found");
            }

            await doctor.destroy();

        }catch (e) {
            throw e;
        }
    }

    async getAll(): Promise<Doctor[] | null> {

        try {
            return await Doctor.findAll({ include: Office });
        } catch (e) {
            console.log(e)
            throw e;
        }
    }

    async getById(doctorId: string): Promise<Doctor | null> {
        try {
            const doctor = await Doctor.findOne({ where: { id: doctorId } });

            if(!doctor) {
                throw new Error("Doctor not found");
            }

            return doctor;
        } catch (e) {
            console.log(e)
            throw e;
        }
    }

    async save(reqDoctor: Doctor): Promise<Doctor> {

        try {
            return await Doctor.create({
                firstname: reqDoctor.firstname,
                lastname: reqDoctor.lastname,
                description: reqDoctor.description,
                languages: reqDoctor.languages,
                specialities: reqDoctor.specialities,
                degrees: reqDoctor.degrees,
                office: reqDoctor.office,
            }, {
                include: [Office],
            })
        } catch (e: any) {
            throw new Error(e.message);
        }

    }

   async update(doctor: Doctor): Promise<Doctor> {
        try {
           const updatedDoctor = await Doctor.findOne({ where: { id: doctor.id } });

           if(!updatedDoctor) {
               throw new Error("Doctor not found");
           }

            updatedDoctor.firstname = doctor.firstname;
            updatedDoctor.lastname = doctor.lastname;

            if(doctor.description) {
                updatedDoctor.description = doctor.description;
            }

            if(doctor.languages) {
                updatedDoctor.languages = doctor.languages;
            }

            if(doctor.specialities) {
                updatedDoctor.specialities = doctor.specialities;
            }

            if(doctor.degrees) {
                updatedDoctor.degrees = doctor.degrees;
            }

            return updatedDoctor;


        } catch (e) {
            console.log(e)
            throw e;
        }

    }
}