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
    let res = this.httpClient.get<Product[]>(
      'https://geats-api.herokuapp.com/'
    );
    return res;
  }

  addQuantity(produto: Product): Product {
    produto.quantity++;

    if (produto.quantity == 1)
      this.carrinhoService.adicionarNoCarrinho(produto);

    return produto;
  }

  removeQuantity(produto: Product): Product {
    if (produto.quantity == 1) {
      this.carrinhoService.removerDoCarrinho(produto);
    }
    if (produto.quantity != 0) {
      produto.quantity--;
    }

    return produto;
  }

  buyProducts(produtos: Product[]) {
    console.log(produtos);
    this.httpClient
      .post(
        'https://geats-api.herokuapp.com/api/create-checkout-session',
        produtos
      )
      .subscribe((x: any) => {
        window.location.href = x.sessionUrl;
      });
  }
}
