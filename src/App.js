import React from 'react';
import Login from './modules/login/login';
import { Switch, Route, } from "react-router-dom";
import './index.scss';

function App() {
  return (
    <Switch>
        <Route path="/login" component={Login} />
    </Switch>
  );
}

export default App;
