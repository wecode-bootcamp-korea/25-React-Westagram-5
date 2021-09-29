import React, { Component } from 'react';

class SavedCommentList extends Component {
  render() {
    const { id, username, content } = this.props;
    return (
      <div className="commentLines" key={id}>
        <div>
          <a href="#">{username}</a>
          <span>{content}</span>
        </div>
        <img
          alt="heart img"
          className="commentHeart"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
        />
      </div>
    );
  }
}

export default SavedCommentList;
