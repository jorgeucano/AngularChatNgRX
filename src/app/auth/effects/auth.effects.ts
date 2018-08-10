import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import {catchError, exhaustMap, map, tap} from 'rxjs/operators';

import {
  AuthActionTypes,
  LoggedIn, LoggedUser,
  LoginUser, LogoutAuth,
  LoginUserError
} from '../actions/auth.action';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthEffects {


  @Effect()
  LoginUserError$: Observable<Action> = this.actions$.pipe(
    ofType<LoginUserError>(AuthActionTypes.LoginUserError),
    tap(v => console.log('LoggedAPI error', v.payload)),
    map (data => {
      console.log('ERROR', data);
      return { type: 'LOGIN_API_ERROR', payload: 'Email or password incorrect' };
    })
  );


  // this efect redirect to home
  @Effect()
  LoginUser$: Observable<Action> = this.actions$.pipe(
    ofType<LoginUser>(AuthActionTypes.LoginUser),
    tap(v => console.log('loginUser effect tap', v)),
    map(action => action.payload),
    exhaustMap(auth => {
      return this.authService.login(auth)
        .pipe(
        map(response => new LoggedUser( response )),
        catchError(error => of(new LoginUserError(error)))
      );
    })
  );

  @Effect({ dispatch: false })
  LoggedUser$ = this.actions$.pipe(
    ofType<LoggedUser>(AuthActionTypes.LoggedUser),
    tap(v => this.router.navigate(['/chats']))
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router) {}
}
