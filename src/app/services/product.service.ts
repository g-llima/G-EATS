import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../components/products/product/product';

@Injectable()
export class ProductService {
  _PRODUTOS_CARRINHO: any[] = [];

  constructor(private httpClient: HttpClient) {}

  retrieveAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:6969/');
  }

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

    this._PRODUTOS_CARRINHO.forEach((x) => (total += x.quantidade));

    return total;
  }
}
