import {Request, Response} from "express";
import {UserService} from "../service/user-service";


class UserController {
    private userService: UserService
    constructor() {
        this.userService = new UserService()
    }
    getAll = async (req:Request,res:Response)=>{
        let user = await this.userService.findAll(req, res);
        res.render ('user/lists', {
            listUser: user
        })
    }
}
export default new UserController();