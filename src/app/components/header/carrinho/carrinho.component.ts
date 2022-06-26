import { Component, DoCheck, IterableDiffers, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../products/product/product';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit, DoCheck {
  _PRODUTOS: Product[];
  quantidadeProdutos: number = 0;

  constructor(
    private productService: ProductService,
    private iterableDiffers: IterableDiffers
  ) {}

  ngDoCheck(): void {
    const changes = this.iterableDiffers.find(this._PRODUTOS);
    if (changes) {
      this._PRODUTOS = this.productService.retornarCarrinho();
      this.quantidadeProdutos =
        this.productService.retornarQuantidadeProdutos();
    }
  }

  ngOnInit(): void {
    this._PRODUTOS = this.productService.retornarCarrinho();
    this.quantidadeProdutos = this.productService.retornarQuantidadeProdutos();
  }
}
