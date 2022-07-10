import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductService } from './services/product.service';
import { ArrayToStringPipe } from './pipes/array-to-string.pipe';
import { CarrinhoComponent } from './components/header/carrinho/carrinho.component';
import { CarrinhoService } from './services/carrinho.service';
import { ProductViewComponent } from './components/products/product/product-view/product-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './components/home/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    CarrinhoComponent,
    ArrayToStringPipe,
    ProductViewComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [ProductService, CarrinhoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
