import {Router} from "express";
import {motobikeRouter} from "./motobike-router";
import {categoryRouter} from "./category-router";

export const router = Router();
router.use('/auth', motobikeRouter);
router.use('/category', categoryRouter);
