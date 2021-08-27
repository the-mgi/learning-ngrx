import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CounterState} from "./counter.state";

const getCounterState = createFeatureSelector<CounterState>('counterReducer');

export const getCounter = createSelector(
  getCounterState,
  (state) => {
    return state.counter;
  }
);

export const getAlias = createSelector(
  getCounterState,
  (state) => {
    return state.alias;
  }
)
