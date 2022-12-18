import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'blogs'})
export class Blog{
    @PrimaryGeneratedColumn({type:'int'})
    public readonly id: number;
    @Column({type:'varchar'})
    public tittle: string;
    @Column({type:'varchar'})
    public content: string;
    @Column({type: 'int'})
    public idUser: number;
    @Column({type: 'varchar'})
    public time: string;
    @Column({type: 'varchar'})
    public status: string;
    @Column({type: 'int'})
    public likes: number;
    @Column({type: 'varchar'})
    public comments: string;
}