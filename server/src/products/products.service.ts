import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
 constructor (
  @InjectRepository(Product)
  private readonly productRepo : Repository<Product>,
 ) {}

 async findAll (marque?: string, sort?: 'asc' | 'desc') {
  const query = this.productRepo.createQueryBuilder('product');

  if (marque) query.andWhere('product.marque = :marque', { marque });

  if (sort) {
    query.orderBy('product.prix', sort.toUpperCase() as 'ASC' | 'DESC');
  }
  return query.getMany();
 }
}
