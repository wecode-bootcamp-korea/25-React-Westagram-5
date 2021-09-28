import React from 'react';
import '../Comment/comment.scss';

class Comment extends React.Component {
  render() {
    return (
      <li className="comment_box">
        <span className="comment_id">hoonstagram {this.props.comment}</span>
      </li>
    );
  }
}

export default Comment;
