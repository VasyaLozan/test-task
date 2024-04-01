import { createReducer, on } from '@ngrx/store';
import * as actions from './actions';

export const authFeatureKey = 'authReducer';

export interface AuthState {
  isAuthorized: boolean
  error: string
}

export const initialAuthState: AuthState = {
  isAuthorized: false,
  error: ''
}

export const authReducer = createReducer(
  initialAuthState,
  on(actions.logInSuccess, (state, {auth}) => {
    return {
      ...state,
      isAuthorized: auth
    }
  }),
  on(actions.logInError, (state, {error}) => {
    return {
      ...state,
      error
    }
  }),
  on(actions.logOutSuccess, (state, {auth}) => {
    return {
      ...state,
      isAuthorized: auth
    }
  }),
  on(actions.logOutError, (state, {error}) => {
    return {
      ...state,
      error
    }
  }),
)
