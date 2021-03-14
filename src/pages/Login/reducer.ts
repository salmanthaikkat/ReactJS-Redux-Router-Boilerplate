import { createSlice } from '@reduxjs/toolkit';

export interface CurrentUser {
  id: number;
  username: string;
}

export interface LoginState {
  isAuthenticated: boolean;
  user?: CurrentUser | null;
  loading: boolean;
}

export const initialState: LoginState = {
  isAuthenticated: false,
  user: null,
  loading: false,
};

export const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state, action) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    loginError: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { loginRequest, loginError, loginSuccess } = loginSlice.actions;
