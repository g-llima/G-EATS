import { Component, Input, OnInit } from '@angular/core';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit {
  faFire = faFire;

  constructor() {}

  @Input() produto: Product;

  ngOnInit(): void {
    console.log(this.produto.ingredientes[0]);
  }
}
