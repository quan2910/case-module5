import {Router} from "express";
import UserController from "../controller/user-controller";
import userController from "../controller/user-controller";

export const userRouter = Router();
userRouter.get('/lists', userController.getAll);










