import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'
registerLocaleData(localeFr)
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SortByDatePipe } from './pipes/product.pipe';
import { FilterByNamePipe } from './pipes/filterByName.pipe';
import { FilterAlphabeticallyPipe } from './pipes/filterAlphabetically.pipe';
import { FormsModule } from '@angular/forms';
import { TheHeaderComponent } from './the-header/the-header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductCardComponent,
    SortByDatePipe,
    FilterByNamePipe,
    FilterAlphabeticallyPipe,
    TheHeaderComponent,
    FooterComponent,
    ContentComponent,
    ProductDetailComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    SortByDatePipe,
    FilterByNamePipe,
    FilterAlphabeticallyPipe,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
