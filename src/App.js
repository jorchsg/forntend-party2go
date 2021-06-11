import React from 'react';
import Login from './modules/login/login';
import Home from '../src/modules/home/Home';
import { Switch, Route, } from "react-router-dom";
import './index.scss';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/login" exact component={Login} />
    </Switch>
  );
}

export default App;
