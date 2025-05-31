import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderItem } from "./order-item.entity";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customerEmail: string;

    @Column('decimal', {precision: 10, scale:2})
    totalAmout: number;

    @Column({ default: 'pending' })
    status: string;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(() => OrderItem, (item) => item.order, { cascade: true})
    items: OrderItem[];


}
