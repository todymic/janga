import {Request, Response} from "express";
import BaseRouter from "../router/BaseRouter";

interface ICrudController {
    create(req: Request, res: Response): void
    profile(req: Request, res: Response): void
    update(req: Request, res: Response): void
    delete(req: Request, res: Response): void
    all(req: Request, res: Response): void
}
abstract class CrudController implements ICrudController {
    abstract all(req: Request, res: Response): void

    abstract create(req: Request, res: Response): void

    abstract delete(req: Request, res: Response): void

    abstract profile(req: Request, res: Response): void

    abstract update(req: Request, res: Response): void
}

export default CrudController;