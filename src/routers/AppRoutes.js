import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import CreateNote from '../components/CreateNote';
import Home from '../components/Home';
import ImgLoad from '../playground/ImgLoad';
import TestComp from '../components/TestComp';
import Translation from '../components/Translation';
import StyleComponent from '../components/StyleComponent';

const AppRoutes = () => {
  return (
    <Switch>
      <PublicRoute path="/" component={Home} exact={true} />
      {/* <PublicRoute path="/imgLoad" component={ImgLoad} /> */}
      <PublicRoute path="/create" component={CreateNote} exact={true} />
      <PublicRoute path="/edit/:id" component={CreateNote} />
      {/* <PrivateRoute path="/create" component={CreateNote} exact={true} />
      <PrivateRoute path="/edit/:id" component={CreateNote} /> */}
      <Route path="/test" component={TestComp} />
      <Route path="/translation" component={Translation} />
      <Route path="/style" component={StyleComponent} />
    </Switch>
  );
};

export default AppRoutes;
