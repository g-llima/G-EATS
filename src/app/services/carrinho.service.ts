import { Injectable } from '@angular/core';
import { Product } from '../components/products/product/product';

@Injectable()
export class CarrinhoService {
  _PRODUTOS_CARRINHO: any[] = [];

  adicionarNoCarrinho(produto: Product) {
    this._PRODUTOS_CARRINHO.push(produto);
  }

  removerDoCarrinho(produto: Product) {
    this._PRODUTOS_CARRINHO = this._PRODUTOS_CARRINHO.filter(
      (x) => x != produto
    );
  }

  retornarCarrinho(): Product[] {
    return this._PRODUTOS_CARRINHO;
  }

  retornarQuantidadeProdutos(): number {
    let total = 0;

    this._PRODUTOS_CARRINHO.forEach((x) => (total += x.quantity));

    return total;
  }
}
