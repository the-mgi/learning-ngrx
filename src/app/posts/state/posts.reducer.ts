import {createReducer, on} from "@ngrx/store";
import {INITIAL_STATE} from "./posts.state";
import {addPost, removePost, updatePost} from "./posts.action";
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
      posts: state.posts.filter((post: PostModel) => {
        return post.id !== action.postId
      })
    }
  }),
  on(updatePost, (state, action) => {
    const allPosts = [...state.posts];
    allPosts.splice(state.posts.findIndex((post) => post.id === action.updatePostData.id), 1, action.updatePostData);
    return {
      ...state,
      posts: allPosts
    }
  })
);

export const postsReducer = (state: any, action: any) => {
  return _postsReducer(state, action);
}
