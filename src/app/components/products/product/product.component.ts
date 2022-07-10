import { Component, Input, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  detalhesProdAberto = false;

  @Input() product: Product;

  constructor(
    private productService: ProductService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {}

  handleCartClick() {
    console.log('click');

    this.carrinhoService.isInCart(this.product.id)
      ? this.productService.removeQuantity(this.product)
      : this.productService.addQuantity(this.product);
  }

  handleProductOpen() {
    this.detalhesProdAberto = !this.detalhesProdAberto;
  }

  onCloseClick(close: boolean) {
    if (close) this.detalhesProdAberto = false;
  }
}
