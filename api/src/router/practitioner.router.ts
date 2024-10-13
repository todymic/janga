import PractitionerController from "../controller/practitioner.controller";
import BaseRouter from "./BaseRouter";
import validation from "../middleware/validation";
import {practitionerPayload} from "../validator/practitioner.validator";
import {faker} from "@faker-js/faker";
import {PractitionerRepository} from "../repository/practitioner.repository";
import {Request, Response} from "express";
class PractitionerRouter extends BaseRouter {
    routes() {
        this.router.post('/new', validation(practitionerPayload), PractitionerController.create);
        this.router.get('/:id/profile', PractitionerController.profile)
        this.router.get('/:type', PractitionerController.getPractitionersByTypeList)
        this.router.get('', PractitionerController.all)
        this.router.put('/:id', validation(practitionerPayload), PractitionerController.update)
        this.router.delete('/:id', PractitionerController.delete)
        this.router.post('/fixture', (req: Request, res: Response) => {

            const practitioners = faker.helpers.multiple(() => {
                return {
                    "firstname": faker.person.firstName(),
                    "lastname": faker.person.lastName(),
                    "description": faker.lorem.text(),
                    "email": faker.internet.email(),
                    "active": String(faker.number.binary({min: 0, max: 1})),
                    "office": {
                        "name": faker.company.name(),
                        "street": faker.location.street(),
                        "city": faker.location.city(),
                        "zipcode": faker.location.zipCode(),
                        "country":faker.location.country()
                    },
                    "languages": [
                        {
                            "name": "Français",
                            "code": "fr"
                        },
                        {
                            "name": "Anglais",
                            "code": "en"
                        }
                    ],
                    "specialities": [
                        {
                            "name": "Médecine générale",
                            "lang": "fr"
                        }
                    ]
                }
            }, {
                count: 10,
            });

            const practitionerRepository = new PractitionerRepository();

            practitioners.forEach(async (practitioner: any) => {
                await practitionerRepository.save(practitioner);
            });
            res.status(200).send({
                status: true,
                message: 'OK'
            })
        });

    }

}

export default new PractitionerRouter().router;
