// eslint-disable-next-line
import React from 'react';
import './Main.scss';
import Nav from './Nav';
import Feeds from './Feeds';
import MainR from './MainR';

class MainYoonHee extends React.Component {
  render() {
    return (
      <body className="main-body">
        <Nav />
        <main>
          <Feeds />
          <MainR />
        </main>
      </body>
    );
  }
}

export default MainYoonHee;
