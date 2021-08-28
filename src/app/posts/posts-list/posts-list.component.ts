import {Component, OnInit} from '@angular/core';
import {AppState} from "../../store/app.state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {PostModel} from "../../models/post.model";
import {getAllPosts} from "../state/posts.selectors";
import {removePost} from "../state/posts.action";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts$: Observable<PostModel[]> | undefined;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.posts$ = this.store.select(getAllPosts)
  }


  onRemove(postId: string | any) {
    this.store.dispatch(removePost({postId}));
  }
}
