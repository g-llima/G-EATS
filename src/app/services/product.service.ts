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

  comprarProdutos(produtos: Product[]) {
    fetch('http://localhost:6969/api/create-checkout-session', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        items: produtos.map((item) => {
          return {
            id: item.id,
            quantidade: item.quantidade,
            preco: item.preco,
            nome: item.nome,
            imgUrl: item.imgUrl,
          };
        }),
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((error) => {
        console.log('Error ', error.error);
      });
  }
}
