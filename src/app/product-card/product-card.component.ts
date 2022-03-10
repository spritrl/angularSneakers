import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from "../models/product.model";
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() myProduct!: ProductModel;
  constructor(private productsServices: ProductsService) { }

  onLike() {
    this.productsServices.onLikeProduct(this.myProduct)
  }

  selectSize(size) { }

}
