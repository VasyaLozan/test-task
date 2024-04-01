import { createFeatureSelector, createSelector } from '@ngrx/store';
import {productsFeatureKey, ProductsState} from './reducers'

const featureSelector = createFeatureSelector<ProductsState>(productsFeatureKey)

export const productList = createSelector(featureSelector, state => state.productList)
export const productsError = createSelector(featureSelector, state => state.error)
