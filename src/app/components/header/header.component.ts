import { Component, OnInit } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faCartShopping = faCartShopping;
  carrinhoAberto = false;

  constructor() {}

  ngOnInit(): void {}

  OnClick() {
    this.carrinhoAberto = !this.carrinhoAberto;
  }
}
