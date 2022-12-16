import {Router} from "express";
import categoryController from "../controller/user-controller";

export const categoryRouter = Router();
categoryRouter.get('', categoryController.findAll)
categoryRouter.post('', categoryController.addC)
