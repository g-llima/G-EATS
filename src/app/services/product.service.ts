import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../components/products/product/product';

@Injectable()
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  retrieveAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:6969/');
  }
}
