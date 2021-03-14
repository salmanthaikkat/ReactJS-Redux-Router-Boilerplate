import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import { Redirect, Route } from 'react-router-dom';
import { LoginState, loginSuccess } from '../../../pages/Login/reducer';
import store from '../../../store/store';

const ProtectedRoute = ({ component, ...rest }: any) => {
  const authState: LoginState = useSelector((state: RootState) => state.auth);

  const isAuthenticated = () => {
    const user = localStorage.getItem('user');

    if (user && !authState.isAuthenticated) {
      store.dispatch(loginSuccess(JSON.parse(user)));
    }

    return user || authState.isAuthenticated;
  };

  const renderComponent = (props: any) => {
    if (isAuthenticated()) {
      return React.createElement(component, props);
    } else {
      return <Redirect to={'/login'} />;
    }
  };

  return <Route {...rest} render={renderComponent} />;
};

export default ProtectedRoute;
