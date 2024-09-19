import DoctorController from "../controller/doctor.controller";
import BaseRouter from "./BaseRouter";

class DoctorRouter extends BaseRouter {
    routes() {
        this.router.post('/new', DoctorController.createDoctor)
    }
}

export default new DoctorRouter().router;