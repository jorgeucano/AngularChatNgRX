import { Component, OnInit } from '@angular/core';

import * as userActions from '../actions/auth.action';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../reducers/reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user: any;

  constructor(private store: Store<fromAuth.State>) { }

  ngOnInit() {
    this.store.dispatch(new userActions.GetUser());
    this.user = this.store.pipe(select(fromAuth.getAuth));
  }

  googleLogin() {
    this.store.dispatch(new userActions.GoogleLogin());
  }

  logout() {
    this.store.dispatch(new userActions.Logout());
  }


}
