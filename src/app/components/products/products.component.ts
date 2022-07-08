import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from './product/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  _PRODUTOS: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this._PRODUTOS = [
      {
        id: 0,
        name: 'Produto de teste',
        description: 'Descrição do produto',
        calories: '220 - 280',
        veg: true,
        imgUrl:
          'https://cdn1.dotesports.com/wp-content/uploads/2022/06/07114418/warden-1.png',
        price: 5.99,
        quantity: 0,
      },
    ];

    // this.productService.retrieveAll().subscribe((data: any) => {
    //   this._PRODUTOS = data['products'];
    // });
  }
}
