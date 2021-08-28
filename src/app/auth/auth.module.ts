import {NgModule} from "@angular/core";
import {AuthRoutingModule} from "./auth-routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from './login/login.component';
import {StoreModule} from "@ngrx/store";
import {AUTH_STATE_NAME} from "./state/auth.selectors";
import {authReducer} from "./state/auth.reducer";

@NgModule({
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(AUTH_STATE_NAME, authReducer)
  ],
  exports: [],
  declarations: [
    LoginComponent
  ]
})
export class AuthModule {

}
