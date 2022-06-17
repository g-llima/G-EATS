import { Component, OnInit } from '@angular/core';
import { faFire } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  faFire = faFire;

  constructor() {}

  ngOnInit(): void {}
}
