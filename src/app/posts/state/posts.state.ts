import {PostModel} from "../../models/post.model";

export interface PostsState {
  posts: PostModel[]
}

export const INITIAL_STATE: PostsState = {
  posts: [
    {id: '1', title: 'Sample Title 01', description: 'Sample Description 01'},
    {id: '2', title: 'Sample Title 02', description: 'Sample Description 02'},
    {id: '3', title: 'Sample Title 03', description: 'Sample Description 03'},
    {id: '4', title: 'Sample Title 04', description: 'Sample Description 04'},
    {id: '5', title: 'Sample Title 05', description: 'Sample Description 05'},
    {id: '6', title: 'Sample Title 06', description: 'Sample Description 06'},
    {id: '7', title: 'Sample Title 07', description: 'Sample Description 07'},
  ]
};
