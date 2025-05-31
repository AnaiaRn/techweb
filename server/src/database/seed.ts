import { Product } from 'src/products/entities/product.entity';
import { AppDataSource } from './data-source';

async function seedProducts() {
  await AppDataSource.initialize();
  const productRepository = AppDataSource.getRepository(Product);

  const products = [
    {
      name: "T-Shirt Blanc",
      marque: "Nike",
      description: "T-shirt en coton 100%",
      price: 19.99,
      imageUrl: "/images/tshirt.jpg",
    },
  ];

  await productRepository.save(products);
  console.log('Produits insérés !');

  await AppDataSource.destroy();
}

seedProducts().catch(console.error);
