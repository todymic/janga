import {Doctor} from "../model/Doctor";
import {Request, Response} from "express";
import {DoctorRepository} from "../repository/doctor.repository";
import {OfficeRepository} from "../repository/office.repository";
import {log} from "node:util";

class DoctorController {

    async createDoctor(req: Request, res: Response) {
        try {
            const {firstname, lastname, description, office} = req.body;
            const doctor: Doctor = new Doctor();
            doctor.firstname = firstname;
            doctor.lastname = lastname;
            doctor.description = description;
            doctor.office = office;

            //create office
            const repo = new DoctorRepository()
            const newDoctor = await repo.save(doctor);

            res.status(201).send({
                message: `Successfully created to ${newDoctor.firstname} ${newDoctor.lastname}`,
                status: 'OK'
            });

        } catch (e) {
            throw e;
        }
    }
}


export default new DoctorController()