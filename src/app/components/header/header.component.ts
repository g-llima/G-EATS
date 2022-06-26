import { Component, DoCheck, IterableDiffers, OnInit } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faCartShopping = faCartShopping;
  carrinhoAberto = false;
  quantidadeProdutos: number = 0;

  constructor(
    private productService: ProductService,
    private iterableDiffers: IterableDiffers
  ) {}

  ngDoCheck(): void {
    const changes = this.iterableDiffers.find([this.quantidadeProdutos]);
    if (changes) {
      this.quantidadeProdutos =
        this.productService.retornarQuantidadeProdutos();
    }
  }

  ngOnInit(): void {
    this.quantidadeProdutos = this.productService.retornarQuantidadeProdutos();
  }

  OnClick() {
    this.carrinhoAberto = !this.carrinhoAberto;
  }
}
