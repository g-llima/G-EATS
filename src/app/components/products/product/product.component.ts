import { Component, Input, OnInit } from '@angular/core';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  faFire = faFire;

  @Input() produto: Product;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {}

  adicionarQuantiade() {
    this.produto.quantidade++;

    if (this.produto.quantidade == 1)
      this.carrinhoService.adicionarNoCarrinho(this.produto);
  }

  diminuirQuantidade() {
    if (this.produto.quantidade == 1) {
      this.carrinhoService.removerDoCarrinho(this.produto);
    }
    if (this.produto.quantidade != 0) {
      this.produto.quantidade--;
    }
  }
}
