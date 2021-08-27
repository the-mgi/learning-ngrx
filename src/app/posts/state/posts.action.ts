import {createAction, props} from "@ngrx/store";
import {PostModel} from "../../models/post.model";

export const ADD_POST_ACTION = '[AddPostComponent] ADD POST';
export const REMOVE_POST_ACTION = '[AddPostComponent] REMOVE POST';

export const addPost = createAction(ADD_POST_ACTION, props<{ post: PostModel; }>());
export const removePost = createAction(REMOVE_POST_ACTION, props<{ postId: string; }>())
