import {Request, Response} from "express";
import {UserService} from "../service/user-service";


class UserController {
    private userService: UserService
    constructor() {
        this.userService = new UserService()
    }
    getAll = async (req:Request,res:Response)=>{
        let user = await this.userService.findAll();
        res.status(200).json(user)
    }
    register = async (req:Request, res: Response)=> {
        let user = req.body
        let register = await this.userService.register(user);
        res.status(200).json(register)
    }
    delete = async (req:Request, res: Response) => {
        let id = +req.params.id
        let remove = await this.userService.remove(id);
        res.status(200).json(remove)
    }
    edit = async (req:Request, res: Response) => {
        let id = +req.params.id
        let data = req.body
        let edit = await this.userService.edit({id: id}, data)
        res.status(200).json(edit)
    }
}
export default new UserController();