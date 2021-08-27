import {createReducer, on} from "@ngrx/store";
import {INITIAL_STATE} from "./posts.state";
import {addPost, removePost} from "./posts.action";
import {PostModel} from "../../models/post.model";

const _postsReducer = createReducer(
  INITIAL_STATE,
  on(addPost, (state, action) => {
    const post = {...action.post}
    post.id = (state.posts.length + 1).toString()
    return {
      ...state,
      posts: [...state.posts, post]
    }
  }),
  on(removePost, (state, action) => {
    return {
      ...state,
      posts: state.posts.filter((post: PostModel) => {return post.id !== action.postId})
    }
  })
);

export const postsReducer = (state: any, action: any) => {
  return _postsReducer(state, action);
}
