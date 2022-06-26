import { Component, Input, OnInit } from '@angular/core';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  faFire = faFire;

  @Input() produto: Product;

  constructor(
    private carrinhoService: CarrinhoService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {}

  adicionarQuantidade() {
    this.produto = this.productService.adicionarQuantidade(this.produto);
  }

  diminuirQuantidade() {
    this.produto = this.productService.diminuirQuantidade(this.produto);
  }
}
