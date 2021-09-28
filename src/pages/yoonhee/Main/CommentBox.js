import React from 'react';
import Comment from './Comment';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedComment: '', commentList: [] };
  }

  commentInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  isKeyEnter = e => {
    if (e.key === 'Enter') {
      this.commentAdd();
    }
  };

  commentAdd = () => {
    const { feedComment, commentList } = this.state;
    const newfeedComment = feedComment;
    const addNewFeed = commentList.concat(newfeedComment);
    this.setState({
      commentList: addNewFeed,
      feedComment: '',
    });
  };

  render() {
    return (
      <>
        <div className="feed__comment-box">
          <input
            name="feedComment"
            id="comment-input"
            className="comment__input"
            placeholder="댓글 달기..."
            onChange={this.commentInput}
            onKeyDown={this.isKeyEnter}
            value={this.state.feedComment}
          />
          <button
            id="comment-btn"
            className="btn btn--hover comment__btn"
            onClick={this.commentAdd}
          >
            게시
          </button>
        </div>
        <div className="feed__comment">
          <ul id="comment-list" className="feed__comment-list">
            {this.state.commentList.map((cur, index) => {
              return <Comment id={index} innerText={cur} />;
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default CommentBox;
