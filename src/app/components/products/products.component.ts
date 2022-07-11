import { Component, IterableDiffers, OnInit } from '@angular/core';
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

  constructor(
    private productService: ProductService,
    private iterableDiffers: IterableDiffers
  ) {}

  ngOnInit(): void {
    if (this._PRODUTOS?.length == 0 || this._PRODUTOS === undefined) {
      this.retrieveAll();
      setTimeout(() => {
        this.ngOnInit();
      }, 5000);
    }
  }

  onKey(event: any) {
    this.filterParam(event.target.value);
  }

  retrieveAll(): void {
    this.productService.retrieveAll().subscribe((data: any) => {
      this._PRODUTOS = data;
      this._FILTERED_PRODUCTS = data;
    });
  }

  filterParam(value: string): void {
    if (value === '') {
      this._FILTERED_PRODUCTS = this._PRODUTOS;
    } else {
      this._FILTERED_PRODUCTS = this._PRODUTOS.filter((x: Product) =>
        x.product_name.toLowerCase().includes(value.toLowerCase())
      );
      this.isFiltered = false;
    }
  }

  filterVeg(): void {
    if (this._FILTERED_PRODUCTS !== this._PRODUTOS) {
      this._FILTERED_PRODUCTS = this._PRODUTOS;
    } else {
      this._FILTERED_PRODUCTS = this._PRODUTOS.filter((x: Product) => x.veg);
    }
    this.isFiltered = this._FILTERED_PRODUCTS !== this._PRODUTOS;
  }
}
