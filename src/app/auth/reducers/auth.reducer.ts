import * as userActions from '../actions/auth.action';

export type Action = userActions.All;

export interface State {
  uid: string;
  displayName: string;
  loading?: boolean;
  error?: string;
}

const defaultUser: State = { uid: null, displayName: 'GUEST', loading: false};

export function userReducer (state: State = defaultUser, action: Action) {
  switch (action.type) {
    case userActions.AuthActionTypes.GET_USER :
      return { ...state, loading: true};
    case userActions.AuthActionTypes.AUTHENTICATED:
      return { ...state, ...action.payload, loading: false };
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

export const getAuthState = (state: State) => state;
