import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductModel } from "../models/product.model";
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
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
  sortDate(value) {
    this.dateSort = value;
  }
  orderby(value) {
    this.alphSort = value;
  }

}
