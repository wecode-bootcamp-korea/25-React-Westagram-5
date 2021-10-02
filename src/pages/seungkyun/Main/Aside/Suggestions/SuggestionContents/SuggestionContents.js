import React from 'react';
import { Link } from 'react-router-dom';

class SuggestionContents extends React.Component {
  render() {
    const { username, status, userimg, link } = this.props;
    return (
      <div className="suggestion_content">
        <div className="image_container">
          <img alt="" src={userimg} />
        </div>
        <div className="suggestion_account">
          <div>
            <Link to={link}>{username}</Link>
            <span>{status}</span>
          </div>
          <button>팔로우</button>
        </div>
      </div>
    );
  }
}

export default SuggestionContents;
