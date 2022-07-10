import {
  Component,
  DoCheck,
  Input,
  IterableDiffers,
  OnInit,
} from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../products/product/product';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit, DoCheck {
  _PRODUTOS: Product[];
  quantidadeProdutos: number = 0;
  totalPrice: number;

  @Input() carrinhoAberto: boolean;

  constructor(
    private productService: ProductService,
    private carrinhoService: CarrinhoService,
    private iterableDiffers: IterableDiffers
  ) {}

  ngDoCheck(): void {
    const changes = this.iterableDiffers.find(this._PRODUTOS);
    if (changes) {
      this.totalPrice = this.carrinhoService.totalPrice(this._PRODUTOS);
      this._PRODUTOS = this.carrinhoService.retornarCarrinho();
      this.quantidadeProdutos =
        this.carrinhoService.retornarQuantidadeProdutos();
    }
  }

  ngOnInit(): void {
    this._PRODUTOS = this.carrinhoService.retornarCarrinho();
    this.quantidadeProdutos = this.carrinhoService.retornarQuantidadeProdutos();
  }

  adicionarQuantidade(produto: Product) {
    produto = this.productService.addQuantity(produto);
  }

  diminuirQuantidade(produto: Product) {
    produto = this.productService.removeQuantity(produto);
  }

  comprarProdutos() {
    this.productService.buyProducts(this._PRODUTOS);
  }
}
