// complex stream of observables
// multiple chaining of rxjs operators

import {createAction} from "@ngrx/store";

class LoginService {}

import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

@Injectable({
  providedIn: 'root'
})
export class AuthEffects {
  constructor(private actions$: Actions, private loginService: LoginService) {
  }
}
