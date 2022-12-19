import blogController from "../controller/blog-controller";
import {Router} from "express";
import {auth} from "../middleware/auth";

export const blogRouter = Router()
// blogRouter.use(auth);
blogRouter.get('', blogController.getAll);
blogRouter.post('', blogController.add);
blogRouter.delete('/:id', blogController.delete);
blogRouter.put('/:id', blogController.edit);
blogRouter.get('/find-by-name', blogController.findByName);



