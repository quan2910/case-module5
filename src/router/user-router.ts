import {Router} from "express";
import userController from "../controller/user-controller";
import {auth} from "../middleware/auth";

export const userRouter = Router();

userRouter.post('/register', userController.register);
userRouter.post('/login',userController.login);
// userRouter.use(auth)
userRouter.get('', userController.getAll);
userRouter.delete('/:id',userController.delete);
userRouter.put('/:id',userController.edit);
userRouter.get('/find-by-name',userController.findByName);










