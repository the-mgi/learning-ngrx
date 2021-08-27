import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {AppState} from "../../store/app.state";
import {Store} from "@ngrx/store";
import {getPostById} from "../state/posts.selectors";
import {PostModel} from "../../models/post.model";
import {updatePost} from "../state/posts.action";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit, OnDestroy {
  updatePostForm: FormGroup | any;
  subscription: Subscription | any;
  postData: PostModel | any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.subscription = this.store.select(getPostById(params.id))
        .subscribe((post) => {
          this.postData = post;
          this.createForm();
        });
    });
  }

  showDescriptionErrors(): string {
    const descriptionForm = this.updatePostForm?.get('description');
    if (descriptionForm?.touched && !descriptionForm.valid) {
      if (descriptionForm.errors?.required) {
        return 'Description is Required';
      }

      if (descriptionForm.errors?.minLenght) {
        return 'Description should be of minimum 10 characters length';
      }
    }
    return "";
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private createForm() {
    this.updatePostForm = new FormGroup({
      title: new FormControl(this.postData.title, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(this.postData.description, [Validators.required, Validators.minLength(10)])
    });
  }

  submitUpdateForm() {
    const postData: PostModel = {
      id: this.postData.id,
      title: this.updatePostForm.get('title').value,
      description: this.updatePostForm.get('description').value
    }
    this.store.dispatch(updatePost({updatePostData: postData}));
    this.router.navigate(['posts'])
  }
}
