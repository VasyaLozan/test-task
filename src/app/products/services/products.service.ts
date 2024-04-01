import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductModel} from "../models/products.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsUrl = 'http://localhost:3000/products';

  constructor(private api: HttpClient) { }

  getProductList() {
    return this.api.get<ProductModel[]>(this.productsUrl);
  }
}
