import DoctorController from "../controller/doctor.controller";
import BaseRouter from "./BaseRouter";

class DoctorRouter extends BaseRouter {
    routes() {
        this.router.post('/new', DoctorController.new)
        this.router.get('/', DoctorController.all)
        this.router.get('/:id', DoctorController.profile)
        this.router.put('/:id/update', DoctorController.update)
        this.router.delete('/:id/delete', DoctorController.delete)
    }
}

export default new DoctorRouter().router;