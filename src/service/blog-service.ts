import {AppDataSource} from "../data-source";
import {Blog} from "../model/blog"
import {Request, Response} from "express";

export class BlogService {
    private blogService: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            console.log('Connected DB')
            this.blogService = connection.getRepository(Blog)
        })
    }
    findAll = async () => {
        let blogs = await this.blogService.find()
        return blogs
    }
    add = async (data)=>{
        let addBlog = await this.blogService.save(data)
        return addBlog
    }
    delete = async (id) => {
        let deleteBlog = await this.blogService.delete(id)
        return deleteBlog
    }
    edit = async (id, data) => {
        let editBlog = await this.blogService.update(id, data)
        return editBlog
    }
}














