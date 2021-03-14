import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { loginSuccess } from '../../../pages/Login/reducer';
import store from '../../../store/store';

const PublicRoute = ({ component, ...rest }: any) => {
  const isAuthenticated = () => {
    const user = localStorage.getItem('user');

    if (user) {
      store.dispatch(loginSuccess(JSON.parse(user)));
    }

    return user;
  };

  const renderComponent = (props: any) => {
    if (isAuthenticated()) {
      return <Redirect to={'/'} />;
    } else {
      return React.createElement(component, props);
    }
  };

  return <Route {...rest} render={renderComponent} />;
};

export default PublicRoute;
