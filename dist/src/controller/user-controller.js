"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../service/user-service");
class UserController {
    constructor() {
        this.getAll = async (req, res) => {
            let user = await this.userService.findAll(req, res);
            res.render('user/lists', {
                listUser: user
            });
        };
        this.userService = new user_service_1.UserService();
    }
}
exports.default = new UserController();
//# sourceMappingURL=user-controller.js.map