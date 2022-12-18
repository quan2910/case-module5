import { Request, Response } from "express";
declare class UserController {
    private userService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    register: (req: Request, res: Response) => Promise<void>;
    deleteUser: (req: Request, res: Response) => Promise<void>;
    editUser: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserController;
export default _default;
