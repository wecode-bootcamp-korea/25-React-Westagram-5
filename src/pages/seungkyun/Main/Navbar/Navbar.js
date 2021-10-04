import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import SearchBar from './SearchBar/SearchBar';
import './Navbar.scss';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navPostionSet">
        <div className="navContainer">
          <div className="navLeft">
            <FontAwesomeIcon className="fab fa-instagram" icon={faInstagram} />
            <a className="westagramLogo" href="main.html">
              WEstargram
            </a>
          </div>
          <SearchBar />
          <div className="navRight">
            <a href="#">
              <img
                alt="explore img"
                className="navIcons"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              />
            </a>
            <a href="#">
              <img
                alt="heart img"
                className="navIcons"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
            </a>
            <a href="#">
              <img
                alt="profile img"
                className="navIcons"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
