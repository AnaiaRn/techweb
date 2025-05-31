import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    marque: string;

    @Column()
    description: string;
   
    @Column('decimal', {precision: 10, scale:2})
    price: number;

    @Column()
    imageUrl: string;

    @CreateDateColumn()
    CreatedAt: Date;

    @UpdateDateColumn()
    updatedAt : Date;

}
