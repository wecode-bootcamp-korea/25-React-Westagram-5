import React from 'react';
import CommentBox from './CommentBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faEllipsisH,
  faComment,
  faDownload,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons';

class Feed extends React.Component {
  render() {
    const { img, text } = this.props;
    return (
      <article className="feed">
        <div className="feed__head">
          <div className="user">
            <img
              className="user__img"
              alt="user"
              src="images/yoonhee/star.jpeg"
            />
            <div className="user__id">yoooon0w0</div>
          </div>
          <div className="icon etc-icon">
            <FontAwesomeIcon icon={faEllipsisH} className="search" />
          </div>
        </div>
        <img className="feed__img" src={img} alt="로고" />
        <div className="feed__icons">
          <div className="feed__icons__left">
            <div className="icon heart-icon--red">
              <FontAwesomeIcon icon={faHeart} className="search" />
            </div>
            <div className="icon talk-icon">
              <FontAwesomeIcon icon={faComment} className="search" />
            </div>
            <div className="icon load-icon">
              <FontAwesomeIcon icon={faDownload} className="search" />
            </div>
          </div>
          <div className="feed__icons__right">
            <FontAwesomeIcon icon={faBookmark} className="search" />
          </div>
        </div>
        <div className="feed__likes">
          <div className="user">
            <img
              className="user__img user__img--small"
              alt="user"
              src="images/yoonhee/star.jpeg"
            />
            <div className="user__id">yoon0w0</div>
          </div>
          <div className="text">
            님 외 <b>10명</b>이 좋아합니다
          </div>
        </div>
        <div className="feed__text">
          <span className="user__id">yooon0w0</span>
          <span className="text">{text.slice(0, 50)}...</span>
          <div className="text text--gray">5분 전</div>
        </div>
        <CommentBox />
      </article>
    );
  }
}
export default Feed;
