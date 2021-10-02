import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <li className="comment_box">
        <span className="comment_id"> ehdgur11 {this.props.comment}</span>
      </li>
    );
  }
}

export default Comment;
