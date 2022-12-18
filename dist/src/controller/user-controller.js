"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../service/user-service");
class UserController {
    constructor() {
        this.getAll = async (req, res) => {
            let user = await this.userService.findAll();
            res.status(200).json(user);
        };
        this.register = async (req, res) => {
            let user = req.body;
            let register = await this.userService.register(user);
            res.status(200).json(register);
        };
        this.deleteUser = async (req, res) => {
            let id = +req.params.id;
            let remove = await this.userService.removeUser(id);
            res.status(200).json(remove);
        };
        this.editUser = async (req, res) => {
            let id = +req.params.id;
            let data = req.body;
            let edit = await this.userService.editUser({ id: id }, data);
            res.status(200).json(edit);
        };
        this.userService = new user_service_1.UserService();
    }
}
exports.default = new UserController();
//# sourceMappingURL=user-controller.js.map