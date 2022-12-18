import { Request, Response } from "express";
declare class BlogController {
    private blogService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    add: (req: Request, res: Response) => Promise<void>;
    deleteBlog: (req: Request, res: Response) => Promise<void>;
    editBlog: (req: Request, res: Response) => Promise<void>;
}
declare const _default: BlogController;
export default _default;
