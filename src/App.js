import React from 'react';
import Login from './modules/login/login';
import Home from '../src/modules/home/Home';
import OrderLayout from '../src/modules/OrderLayout';
import { Switch, Route, } from "react-router-dom";
import DefaultLayout from './modules/DefaultLayout';
import './index.scss';

function App() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <DefaultLayout>
        <Route path="/" exact component={Home}></Route>
        <Route path="/order" exact component={OrderLayout}></Route>
      </DefaultLayout>
    </Switch>
  );
}

export default App;
