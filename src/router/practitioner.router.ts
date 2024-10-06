import PractitionerController from "../controller/practitioner.controller";
import BaseRouter from "./BaseRouter";
import validation from "../middleware/validation";
import {practitionerPayload} from "../validator/practitioner.validator";

class PractitionerRouter extends BaseRouter {
    routes() {
        this.router.post('/new', validation(practitionerPayload), PractitionerController.create)
        this.router.get('', PractitionerController.all)
        this.router.get('/:id', PractitionerController.profile)
        this.router.put('/:id', validation(practitionerPayload), PractitionerController.update)
        this.router.delete('/:id', PractitionerController.delete)
    }

}

export default new PractitionerRouter().router;
