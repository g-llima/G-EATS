import { Product } from '../components/products/product/product';

export class ProductService {
  retrieveAll(): Product[] {
    return [
      {
        id: 0,
        nome: 'Double Cheese Potato Burger',
        tags: ['Burger'],
        calorias: '220 - 280',
        veg: true,
        imgUrl:
          'https://biancazapatka.com/wp-content/uploads/2021/10/rote-bete-burger.jpg',
        preco: 5.99,
      },
    ];
  }
}
