import {createAction, props} from '@ngrx/store'
import {LoginModel} from "../models/login.model";

export const logIn = createAction('[Auth] login', props<LoginModel>())
export const logInSuccess = createAction('[Auth] login success', props<{auth: boolean}>())
export const logInError = createAction('[Auth] login error', props<{error: string}>())

export const logOut = createAction('[Auth] logout')
export const logOutSuccess = createAction('[Auth] logout success', props<{auth: boolean}>())
export const logOutError = createAction('[Auth] logout error', props<{error: string}>())
