/*eslint-disable*/
import React from 'react';
import Navbar from './Navbar/Navbar';
import Feed from './Feed/Feed';
import Aside from './Aside/Aside';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
    };
  }

  componentDidMount() {
    fetch('/data/feedData.json')
      .then(result => result.json())
      .then(data => {
        this.setState({
          feedList: data,
        });
      });
  }

  render() {
    return (
      <div className="main-seungkyun">
        <Navbar />
        <main className="bodyContainer">
          <div className="feedWrapper">
            {this.state.feedList.map(item => {
              const { id, username, userImg, feedImg, content, commentData } =
                item;
              return (
                <Feed
                  key={id}
                  username={username}
                  userImg={userImg}
                  feedImg={feedImg}
                  content={content}
                  commentData={commentData}
                />
              );
            })}
          </div>
          <Aside />
        </main>
      </div>
    );
  }
}

export default Main;
