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

  @Input() produto: Product;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  adicionarQuantiade() {
    this.produto.quantidade++;

    if (this.produto.quantidade == 1)
      this.productService.adicionarNoCarrinho(this.produto);
  }

  diminuirQuantidade() {
    if (this.produto.quantidade == 1) {
      this.productService.removerDoCarrinho(this.produto);
    }
    if (this.produto.quantidade != 0) {
      this.produto.quantidade--;
    }
  }
}
