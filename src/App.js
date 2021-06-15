import React from 'react';
import Login from './modules/login/login';
import Home from '../src/modules/home/Home';
import { Switch, Route, } from "react-router-dom";
import DefaultLayout from './modules/DefaultLayout';
import './index.scss';

function App() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <DefaultLayout>
        <Route path="/" exact component={Home}></Route>
      </DefaultLayout>
    </Switch>
  );
}

export default App;
