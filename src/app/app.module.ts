import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductService } from './services/product.service';
import { ArrayToStringPipe } from './pipes/array-to-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    ArrayToStringPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
