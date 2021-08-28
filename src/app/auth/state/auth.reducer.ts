import {createReducer} from "@ngrx/store";
import {INITIAL_STATE} from "./auth.state";

const _authReducer = createReducer(
  INITIAL_STATE
);

export const authReducer = (state: any, action: any) => {
  return _authReducer(state, action)
};
