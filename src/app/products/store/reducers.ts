import { createReducer, on } from '@ngrx/store';
import * as actions from './actions';
import {ProductModel} from "../models/products.model";

export const productsFeatureKey = 'productsReducer';

export interface ProductsState {
  productList: ProductModel[],
  error: string
}

export const initialProductsState: ProductsState = {
  productList: [],
  error: ''
}

export const productsReducer = createReducer(
  initialProductsState,
  on(actions.getProductListSuccess, (state, {data}) => {
    return {
      ...state,
      productList: data
    }
  }),
  on(actions.getProductListError, (state, {error}) => {
    return {
      ...state,
      error
    }
  }),
  on(actions.getLazyProductListSuccess, (state, {data}) => {
    return {
      ...state,
      productList: [
        ...state.productList,
        ...data
      ]
    }
  }),
  on(actions.getLazyProductListError, (state, {error}) => {
    return {
      ...state,
      error
    }
  }),
)
