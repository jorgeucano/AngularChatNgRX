import * as AuthActions from '../actions/auth.action';
import {AuthActionTypes} from '../actions/auth.action';


export interface State {
  user: Array<any>;
  tokens: Array<any>;
  error: string;
  isLoading: boolean;
}

const initialState: State = {
  user: [],
  tokens: [],
  error: '',
  isLoading: false
};

export function AuthReducer(state = [], action: AuthActions.actions) {

  switch (action.type) {
    case AuthActionTypes.LoginUser:
      return action;
    case AuthActionTypes.LoggedUser:
      return {
        ...state,
        isLoading: true,
        tokens: action.payload,
      };
    case AuthActionTypes.LoginUserError:
      return {
        ...state,
        isLoading: false,
        error: 'Email or password incorrect'
      };
    default:
      return state;
  }

}

export const getAuthState = (state: State) => state.user;
export const getAuthAction = (action: any) => action.payload;
export const getAuthError = (state: State) => state.error;
