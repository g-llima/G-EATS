export class Product {
  id: number;
  name: string;
  description: string;
  calories: string;
  veg?: boolean;
  imgUrl: string;
  price: number;
  quantity: number = 0;
}
