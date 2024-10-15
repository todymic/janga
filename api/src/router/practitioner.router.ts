import PractitionerController from "../controller/practitioner.controller";
import validation from "../middleware/validation";
import {practitionerPayload} from "../validator/practitioner.validator";
import BaseRouter from "./BaseRouter";

class PractitionerRouter extends BaseRouter {
    routes() {
        this.router.post('/new', validation(practitionerPayload), PractitionerController.create);
        this.router.get('/:id/profile', PractitionerController.getOne)
        this.router.get('/:type', PractitionerController.getPractitionersByTypeList)
        this.router.get('', PractitionerController.all)
        this.router.put('/:id', validation(practitionerPayload), PractitionerController.update)
        this.router.delete('/:id', PractitionerController.delete)
    }

}

export default new PractitionerRouter().router;
