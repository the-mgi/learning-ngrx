import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";
import {AppState} from "../../store/app.state";
import {Store} from "@ngrx/store";
import {getPostById} from "../state/posts.selectors";
import {PostModel} from "../../models/post.model";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit, OnDestroy {
  updatePostForm: FormGroup | any;
  subscription: Subscription | any;
  postData: PostModel | any;

  constructor(private activatedRoute: ActivatedRoute, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.subscription = this.store.select(getPostById(params.id))
        .subscribe((post) => {
          console.log('post selected: ', post);
        });
    });
  }

  onUpdateForm() {

  }

  showDescriptionErrors(): string {
    return ""
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
