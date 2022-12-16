import {Router} from "express";
import motobikeController from "../controller/blog-controller";

export const motobikeRouter = Router();
motobikeRouter.get('', motobikeController.findAll)
motobikeRouter.post('', motobikeController.addMotobike)
motobikeRouter.put('/:id', motobikeController.edit)
motobikeRouter.delete('/:id', motobikeController.delete)
motobikeRouter.get('/:id', motobikeController.findAllByCategory)
motobikeRouter.get('/find-by-name', motobikeController.findAllByName)
motobikeRouter.get('/find/sort-quantity', motobikeController.sortQuantity)
motobikeRouter.get('/find/sort-price', motobikeController.sortPrice)
motobikeRouter.get('/find/about-price', motobikeController.findAboutPrice)
motobikeRouter.get('/find/about-quantity', motobikeController.findAboutQuantity)