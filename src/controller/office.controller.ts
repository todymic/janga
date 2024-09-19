import {Office} from "../model/Office";
import {Request, Response} from "express";
import {OfficeRepository} from "../repository/office.repository";

class OfficeController {

    async new(req: Request, res: Response) {
        try {
            const repo = new OfficeRepository()
            await repo.save(req.body).then(err => {
                res.status(201).send({
                    message: `Successfully created `,
                    status: 'OK'
                });
            });
        } catch (e) {
            throw e;
        }
    }

}


export default new OfficeController()