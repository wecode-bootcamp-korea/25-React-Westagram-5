/*eslint-disable*/
import React from 'react';

class SavedCommentList extends React.Component {
  render() {
    const { id, username, content } = this.props;
    return (
      <div className="commentLines" id={id}>
        <div>
          <a href="#">{username}</a>
          <span>{content}</span>
        </div>
        <img
          alt="heart img"
          className="like_button"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
        />
      </div>
    );
  }
}

export default SavedCommentList;
