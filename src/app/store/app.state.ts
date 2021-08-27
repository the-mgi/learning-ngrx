import {CounterState} from "../counter/state/counter.state";
import {PostsState} from "../posts/state/posts.state";

export interface AppState {
  counterReducer: CounterState;
  postsReducer: PostsState;
}
