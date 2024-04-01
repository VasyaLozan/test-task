import { createReducer, on } from '@ngrx/store';
import * as actions from './actions';
import {UserModel} from "../models/users.model";

export const usersFeatureKey = 'usersReducer';

export interface UsersState {
  userList: UserModel[],
  error: string
}

export const initialUsersState: UsersState = {
  userList: [],
  error: ''
}

export const usersReducer = createReducer(
  initialUsersState,
  on(actions.getUserListSuccess, (state, {data}) => {
    return {
      ...state,
      userList: data
    }
  }),
  on(actions.getUserListError, (state, {error}) => {
    return {
      ...state,
      error
    }
  })
)
