import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchList from './SearchList/SearchList';
import './SearchBar.scss';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      searchedUserList: [],
    };
  }

  componentDidMount() {
    fetch('/data/userData.json')
      .then(result => result.json())
      .then(data => {
        this.setState({
          userData: data,
        });
      });
  }

  searchUser = e => {
    const filtering = this.state.userData.filter(id =>
      id.username.includes(e.target.value)
    );

    this.setState({
      searchedUserList: e.target.value.length === 0 ? [] : filtering,
    });
  };

  render() {
    return (
      <div className="navCenter">
        <input
          className="searchField"
          placeholder="검색"
          onChange={this.searchUser}
        />
        <FontAwesomeIcon
          className={`${
            this.state.searchedUserList == 0
              ? 'fas fa-search'
              : 'serach_icon_hide'
          }`}
          icon={faSearch}
        />
        <div className="search_result_container">
          <ul>
            {this.state.searchedUserList.map(item => {
              const { id, username, status, userimg, link } = item;
              return (
                <SearchList
                  key={id}
                  username={username}
                  status={status}
                  userimg={userimg}
                  link={link}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchBar;
