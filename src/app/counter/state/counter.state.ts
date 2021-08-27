export interface CounterState {
  counter: number;
  alias: string;
}

export const INITIAL_STATE: CounterState = {
  counter: 0,
  alias: 'themgi'
};
