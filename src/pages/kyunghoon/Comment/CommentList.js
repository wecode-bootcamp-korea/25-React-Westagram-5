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
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }

  render() {
    return (
      <>
        <ul className="comment_list">
          {this.state.commentList.map(el => {
            return (
              <Comment key={el.id} name={el.userName} comment={el.content} />
            );
          })}
        </ul>
      </>
    );
  }
}

export default CommentList;
