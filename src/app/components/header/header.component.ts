import { Component, IterableDiffers, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  carrinhoAberto = false;
  mobileOpen = false;
  mobile = false;
  quantidadeProdutos: number = 0;

  constructor(
    private carrinhoService: CarrinhoService,
    private iterableDiffers: IterableDiffers
  ) {}

  ngDoCheck(): void {
    const changes = this.iterableDiffers.find([this.quantidadeProdutos]);
    if (changes) {
      this.quantidadeProdutos =
        this.carrinhoService.retornarQuantidadeProdutos();
    }
  }

  ngOnInit(): void {
    this.quantidadeProdutos = this.carrinhoService.retornarQuantidadeProdutos();

    this.mobile = document.body.offsetWidth <= 768;
    window.onresize = () => {
      this.mobile = document.body.offsetWidth <= 768;
      this.carrinhoAberto = false;
      this.mobileOpen = false;
    };
  }

  handleCartClick() {
    this.carrinhoAberto = !this.carrinhoAberto;
  }

  handleMobileOpen() {
    if (this.carrinhoAberto) {
      this.carrinhoAberto = false;
    } else {
      this.mobileOpen = !this.mobileOpen;
    }
  }
}
