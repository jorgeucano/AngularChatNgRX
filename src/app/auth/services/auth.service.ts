import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { IUser } from '../../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: IUser ): Observable<any> {
    // emular un true
    return from([true]);
  }


}
