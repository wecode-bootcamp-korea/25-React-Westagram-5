import React from 'react';
import { Link } from 'react-router-dom';
import './FooterList.scss';

class FooterList extends React.Component {
  render() {
    return (
      <li className="footer_list">
        <Link to={this.props.link}>{this.props.name}</Link>
      </li>
    );
  }
}

export default FooterList;
