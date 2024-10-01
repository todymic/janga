import {Practitioner} from "../model/Practitioner";
import {Request, Response} from "express";
import {PractitionerRepository} from "../repository/practitioner.repository";
import CrudController from "./crud.controller";

class PractitionerController extends CrudController {
    async update(req: Request, res: Response) {
        try {

            const practitionerRepository = new PractitionerRepository();
            const updatedPractitioner = await practitionerRepository.update(req.params.id, req.body);

            res.status(200).send({
                status: 'OK',
                practitioner: updatedPractitioner
            })

        } catch (e) {
            console.log(e);
            res.status(500).send({
                status: false,
                message: 'Error while updating practitioner',
            })
        }
    };

    async delete(req: Request, res: Response) {
        try {

            const practitionerRepository = new PractitionerRepository();
            await practitionerRepository.delete(req.params.id);

            res.status(200).send({
                status: true,
                message: "Practitioner deleted successfully",
            })

        } catch (e) {
            console.log(e);
            res.status(500).send({
                status: false,
                message: 'Error while deleting practitioner',
            })
        }
    }

    async all(req: Request, res: Response) {
        try {

            const practitionerRepository = new PractitionerRepository();
            const practitioners = await practitionerRepository.getAll();

            res.status(200).send({
                status: true,
                practitioners: practitioners
            })

        } catch (e) {
            console.log(e);
            res.status(500).send({
                status: false,
                message: 'Error while getting all practitioners',
            })
        }
    };

    async create(req: Request, res: Response) {
        try {

            //create office
            const practitionerRepository = new PractitionerRepository();
            const newPractitioner = await practitionerRepository.save(req.body);

            res.status(201).send({
                message: `Successfully created to ${newPractitioner.firstname} ${newPractitioner.lastname}`,
                status: true
            });


        } catch (e) {
            console.log(e);
            res.status(500).send({
                status: false,
                message: 'Error while creating new practitioner',
            })
        }
    }

    async profile(req: Request, res: Response) {
        try {

            const practitionerRepository = new PractitionerRepository();
            const practitioner = await practitionerRepository.getById(req.params.id);

            res.status(200).send({
                practitioner: practitioner,
                status: true
            })

        } catch (e) {
            console.log(e);
            res.status(500).send({
                status: false,
                message: 'Error while getting practitioner profile',
            })
        }
    }

    async getPractitionersList(req: Request, res: Response) {
        try {

            const practitionerRepository = new PractitionerRepository();
            const practitioner = await practitionerRepository.getAllByType(req.params.type);

            res.status(200).send({
                practitioner: practitioner,
                status: true
            })

        } catch (e) {
            console.log(e);
            res.status(500).send({
                status: false,
                message: 'Error while getting practitioner profile',
            })
        }
    }
}


export default new PractitionerController()
