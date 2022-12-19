import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";
import {Blog} from "./blog";

@Entity({name: 'likes'})
export class Like{
    @PrimaryGeneratedColumn({type:'int'})
    public readonly id: number;
    @Column({type: 'int'})
    public idUser: number;
    @Column({type: 'int'})
    public idBlog: number;
}