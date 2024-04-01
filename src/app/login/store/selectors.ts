import { createFeatureSelector, createSelector } from '@ngrx/store';
import {authFeatureKey, AuthState} from './reducers'

const featureSelector = createFeatureSelector<AuthState>(authFeatureKey)

export const isAuthorized = createSelector(featureSelector, state => state.isAuthorized)
