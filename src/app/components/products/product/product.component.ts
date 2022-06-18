import { Component, Input, OnInit } from '@angular/core';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  faFire = faFire;

  @Input() produto: Product;

  constructor() {}

  ngOnInit(): void {}

  adicionarQuantiade() {
    this.produto.quantidade++;
  }

  diminuirQuantidade() {
    if (this.produto.quantidade != 0) {
      this.produto.quantidade--;
    }
  }
}
