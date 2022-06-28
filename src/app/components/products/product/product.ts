export class Product {
  id: number;
  nome: string;
  tags: string[];
  calorias: string;
  veg?: boolean;
  imgUrl: string;
  preco: number;
  quantidade: number = 0;
  ingredientes: [
    {
      nome: string;
      essencial: boolean;
    }
  ];
}
