import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppState} from "../../store/app.state";
import {Store} from "@ngrx/store";
import {PostModel} from "../../models/post.model";
import {addPost, removePost} from "../state/posts.action";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup | any;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(10)])
    })
  }

  onAddPost() {
    if (!this.postForm.valid) {
      return;
    }
    const post: PostModel = {
      title: this.postForm.value.title,
      description: this.postForm.value.description
    };
    this.store.dispatch(addPost({post}))
  }

  showDescriptionErrors(): string {
    const descriptionForm = this.postForm?.get('description');
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
}
