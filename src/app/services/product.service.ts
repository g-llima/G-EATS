import { Product } from '../components/products/product/product';

export class ProductService {
  retrieveAll(): Product[] {
    return [
      {
        id: 0,
        nome: 'Double Cheese Potato Burger',
        tags: ['Burger', 'Beef'],
        calorias: '220 - 280',
        veg: true,
        imgUrl:
          'https://biancazapatka.com/wp-content/uploads/2021/10/rote-bete-burger.jpg',
        preco: 5.99,
        quantidade: 0,
      },
      {
        id: 1,
        nome: 'Hambúrguer com Crispy de Cebola',
        tags: ['Burger'],
        calorias: '220 - 280',
        veg: false,
        imgUrl: 'https://assets.unileversolutions.com/recipes-v2/230411.jpg',
        preco: 12.4,
        quantidade: 0,
      },
    ];
  }

  addToCART(produto: Product) {}
}
