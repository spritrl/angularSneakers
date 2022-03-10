import { Pipe, PipeTransform } from "@angular/core";
import { ProductModel } from "../models/product.model";

@Pipe({ name: 'sortByDate' })
export class SortByDatePipe implements PipeTransform {
  transform(products: ProductModel[], order?: any) {
    if (order !== '') {
      let desc = !(order && order === 'asc');
      return products.sort((a, b) => {
        if (desc) return b.releaseDate.getTime() - a.releaseDate.getTime()
        else return a.releaseDate.getTime() - b.releaseDate.getTime()
      });
    }
  }
}