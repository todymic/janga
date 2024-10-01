import PractitionerController from "../controller/practitioner.controller";
import BaseRouter from "./BaseRouter";

class PractitionerRouter extends BaseRouter {
    routes() {
        this.router.post('/new', PractitionerController.create)
        this.router.get('/:type', PractitionerController.all)
        this.router.get('/:id', PractitionerController.profile)
        this.router.put('/:id', PractitionerController.update)
        this.router.delete('/:id', PractitionerController.delete)
    }
}

export default new PractitionerRouter().router;
