import {createReducer, on} from "@ngrx/store";
import {INITIAL_STATE} from "./counter.state";
import {changeAlias, customerIncrement, decrement, increment, reset} from "./counter.actions";

const _counterReducer = createReducer(
  INITIAL_STATE,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter  - 1
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0
    };
  }),
  on(customerIncrement, (state, action) => {
    return {
      ...state,
      counter: +state.counter + +action.value
    }
  }),
  on(changeAlias, (state) => {
    return {
      ...state,
      alias: 'Muhammad Usama'
    }
  })
);

export const counterReducer = (state: any, action: any) => {
  return _counterReducer(state, action);
}
