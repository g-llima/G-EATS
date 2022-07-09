import { Component, Input, IterableDiffers, OnInit } from '@angular/core';
import { faFire, faLeaf, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit {
  faFire = faFire;
  faLeaf = faLeaf;
  faCartPlus = faCartPlus;

  isOnCart = false;

  constructor(
    private carrinhoService: CarrinhoService,
    private productService: ProductService,
    private iterableDiffers: IterableDiffers
  ) {}

  @Input() product: Product;

  ngOnInit(): void {
    if (this.carrinhoService.isInCart(this.product.id)) this.isOnCart = true;
  }

  addOnCart(): void {
    if (!this.carrinhoService.isInCart(this.product.id)) {
      this.product = this.productService.addQuantity(this.product);
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
}
