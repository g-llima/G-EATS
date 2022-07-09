import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../components/products/product/product';
import { CarrinhoService } from './carrinho.service';

@Injectable()
export class ProductService {
  constructor(
    private httpClient: HttpClient,
    private carrinhoService: CarrinhoService
  ) {}

  retrieveAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.api_url);
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
      .post(environment.api_url + 'api/create-checkout-session', produtos)
      .subscribe((x: any) => {
        window.location.href = x.sessionUrl;
      });
  }
}
