import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';

import LoginDongHyeok from './pages/donghyeok/Login/Login';
import MainDongHyeok from './pages/donghyeok/Main/Main';

import LoginKyungHoon from './pages/kyunghoon/Login/Login';
import MainKyungHoon from './pages/kyunghoon/Main/Main';

import LoginSeungKyun from './pages/seungkyun/Login/Login';
import MainSeungKyun from './pages/seungkyun/Main/Main';

import LoginYoonHee from './pages/yoonhee/Login/Login';
import MainYoonHee from './pages/yoonhee/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/Login-donghyeok" component={LoginDongHyeok} />
          <Route exact path="/Main-donghyeok" component={MainDongHyeok} />

          <Route exact path="/Login-kyunghoon" component={LoginKyungHoon} />
          <Route exact path="/Main-kyunghoon" component={MainKyungHoon} />

          <Route exact path="/Login-seungkyun" component={LoginSeungKyun} />
          <Route exact path="/Main-seungkyun" component={MainSeungKyun} />

          <Route exact path="/Login-yoonhee" component={LoginYoonHee} />
          <Route exact path="/Main-yoonhee" component={MainYoonHee} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
