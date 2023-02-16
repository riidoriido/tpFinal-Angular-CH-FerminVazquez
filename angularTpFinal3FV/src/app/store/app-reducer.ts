import { ActionReducerMap } from '@ngrx/store';
import { authReducer } from './states/auth/auth.reducer';

export interface AppState {
  authState: any;
}

export const appReducer: ActionReducerMap<AppState> = {
  authState: authReducer,
};
