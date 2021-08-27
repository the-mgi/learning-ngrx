import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PostsState} from "./posts.state";
import {PostModel} from "../../models/post.model";

const getPostsState = createFeatureSelector<PostsState>('postsReducer');

export const getAllPosts = createSelector(
  getPostsState,
  (state: PostsState) => state.posts
);

export const getPostById = (postId: string) => createSelector(
  getPostsState,
  (state: PostsState) => state.posts.find((post: PostModel) => post.id === postId)
)
