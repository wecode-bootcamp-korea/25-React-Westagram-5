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
import './Feed.scss';

// 덧글 관련 기능을 위해 임시로 배치... this.props.commentData.length를 처음 저장받으면 될 것같은데 흠...
let id = 0;

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      commentInput: '',
      commentList: [],
    };
  }

  getText = e => {
    this.setState({
      commentInput: e.target.value,
    });
  };

  addComment = () => {
    this.setState({
      commentList: this.state.commentList.concat({
        id: ++id,
        content: this.state.commentInput,
        isLiked: false,
      }),
      commentInput: '',
    });
  };

  addCommentByEnterkey = e => {
    if (e.key === 'Enter' && this.state.commentInput) {
      e.preventDefault();
      this.addComment();
    }
  };

  deleteComment = comment => {
    const newCommentList = this.state.commentList.filter(
      item => item.id !== comment
    );
    this.setState({ commentList: newCommentList });
  };

  toggleLikeBtn = comment => {
    this.setState({
      commentList: this.state.commentList.map(item =>
        item.id === comment ? { ...item, isLiked: !item.isLiked } : item
      ),
    });
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
        <div className="iconsWrapper">
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
            {commentData.map(item => {
              return (
                <SavedCommentList
                  key={item.commentId}
                  id={item.commentId}
                  username={item.username}
                  content={item.content}
                />
              );
            })}
            {commentList.map(item => {
              return (
                <AddComment
                  key={item.id}
                  id={item.id}
                  content={item.content}
                  isLiked={item.isLiked}
                  deleteComment={this.deleteComment}
                  toggleLikeBtn={this.toggleLikeBtn}
                />
              );
            })}
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
            onKeyPress={this.addCommentByEnterkey}
          />
          <button
            className={`uploadComment ${commentInput ? 'active' : ''}`}
            onClick={this.addComment}
            disabled={!commentInput}
          >
            게시
          </button>
        </div>
      </article>
    );
  }
}

export default Feed;
