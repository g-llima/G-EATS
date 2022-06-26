import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../components/products/product/product';
import { CarrinhoService } from './carrinho.service';

@Injectable()
export class ProductService {
  constructor(
    private httpClient: HttpClient,
    private carrinhoService: CarrinhoService
  ) {}

  retrieveAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:6969/');
  }

  adicionarQuantidade(produto: Product): Product {
    produto.quantidade++;

    if (produto.quantidade == 1)
      this.carrinhoService.adicionarNoCarrinho(produto);

    return produto;
  }

  diminuirQuantidade(produto: Product): Product {
    if (produto.quantidade == 1) {
      this.carrinhoService.removerDoCarrinho(produto);
    }
    if (produto.quantidade != 0) {
      produto.quantidade--;
    }

    return produto;
  }
}
