import {Request, Response} from "express";
import {UserService} from "../service/user-service";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


class UserController {
    private userService: UserService

    constructor() {
        this.userService = new UserService()
    }

    getAll = async (req: Request, res: Response) => {
        let user = await this.userService.findAll();
        res.status(200).json(user)
    }
    register = async (req: Request, res: Response) => {
        let user = req.body
        user.password = await bcrypt.hash(user.password, 10)
        let register = await this.userService.register(user);
        res.status(200).json(register)
    }
    login = async (req: Request, res: Response) => {
        let user = req.body
        let userFind = await this.userService.login(user.username)
        if (userFind.length == 0) {
            return res.status(200).json({
                massage: 'User is not exist !'
            })
        } else {
            let comparePassword = await bcrypt.compare(user.password, userFind[0].password)
            if (!comparePassword) {
                return res.json({
                    massage: 'Password is wrong!'
                })
            } else {
                let payload = {
                    id: userFind[0]._id,
                    username: userFind[0].username
                }
                let secret = 'quan'
                let token = await jwt.sign(payload, secret, {
                    expiresIn: 36000
                });
                return res.json({
                    token: token,
                    id: userFind[0]._id
                })
            }
        }
    }
    delete = async (req: Request, res: Response) => {
        let id = +req.params.id
        let remove = await this.userService.remove(id);
        res.status(200).json(remove)
    }
    edit = async (req: Request, res: Response) => {
        let id = +req.params.id
        let data = req.body
        let edit = await this.userService.edit({id: id}, data)
        res.status(200).json(edit)
    }
}

export default new UserController();