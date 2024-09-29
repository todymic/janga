import {Doctor} from "../model/Doctor";
import {Request, Response} from "express";
import {DoctorRepository} from "../repository/doctor.repository";
import CrudController from "./crud.controller";

class DoctorController extends CrudController {
    async update(req: Request, res: Response) {
        try {

            const doctorRepository = new DoctorRepository();
            const updatedDoctor = await doctorRepository.update(req.params.id, req.body);

            res.status(200).send({
                status: 'OK',
                doctor: updatedDoctor
            })

        } catch (e) {
            console.log(e);
            res.status(500).send({
                status: false,
                message: 'Error while updating doctor',
            })
        }
    };

    async delete(req: Request, res: Response) {
        try {

            const doctorRepository = new DoctorRepository();
            await doctorRepository.delete(req.params.id);

            res.status(200).send({
                status: true,
                message: "Doctor deleted successfully",
            })

        } catch (e) {
            console.log(e);
            res.status(500).send({
                status: false,
                message: 'Error while deleting doctor',
            })
        }
    }

    async all(req: Request, res: Response) {
        try {

            const doctorRepository = new DoctorRepository();
            const doctors = await doctorRepository.getAll(req.params.type);

            res.status(200).send({
                status: true,
                doctors: doctors
            })

        } catch (e) {
            console.log(e);
            res.status(500).send({
                status: false,
                message: 'Error while getting all doctors',
            })
        }
    };

    async create(req: Request, res: Response) {
        try {

            //create office
            const doctorRepository = new DoctorRepository();
            const newDoctor = await doctorRepository.save(req.body);

            res.status(201).send({
                message: `Successfully created to ${newDoctor.firstname} ${newDoctor.lastname}`,
                status: true
            });


        } catch (e) {
            console.log(e);
            res.status(500).send({
                status: false,
                message: 'Error while creating new doctor',
            })
        }
    }

    async profile(req: Request, res: Response) {
        try {

            const doctorRepository = new DoctorRepository();
            const doctor = await doctorRepository.getById(req.params.id);

            res.status(200).send({
                doctor: doctor,
                status: true
            })

        } catch (e) {
            console.log(e);
            res.status(500).send({
                status: false,
                message: 'Error while getting doctor profile',
            })
        }
    }
}


export default new DoctorController()
