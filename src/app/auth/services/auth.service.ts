import { Injectable } from '@angular/core';

import {from, Observable, of, throwError} from 'rxjs';
import { IUser } from '../../interfaces/IUser';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userFake: IUser = {
    username: 'jorgeucano',
    email: 'jorgeuc@no.com',
    password: 'jorgeucano'
  };

  constructor() { }

  login(user: any ): Observable<any> {
    // emular un true
    let toSend = {
      isLoading: false,
      error: true,
      ...user
    };
    if (JSON.stringify(user.user) === JSON.stringify(this.userFake)) {
      toSend = {
        isLoading: false,
        error: false,
        ...user
      };
    } else {
      return throwError('Invalid username or password');
    }
    return of (toSend).pipe(delay(5000));
  }


}
