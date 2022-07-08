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
    return this.httpClient.get<Product[]>(
      'http://geats-api.herokuapp.com/products'
    );
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
    fetch('http://localhost:6969/api/create-checkout-session', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        items: produtos.map((item) => {
          return {
            id: item.id,
            quantidade: item.quantity,
            preco: item.price,
            nome: item.product_name,
            imgUrl: item.img_url,
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
