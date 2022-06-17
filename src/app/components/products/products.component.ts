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
    this._PRODUTOS = this.productService.retrieveAll();
  }
}