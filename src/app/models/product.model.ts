import { PriceTable } from "./priceTable.models";

export class ProductModel {
  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public price: number,
    public likes: number,
    public releaseDate: Date,
    public isLiked: boolean,
    public priceTable?: Array<PriceTable>,
  ) {
  }
}
