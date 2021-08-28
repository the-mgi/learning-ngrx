import {createAction, props} from "@ngrx/store";

export const LOGIN_START = '[AUTH PAGE] LOGIN_START';
export const LOGIN_SUCCESS = '[AUTH PAGE] LOGIN SUCCESS';
export const LOGIN_FAILED = '[AUTH PAGE] LOGIN FAILED';

export const loginStart = createAction(LOGIN_START, props<{ email: string; password: string }>());
export const loginSuccess = createAction(LOGIN_SUCCESS);
