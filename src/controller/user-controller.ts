import {Request, Response} from "express";
import {Category} from "../model/category";
import {Motobike} from "../model/motobike";

class UserController {
    findAll = async (req:Request,res:Response)=>{
        let category = await Category.find();
        return res.status(200).json(category);
    }
    addC = async (req: Request, res: Response) => {
        let category = req.body;
        category = await Category.create(category);
        return res.status(201).json(category);
    }
}
export default new UserController();