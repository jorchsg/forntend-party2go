import React from 'react';
import Login from './modules/login/login';
import Home from '../src/modules/home/Home';
import OrderLayout from '../src/modules/OrderLayout';
import { Switch, Route, } from "react-router-dom";
import DefaultLayout from './modules/DefaultLayout';
import Page404 from './modules/Page404/index';
import Sonido from './modules/sonido/index';
import Pago from './modules/pago/index';
import Provider from '../src/components/Provider/index'
import StepProvider from '../src/components/ProviderStep/index'
import './index.scss';

function App() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <DefaultLayout>
            <Route path="/"  exact component={Home}></Route>
            <Route path="/404" exact component={Page404}></Route>

        <StepProvider>
          <Provider>
            <Route path="/order" exact component={OrderLayout}></Route>
          </Provider>
          </StepProvider>
      </DefaultLayout>
    </Switch>
  );
}

export default App;
