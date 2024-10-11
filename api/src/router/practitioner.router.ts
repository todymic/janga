import PractitionerController from "../controller/practitioner.controller";
import BaseRouter from "./BaseRouter";
import validation from "../middleware/validation";
import {createPractitionerPayload, updatePractitionerPayload} from "../validator/practitioner.validator";

class PractitionerRouter extends BaseRouter {
    routes() {
        this.router.post('/new', validation(createPractitionerPayload), PractitionerController.create);
        this.router.get('/:id/profile', PractitionerController.profile)
        this.router.get('/:type', PractitionerController.getPractitionersByTypeList)
        this.router.get('', PractitionerController.all)
        this.router.put('/:id', validation(updatePractitionerPayload), PractitionerController.update)
        this.router.delete('/:id', PractitionerController.delete)
    }

}

export default new PractitionerRouter().router;
