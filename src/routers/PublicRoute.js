import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/Header';

const PublicRoute = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      component={(rest) => {
        return (
          <div>
            <Header />
            <Component {...rest} />
          </div>
        );
      }}
    />
  );
};

export default PublicRoute;
