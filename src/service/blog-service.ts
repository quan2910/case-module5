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
        let query = `select * from blogs join users on blogs.idUser = users.id join comments on blogs.comments = comments.idUser`
        let blogs = await this.blogService.query(query)
        return blogs
    }
    findByName = async (tittle) => {
        let name = await this.blogService.query(`select * from blogs where tittle like '%${tittle}%'`)
        return name;
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














