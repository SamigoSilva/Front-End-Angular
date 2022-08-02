import { StoredService } from './components/marketplace-app/product-list/product-list.component.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { MarketplaceAppComponent } from './components/marketplace-app/marketplace-app.component';
import { FiltersComponent } from './components/marketplace-app/filters/filters.component';
import { ProductListComponent } from './components/marketplace-app/product-list/product-list.component';
import { ProductItemComponent } from './components/marketplace-app/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MarketplaceAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StoredService],
  bootstrap: [AppComponent]
})
export class AppModule { }
