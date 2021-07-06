import React from 'react';
import Login from './modules/login/login';
import Home from '../src/modules/home/Home';
import { Switch, Route, } from "react-router-dom";
import DefaultLayout from './modules/DefaultLayout';
import Page404 from './modules/Page404/index';
import Sonido from './modules/sonido/index'
import './index.scss';

function App() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <DefaultLayout>
      <Route path="/"  exact component={Home}></Route>
      <Route path="/404" exact component={Page404}></Route>
      <Route path="/sonido" exact component={Sonido}></Route>
        

      </DefaultLayout>
    </Switch>
  );
}

export default App;
