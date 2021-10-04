import React from 'react';

class SearchList extends React.Component {
  render() {
    const { username, status, userimg, link } = this.props;
    return (
      <li className="search_content">
        <div className="image_container">
          <img className="search_userimg" alt="userImage" src={userimg} />
        </div>
        <div className="searched_account">
          <h4>{username}</h4>
          <span>{status}</span>
        </div>
      </li>
    );
  }
}

export default SearchList;
