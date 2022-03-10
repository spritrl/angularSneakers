import { Injectable } from "@angular/core";
import { PriceTable } from "../models/priceTable.models";
import { ProductModel } from "../models/product.model";
import SampleJson from '../product.json';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  title = 'json-file-read-angular';
  // public countryList: ProductModel[] = SampleJson;
  public products: ProductModel[] = [];

  createProducts(): void {
    console.log(SampleJson);
    SampleJson.forEach(element => {
      console.log('element', element);
      let pricesT = [];
      element.priceTable.forEach(element => {
        console.log(element.size)
        console.log(element.price)
        let newPrice = new PriceTable(element.size, element.price)
        pricesT.push(newPrice);
      })
      console.log('let prices', pricesT);
      let newElement = new ProductModel(
        element.id,
        element.title,
        element.description,
        element.imageUrl,
        element.price,
        element.likes,
        new Date(element.releaseDate),
        element.isLiked,
        pricesT,
      );
      console.log('newElement.priceTable', newElement.priceTable);
      console.log('newElement.likes', newElement.likes);
      this.products.push(newElement);
    });
  }

  getAllProducts(): ProductModel[] {
    console.log('this.products', this.products);
    return this.products;
  }

  getOneProducts(id: number): ProductModel {
    console.warn('getOneProducts(id: number): ProductModel {', this.products)
    let theproducts = this.products.find((p) => p.id == id);
    console.warn('getOneProducts(id: number): ProductModel {', theproducts);
    return theproducts;
  }

  onLikeProduct(product: ProductModel): void {
    if (product.isLiked) {
      product.likes--;
    } else {
      product.likes++;
    }
    product.isLiked = !product.isLiked;
  }
}