import React from 'react';
import Comment from './Comment';
import './MainFeed.scss';

class MainFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      commentList: [],
    };
  }

  writeComment = e => {
    this.setState({
      comment: e.target.value,
    });
  };

  addComment = e => {
    e.preventDefault();
    const { comment, commentList } = this.state;
    this.setState({
      commentList: commentList.concat(comment),
      comment: '',
    });
  };

  render() {
    console.log(this.state);
    return (
      <article>
        <div className="articleTop">
          <div className="headerLeft">
            <img
              alt="profile icon"
              id="profile"
              src="images/donghyeok/profile.png"
            />
            <span className="myId"> wecode.bootcamp </span>
          </div>
          <div className="headerRight">
            <img alt="more icon" id="more" src="images/donghyeok/more.png" />
          </div>
        </div>
        <img
          alt="mainimg"
          width="100%"
          src="images/donghyeok/shayna-douglas-h5Bnss19KSo-unsplash.jpg"
        />
        <div className="articleBottom">
          <span className="articleBottomLeft">
            <img
              alt="heart icon"
              id="heart"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
            <img
              alt="comment icon"
              id="more"
              src="images/donghyeok/comment.png"
            />
            <img
              alt="upload icon"
              id="more"
              src="images/donghyeok/upload.png"
            />
          </span>
          <span className="articleBottomRight">
            <img alt="more icon" id="more" src="images/donghyeok/save.png" />
          </span>
        </div>
        <span className="articleBottomCommentlike">
          <img
            alt="profile icon"
            id="profile"
            src="images/donghyeok/profile.png"
          />
          <span>ainworld님 외 10명이 좋아합니다.</span>
        </span>
        <div className="articleBottomCommentbox">
          <span className="commentId">meechindol</span>
          <p>머하냐...</p>
          <div className="articleBottomAll">
            <a href=" ">모두 보기</a>
          </div>
        </div>
        <div className="atticleBottomUndercommentbox">
          <ul id="comments">
            <li>
              <span className="commentId">asd_123</span>
              <span>손가락 부러졌음?</span>
            </li>
          </ul>
        </div>
        <ul className="commentList">
          {this.state.commentList.map((comment, index) => {
            return <Comment key={index} comment={comment} />;
          })}
        </ul>
        <form className="articleBottomComment" onSubmit={this.addComment}>
          <input
            type="text"
            id="commentInput"
            placeholder="댓글 달기..."
            onChange={this.writeComment}
            value={this.state.comment}
          />
          <button id="submit">게시</button>
        </form>
      </article>
    );
  }
}

export default MainFeed;
