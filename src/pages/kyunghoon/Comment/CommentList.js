import React from 'react';
import Comment from './Comment.js';

class CommentList extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      comment: '',
    };
  }

  componentDidMount() {
    fetch('/data/commentData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }

  render() {
    return (
      <ul className="comment_list">
        {this.state.commentList.map(comment => {
          return (
            <Comment
              key={comment.id}
              name={comment.userName}
              comment={comment.content}
            />
          );
        })}
      </ul>
    );
  }
}

export default CommentList;
