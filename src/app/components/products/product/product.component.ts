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

  @Input() produto: Product;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  adicionarQuantidade() {
    this.produto = this.productService.adicionarQuantidade(this.produto);
  }

  diminuirQuantidade() {
    this.produto = this.productService.diminuirQuantidade(this.produto);
  }

  alternarDetalhesProdAberto() {
    this.detalhesProdAberto = !this.detalhesProdAberto;
  }
}
