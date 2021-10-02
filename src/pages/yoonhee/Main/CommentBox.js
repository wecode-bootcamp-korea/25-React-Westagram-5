import React from 'react';
import Comment from './Comment';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedComment: '', commentList: [] };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addCommentByEnter = e => {
    if (e.key === 'Enter') {
      this.addComment();
    }
  };

  addComment = () => {
    const { feedComment, commentList } = this.state;
    this.setState({
      commentList: [...commentList, feedComment],
      feedComment: '',
    });
  };

  render() {
    return (
      <>
        <div className="feed__comment-box">
          <input
            name="feedComment"
            className="comment__input"
            placeholder="댓글 달기..."
            onChange={this.handleInput}
            onKeyDown={this.addCommentByEnter}
            value={this.state.feedComment}
          />
          <button
            className="btn btn--hover comment__btn"
            onClick={this.addComment}
          >
            게시
          </button>
        </div>
        <div className="feed__comment">
          <ul className="feed__comment-list">
            {this.state.commentList.map((comment, index) => {
              return <Comment key={index} innerText={comment} />;
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default CommentBox;
