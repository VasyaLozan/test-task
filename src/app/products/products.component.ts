import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from "./models/products.model";
import {select, Store} from "@ngrx/store";
import {getLazyProductList, getProductList} from "./store/actions";
import {productList} from "./store/selectors";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {IntersectionListenerDirective} from "./directives/intersection-listener.directive";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
    IntersectionListenerDirective
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productList: ProductModel[] = []

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(getProductList())
    this.store.pipe(select(productList)).subscribe(data => {
      this.productList = data
    })
  }

  loadLazyProducts() {
    this.store.dispatch(getLazyProductList())
  }
}
