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
  _FILTERED_PRODUCTS: Product[];
  isFiltered = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.productService.retrieveAll().subscribe((data: any) => {
      this._PRODUTOS = data;
      this._FILTERED_PRODUCTS = data;
    });
  }

  filterVeg(): void {
    if (this.isFiltered) {
      this._FILTERED_PRODUCTS = this._PRODUTOS;
      this.isFiltered = false;
    } else {
      this._FILTERED_PRODUCTS = this._PRODUTOS.filter((x: Product) => x.veg);
      this.isFiltered = true;
    }
  }
}
