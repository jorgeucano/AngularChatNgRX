import { Component, OnInit } from '@angular/core';
import {IUser} from '../../interfaces/IUser';
import {AuthService} from '../services/auth.service';
import {UserService} from '../../user/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser;
  loginProccess: boolean;
  error: boolean = false;

  // constructor(private authService: AuthService) {
  constructor(private userService: UserService) {
    this.loginProccess = false;
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
    this.loginProccess = true;
    this.userService.login(this.user).subscribe(
      (resp) => {
        console.log(resp);
        this.loginProccess = false;
        this.error = !resp;
      },
      (err) => {
        console.log('err', err);
        this.loginProccess = false;
      }
    );

  }

}
