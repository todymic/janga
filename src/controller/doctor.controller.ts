import {Doctor} from "../model/Doctor";
import {Request, Response} from "express";
import {DoctorRepository} from "../repository/doctor.repository";
import {OfficeRepository} from "../repository/office.repository";

class DoctorController {
    async update(req: Request, res: Response) {
        try {

            const doctorRepository = new DoctorRepository();
            const doctors = await doctorRepository.getAll();

            res.status(200).send({
                doctors: doctors
            })

        } catch (e) {
            throw e;
        }
    };

    async delete(req: Request, res: Response) {
        try {

            const doctorRepository = new DoctorRepository();
            const doctors = await doctorRepository.getAll();

            res.status(200).send({
                doctors: doctors
            })

        } catch (e) {
            throw e;
        }
    }

    async all(req: Request, res: Response) {
        try {

            const doctorRepository = new DoctorRepository();
            const doctors = await doctorRepository.getAll();

            res.status(200).send({
                doctors: doctors
            })

        } catch (e) {
            throw e;
        }
    };

    async new(req: Request, res: Response) {
        try {
            const {firstname, lastname, description, office} = req.body;
            const doctor: Doctor = new Doctor();
            doctor.firstname = firstname;
            doctor.lastname = lastname;
            doctor.description = description;
            doctor.office = office;

            //create office
            const doctorRepository = new DoctorRepository();
            const newDoctor = await doctorRepository.save(doctor);

            res.status(201).send({
                message: `Successfully created to ${newDoctor.firstname} ${newDoctor.lastname}`,
                status: 'OK'
            });


        } catch (e) {
            throw e;
        }
    }

    async profile(req: Request, res: Response) {
        try {

            const doctorRepository = new DoctorRepository();
            const doctors = await doctorRepository.getById(req.params.id);

            res.status(200).send({
                doctors: doctors
            })

        } catch (e) {
            throw e;
        }
    }
}


export default new DoctorController()