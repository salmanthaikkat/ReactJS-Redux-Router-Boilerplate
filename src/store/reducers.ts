import { combineReducers } from 'redux';
import { loginSlice } from '../pages/Login/reducer';

const reducers = combineReducers({
  auth: loginSlice.reducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
