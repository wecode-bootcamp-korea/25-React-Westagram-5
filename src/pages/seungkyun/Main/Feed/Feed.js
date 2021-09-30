/*eslint-disable*/
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faHeart,
  faComment,
  faPaperPlane,
  faSmile,
} from '@fortawesome/free-regular-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import AddComment from './Comment/AddComment';
import SavedCommentList from './Comment/SavedCommentList';
// import './Feed.scss';

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      commentInput: '',
      commentList: [],
      isBtnActive: false,
    };
  }

  getText = e => {
    this.setState({
      commentInput: e.target.value,
    });
  };

  addComment = () => {
    this.setState({
      commentList: this.state.commentList.concat(this.state.commentInput),
      commentInput: '',
      isBtnActive: false,
    });
  };

  enterKey = e => {
    if (e.key === 'Enter' && this.state.isBtnActive) {
      e.preventDefault();
      this.addComment();
    }
  };

  activeBtn = () => {
    this.state.commentInput
      ? this.setState({ isBtnActive: true })
      : this.setState({ isBtnActive: false });
  };

  render() {
    const { commentInput, commentList } = this.state;
    const { username, userImg, feedImg, content, commentData } = this.props;
    return (
      <article className="feeds">
        <div className="feedHeader">
          <img alt="personalPictureInFeeds" src={userImg} />
          <div className="feedHeaderInside">
            <a className="accountName" href="#">
              {username}
            </a>
            <button>
              <FontAwesomeIcon
                className="fas fa-ellipsis-h"
                icon={faEllipsisH}
              />
            </button>
          </div>
        </div>
        <img alt="Main Images" className="feedImage" src={feedImg} />
        <div className="iconsContainer">
          <div className="iconsLeft">
            <button>
              <FontAwesomeIcon className="far fa-heart" icon={faHeart} />
            </button>
            <button>
              <FontAwesomeIcon className="far fa-comment" icon={faComment} />
            </button>
            <button>
              <FontAwesomeIcon
                className="far fa-paper-plane"
                icon={faPaperPlane}
              />
            </button>
          </div>
          <div className="iconsRight">
            <button>
              <FontAwesomeIcon
                className="fas fa-ellipsis-h"
                icon={faBookmark}
              />
            </button>
          </div>
        </div>
        <div className="likePersonContainer">
          <div className="likeBySomeone">
            <a href="">
              <img
                alt="someone's personal Image"
                className="likePersonPic"
                src="./images/seungkyun/IMG_1113.JPG"
              />
            </a>
            <div className="likePersonText">
              <a src="##">사람이름</a>님&nbsp;
              <a>
                외 <span>00명</span>
              </a>
              이 좋아합니다
            </div>
          </div>
        </div>
        <div className="commentContainer">
          <div className="picText">
            <div>
              <a href="#">{username}</a>
              <span>{content}</span>
            </div>
            {[...commentData].map(item => {
              return (
                <SavedCommentList
                  key={item.commentId}
                  username={item.username}
                  content={item.content}
                />
              );
            })}
            <AddComment commentList={commentList} />
          </div>
        </div>
        <div className="days">
          <time dateTime="20:00"></time>
          <time dateTime="2021-09-10T13:55:10" title="2021년 9월 10일">
            1일 전
          </time>
        </div>
        <div className="makeCommentContainer">
          <button>
            <FontAwesomeIcon className="far fa-smile" icon={faSmile} />
          </button>
          <textarea
            className="commentField"
            placeholder="댓글 달기..."
            value={commentInput}
            onChange={this.getText}
            onKeyUp={this.activeBtn}
            onKeyPress={this.enterKey}
          ></textarea>
          <button
            className={
              this.state.isBtnActive ? 'uploadComment active' : 'uploadComment'
            }
            onClick={this.addComment}
            disabled={!this.state.isBtnActive}
          >
            게시
          </button>
        </div>
      </article>
    );
  }
}

export default Feed;
