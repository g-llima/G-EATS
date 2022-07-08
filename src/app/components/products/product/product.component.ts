import { Component, Input, OnInit } from '@angular/core';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/product.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  faFire = faFire;
  detalhesProdAberto = false;

  @Input() product: Product;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  addQuantity() {
    this.product = this.productService.addQuantity(this.product);
  }

  removeQuantity() {
    this.product = this.productService.removeQuantity(this.product);
  }

  handleProductOpen() {
    this.detalhesProdAberto = !this.detalhesProdAberto;
  }
}
