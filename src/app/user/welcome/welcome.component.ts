import { Component, OnInit } from '@angular/core';
import {IUser} from '../../interfaces/IUser';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user: IUser;
  loginProccess: boolean = false;

  constructor(private userService: UserService) {
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
      },
      (err) => {
        console.log(err);
        this.loginProccess = false;
      }
    );

  }
}
