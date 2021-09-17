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
          <Route exact path="/login-donghyeok" component={LoginDongHyeok} />
          <Route exact path="/main-donghyeok" component={MainDongHyeok} />
          <Route exact path="/login-kyunghoon" component={LoginKyungHoon} />
          <Route exact path="/main-kyunghoon" component={MainKyungHoon} />
          <Route exact path="/login-seungkyun" component={LoginSeungKyun} />
          <Route exact path="/main-seungkyun" component={MainSeungKyun} />
          <Route exact path="/login-yoonhee" component={LoginYoonHee} />
          <Route exact path="/main-yoonhee" component={MainYoonHee} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
