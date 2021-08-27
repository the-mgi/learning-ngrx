import {NgModule} from "@angular/core";
import {AddPostComponent} from "./add-post/add-post.component";
import {EditPostComponent} from "./edit-post/edit-post.component";
import {PostsListComponent} from "./posts-list/posts-list.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PostsRoutingModule} from "./posts-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PostsRoutingModule
  ],
  declarations: [
    AddPostComponent,
    EditPostComponent,
    PostsListComponent,
  ],
  exports: []
})
export class PostsModule {}
