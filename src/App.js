import React from 'react';
import Login from './modules/login/login';
import Home from '../src/modules/home/Home';
import OrderLayout from '../src/modules/OrderLayout';
import { Switch, Route, } from "react-router-dom";
import DefaultLayout from './modules/DefaultLayout';
import Page404 from './modules/Page404';
import './index.scss';

function App() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <DefaultLayout>
        <Route path="/404" exact component={Page404}></Route>
        <Route path="/"  exact component={Home}></Route>

      </DefaultLayout>
    </Switch>
  );
}

export default App;
