import {createAction, props} from "@ngrx/store";
export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const customerIncrement = createAction('customIncrement', props<{ value: number }>());

export const changeAlias = createAction('changeAlias')
