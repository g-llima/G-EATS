import { Component, Input, IterableDiffers, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  detalhesProdAberto = false;
  isOnCart = false;

  @Input() product: Product;

  constructor(
    private productService: ProductService,
    private carrinhoService: CarrinhoService,
    private iterableDiffers: IterableDiffers
  ) {}

  ngOnInit(): void {}

  handleCartClick() {
    this.addOnCart();
    this.removeFromCart();
  }

  addOnCart(): void {
    if (!this.carrinhoService.isInCart(this.product.id)) {
      this.product = this.productService.addQuantity(this.product);
    }
  }

  removeFromCart(): void {
    if (this.isOnCart) {
      this.carrinhoService.removerDoCarrinho(this.product);
    }
  }

  ngDoCheck(): void {
    const changes = this.iterableDiffers.find([this.isOnCart]);
    if (changes) {
      if (this.product.quantity > 0 && this.isOnCart == false) {
        this.isOnCart = true;
      }

      if (this.product.quantity === 0 && this.isOnCart == true) {
        this.isOnCart = false;
      }
    }
  }

  handleProductOpen() {
    this.detalhesProdAberto = !this.detalhesProdAberto;
  }

  onCloseClick(close: boolean) {
    if (close) this.detalhesProdAberto = false;
  }
}
