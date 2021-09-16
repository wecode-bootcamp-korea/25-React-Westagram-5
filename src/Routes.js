import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginDongHyeok from "./pages/donghyeok/Login/Login";
import MainDongHyeok from "./pages/donghyeok/Main/Main";

import LoginKyungHoon from "./pages/kyunghoon/Login/Login";
import MainKyungHoon from "./pages/kyunghoon/Main/Main";

import LoginSeungKyun from "./pages/seungkyun/Login/Login";
import MainSeungKyun from "./pages/seungkyun/Main/Main";

import LoginYoonHee from "./pages/yoonhee/Login/Login";
import MainYoonHee from "./pages/yoonhee/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Login_donghyeok" component={LoginDongHyeok} />
          <Route exact path="/Main_donghyeok" component={MainDongHyeok} />

          <Route exact path="/Login_kyunghoon" component={LoginKyungHoon} />
          <Route exact path="/Main_kyunghoon" component={MainKyungHoon} />

          <Route exact path="/Login_seungkyun" component={LoginSeungKyun} />
          <Route exact path="/Main_seungkyun" component={MainSeungKyun} />

          <Route exact path="/Login_yoonhee" component={LoginYoonHee} />
          <Route exact path="/Main_yoonhee" component={MainYoonHee} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
