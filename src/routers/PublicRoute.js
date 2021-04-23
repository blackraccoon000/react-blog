import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/Header';
import HeaderPc from '../organisms/HeaderPc';

const PublicRoute = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      component={(rest) => {
        return (
          <div>
            <HeaderPc
              bgColor="#e9e3da"
              borderColor="#bbb4b4"
              fontColor="#a27b7b"
              fontSize={18}
              headerColor="#c7c7c7"
              size="large"
            />
            <Component {...rest} />
          </div>
        );
      }}
    />
  );
};

export default PublicRoute;
