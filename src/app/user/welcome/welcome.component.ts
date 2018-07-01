import { Component, OnInit } from '@angular/core';
import {IUser} from '../../interfaces/IUser';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user: IUser;

  constructor() {

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

  }
}
