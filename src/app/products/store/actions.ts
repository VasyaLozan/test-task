import {createAction, props} from '@ngrx/store'
import {ProductModel} from "../models/products.model";

export const getProductList = createAction('[Product] get list')
export const getProductListSuccess = createAction('[Product] get list success', props<{data: ProductModel[]}>())
export const getProductListError = createAction('[Product] get list success', props<{error: string}>())

export const getLazyProductList = createAction('[Product] get lazy list')
export const getLazyProductListSuccess = createAction('[Product] get lazy list success', props<{data: ProductModel[]}>())
export const getLazyProductListError = createAction('[Product] get lazy list error', props<{error: string}>())

