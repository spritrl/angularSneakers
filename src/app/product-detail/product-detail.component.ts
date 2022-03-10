import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../models/product.model';
import { ProductsService } from '../services/products.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  myProduct!: ProductModel;
  id: number;
  orientation: string;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.id = parseInt(params.id)
    });
  }

  ngOnInit(): void {
    this.productsService.createProducts();
    this.myProduct = this.productsService.getOneProducts(this.id);
    this.orientation = "landscape";
  }

  onLike(): void {
    this.productsService.onLikeProduct(this.myProduct);
  }
}
