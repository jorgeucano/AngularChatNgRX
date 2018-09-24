import * as userActions from '../actions/auth.action';
import { User } from '../models/user';

export type Action = userActions.All;

const defaultUser = new User(null, 'GUEST');

export function userReducer (state: User = defaultUser, action: Action) {
  switch(action.type) {
    case userActions.AuthActionTypes.GET_USER :
      return { ...state, loading: true};
    
    case userActions.AuthActionTypes.AUTHENTICATED:
      return { ...state, ...action.payload, loading: false }
    
    case userActions.AuthActionTypes.NOT_AUTHENTICATED:
        return { ...state, ...defaultUser, loading: false };

    case userActions.AuthActionTypes.GOOGLE_LOGIN:
      return { ...state, loading: true };

    case userActions.AuthActionTypes.AUTH_ERROR:
      return { ...state, ...action.payload, loading: false };

    case userActions.AuthActionTypes.LOGOUT:
      return { ...state, loading: true };
  }
}