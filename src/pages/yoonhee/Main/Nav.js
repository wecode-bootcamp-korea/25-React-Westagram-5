import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera,
  faCompass,
  faHeart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav-left">
          <div className="icon main-logo">
            <FontAwesomeIcon icon={faCamera} className="search" />
          </div>
          <div className="nav__border"></div>
          <div className="westagram">westagram</div>
        </div>
        <div className="nav-center">
          <input className="search-bar"></input>
        </div>
        <div className="nav-right">
          <div className="icon nav-icon">
            <FontAwesomeIcon icon={faCompass} className="search" />
          </div>
          <div className="icon heart-icon">
            <FontAwesomeIcon icon={faHeart} className="search" />
          </div>
          <div className="icon nav-icon">
            <FontAwesomeIcon icon={faUser} className="search" />
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
