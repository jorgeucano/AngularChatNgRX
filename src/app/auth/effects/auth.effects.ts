import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { User } from '../models/user';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

import { Observable, of, from } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as userActions from '../actions/auth.action';

export type Action = userActions.All;

@Injectable({
  providedIn: 'root'
})
export class UserEffects {

    constructor(private actions: Actions, private afAuth: AngularFireAuth) {}

    @Effect()
    getUser: Observable<Action> = this.actions.ofType(userActions.AuthActionTypes.GET_USER)
    .pipe(
      map((action: userActions.GetUser) => action.payload),
      switchMap(payload => this.afAuth.authState),
      map( authData => {
        if (authData) {
          const user = new User(authData.uid, authData.displayName);
          return new userActions.Authenticated(user);
        } else {
          return new userActions.NotAuthenticated();
        }
      }),
      catchError (err => of(new userActions.AuthError()))
      );

      @Effect()
      login: Observable<Action> = this.actions.ofType(userActions.AuthActionTypes.GOOGLE_LOGIN)
        .pipe(
          map((action: userActions.GoogleLogin) => action.payload),
          switchMap(payload => {
            return from (this.googleLogin());
          }),
          map(credential => {
            return new userActions.GetUser();
          }),
          catchError(err => {
            return of(new userActions.AuthError({error: err.message}));
          })
        );

      private googleLogin(): Promise<firebase.auth.UserCredential> {
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.afAuth.auth.signInWithPopup(provider);
      }

     @Effect()
      Logout: Observable<Action> = this.actions.ofType(userActions.AuthActionTypes.LOGOUT)
        .pipe(
          map((action: userActions.Logout) => action.payload),
          switchMap(payload => {
            return of(this.afAuth.auth.signOut());
          }),
          map( authData => {
            return new userActions.NotAuthenticated();
          }),
          catchError(err => {
            console.log('logout', err);
            return of(new userActions.AuthError({err: err.message}));
          })
        )
      ;
}
