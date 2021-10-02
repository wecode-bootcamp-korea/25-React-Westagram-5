// eslint-disable-next-line
import React from 'react';
import Nav from './Nav';
import Feeds from './Feeds';
import MainR from './MainR';
import './Main.scss';

class MainYoonHee extends React.Component {
  render() {
    return (
      <div className="main-body">
        <Nav />
        <main>
          <Feeds />
          <MainR />
        </main>
      </div>
    );
  }
}

export default MainYoonHee;
