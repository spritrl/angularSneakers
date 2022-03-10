import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductModel } from "./models/product.model";
import { ProductsService } from './services/products.service';
import SampleJson from './product.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  products!: ProductModel[];
  search: string = '';
  title: string = '';
  firstRun: boolean = true;
  dateSort: string = '';
  alphSort: string = '';

  sortValues = [
    { id: 1, label: "asc" },
    { id: 2, label: "desc" },
  ]

  orderValues = [
    { id: 1, label: "title" },
    { id: 2, label: "description" },
    { id: 3, label: "likes" },
  ]

  constructor(private productsService: ProductsService) { }


  ngOnInit(): void {
    this.search = "";
    this.productsService.createProducts();
    this.products = this.productsService.getAllProducts();
    console.log('ngOnInit(): void {', this.products);
    this.title = "Sneakers";
    this.dateSort = "asc";
    this.alphSort = '';
  }
  ngOnDestroy(): void {

  }
  sortDate(value) {
    this.dateSort = value;
  }
  orderby(value) {
    this.alphSort = value;
  }


}
