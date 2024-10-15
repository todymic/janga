import OfficeController from "../controller/office.controller";
import BaseRouter from "./BaseRouter";

class OfficeRouter extends BaseRouter {
    routes() {
        this.router.post('/new', OfficeController.create)
        this.router.get('/', OfficeController.all)
        this.router.get('/:id', OfficeController.getOne)
        this.router.put('/:id', OfficeController.update)
        this.router.delete('/:id', OfficeController.delete)
    }
}

export default new OfficeRouter().router;
