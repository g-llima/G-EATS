import {
  Component,
  EventEmitter,
  Input,
  IterableDiffers,
  OnInit,
  Output,
} from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit {
  isOnCart = false;

  @Output() close = new EventEmitter<boolean>();

  onClose() {
    this.close.emit(true);
  }

  constructor(
    private carrinhoService: CarrinhoService,
    private productService: ProductService,
    private iterableDiffers: IterableDiffers
  ) {}

  @Input() product: Product;

  ngOnInit(): void {
    if (this.carrinhoService.isInCart(this.product.id)) this.isOnCart = true;
  }

  handleCardButton(): void {
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
}
