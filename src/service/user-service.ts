import {AppDataSource} from "../data-source";
import {User} from "../model/user"
import {Request, Response} from "express";

export class UserService {
    private userService: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            console.log('Connected Database')
            this.userService = connection.getRepository(User)
        })
    }
    findAll = async (req: Request, res: Response) => {
        let users = await this.userService.find()
        return users
    }
    login = async (req: Request, res: Response) => {

    }
}









