import OfficeController from "../controller/office.controller";
import BaseRouter from "./BaseRouter";

class OfficeRouter extends BaseRouter {
    routes() {
        this.router.post('/new', OfficeController.new)
    }
}

export default new OfficeRouter().router;