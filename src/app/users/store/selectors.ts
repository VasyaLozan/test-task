import { createFeatureSelector, createSelector } from '@ngrx/store';
import {usersFeatureKey, UsersState} from './reducers'

const featureSelector = createFeatureSelector<UsersState>(usersFeatureKey)

export const userList = createSelector(featureSelector, state => state.userList)
export const usersError = createSelector(featureSelector, state => state.error)
