import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductModel } from "./models/product.model";
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  ngOnInit(): void {
  }


}
