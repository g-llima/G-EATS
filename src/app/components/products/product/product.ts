export class Product {
  id: number;
  product_name: string;
  description: string;
  calories: string;
  veg?: boolean;
  img_url: string;
  price: number;
  quantity: number = 0;
}
