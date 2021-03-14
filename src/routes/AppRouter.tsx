import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import PublicRoute from './components/publicRoute';
import ProtectedRoute from './components/protectedRoute';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute component={Login} path={'/login'} />
        <ProtectedRoute component={Dashboard} path={'/'} />
      </Switch>
    </BrowserRouter>
  );
};

export const AdminRoute = () => {
  return (
    <Switch>
      <Route exact path={'/home'} component={Home} />
      <Route path={'/about-us'} component={AboutUs} />
    </Switch>
  );
};

export default AppRouter;
