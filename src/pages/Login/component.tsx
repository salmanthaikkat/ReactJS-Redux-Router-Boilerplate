import React from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './reducer';

const Login = () => {
  const dispatch = useDispatch();

  const onLoginClick = () => {
    dispatch(
      loginSuccess({
        id: 1,
        username: 'kick',
      })
    );
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={onLoginClick}>Request Login</button>
    </div>
  );
};

export default Login;
