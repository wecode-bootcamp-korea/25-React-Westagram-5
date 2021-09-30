import React from 'react';
import Comment from './Comment';
import './MainFeed.scss';

class MainFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      commet: '',
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

    document.getElementById('commentInput').value = '';
  };

  render() {
    return (
      <article>
        <div className="article_top">
          <div className="headerLeft">
            <img
              alt="profile icon"
              id="profile"
              src="images/donghyeok/profile.png"
            />
            <span className="my_id"> wecode.bootcamp </span>
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
        <div className="article_bottom">
          <span className="article_bottom_left">
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
          <span className="article_bottom_right">
            <img alt="more icon" id="more" src="images/donghyeok/save.png" />
          </span>
        </div>
        <span className="article_bottom_commentlike">
          <img
            alt="profile icon"
            id="profile"
            src="images/donghyeok/profile.png"
          />
          <span>ainworld님 외 10명이 좋아합니다.</span>
        </span>
        <div className="article_bottom_commentbox">
          <span className="comment_id">meechindol</span>
          <p>머하냐...</p>
          <div className="article_bottom_all">
            <a href=" ">모두 보기</a>
          </div>
        </div>
        <div className="atticle_bottom_undercommentbox">
          <ul id="comments">
            <li>
              <span className="comment_id">asd_123</span>
              <span>손가락 부러졌음?</span>
            </li>
          </ul>
        </div>
        <ul className="comment_list">
          {this.state.commentList.map((comment, index) => {
            return <Comment key={index} comment={comment} />;
          })}
        </ul>
        <form className="article_bottom_comment" onSubmit={this.addComment}>
          <input
            type="text"
            id="commentInput"
            placeholder="댓글 달기..."
            onChange={this.writeComment}
          />
          <button id="submit">게시</button>
        </form>
      </article>
    );
  }
}

export default MainFeed;
