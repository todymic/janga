
import e, {Request, Response} from "express";
import CrudController from "./crud.controller";
import {OfficeRepository} from "../repository/office.repository";

class OfficeController extends CrudController{

    async update(req: Request, res: Response) {
        const officeRepository = new OfficeRepository();
        await officeRepository.update(req.params.id, req.body)
            .then((updatedOffice) => {
                res.status(200).send({
                    status: 'OK',
                    office: updatedOffice
                })
            })
            .catch(e => {
                OfficeController.sendError(res, e, ' Error when updating the office')
            });
    };

    async delete(req: Request, res: Response) {
        try {

            const officeRepository = new OfficeRepository();
            await officeRepository.delete(req.params.id);

            res.status(200).send({
                status: true,
                message: "Office deleted successfully",
            })

        } catch (e) {
            console.log(e);
            res.status(500).send({
                status: false,
                message: 'Error while deleting office',
            })
        }
    }

    async all(req: Request, res: Response) {
        try {

            const officeRepository = new OfficeRepository();
            const offices = await officeRepository.getAll();

            res.status(200).send({
                status: true,
                offices: offices
            })

        } catch (e) {
            console.log(e);
            res.status(500).send({
                status: false,
                message: 'Error while getting all offices',
            })
        }
    };

    async create(req: Request, res: Response) {
        try {

            //create office
            const officeRepository = new OfficeRepository();
            const newOffice = await officeRepository.save(req.body);

            res.status(201).send({
                message: `Successfully created to ${newOffice.name}`,
                status: true
            });


        } catch (e) {
            console.log(e);
            res.status(500).send({
                status: false,
                message: 'Error while creating new office',
            })
        }
    }

    async getOne(req: Request, res: Response) {
        try {

            const officeRepository = new OfficeRepository();
            const office = await officeRepository.getById(req.params.id);

            res.status(200).send({
                office: office,
                status: true
            })

        } catch (e) {
            console.log(e);
            res.status(500).send({
                status: false,
                message: 'Error while getting office profile',
            })
        }
    }

}


export default new OfficeController()
