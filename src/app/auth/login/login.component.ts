import { Component, OnInit } from '@angular/core';
import {IUser} from '../../interfaces/IUser';

import { Store, select } from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';
import * as Auth from '../actions/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser;

  error$ = this.store.select(state => state.auth.error);
  isLoading$ = this.store.select(state => state.auth.isLoading);

  constructor(private store: Store<any>) {

  }

  ngOnInit() {

    // fake login
    this.user = {
      username: 'jorgeucano',
      email: 'jorgeuc@no.com',
      password: 'jorgeucano'
    };

  }

  login() {
    // login user
    this.store.dispatch(new Auth.LoginUser({user: this.user}));
  }

}
