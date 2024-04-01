import {createAction, props} from '@ngrx/store'
import {UserModel} from "../models/users.model";

export const getUserList = createAction('[User] get list', props<{date: string}>())
export const getUserListSuccess = createAction('[User] get list success', props<{data: UserModel[]}>())
export const getUserListError = createAction('[User] get list success', props<{error: string}>())
