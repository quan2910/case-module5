import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'users'})
export class User{
    @PrimaryGeneratedColumn({type:'int'})
    public readonly id: number;
    @Column({type:'varchar'})
    public username: string;
    @Column({type:'varchar'})
    public password: string;
    @Column ({type:'varchar'})
    public image: string;
    @Column({type:'int'})
    public role: number;
    @Column({type:'int'})
    public status: number;
}