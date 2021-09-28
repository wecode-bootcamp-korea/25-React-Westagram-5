// eslint-disable-next-line
import React from 'react';
import './Main.scss';
import CommentBox from './CommentBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera,
  faCompass,
  faHeart,
  faUser,
  faEllipsisH,
  faComment,
  faDownload,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons';

class MainYoonHee extends React.Component {
  render() {
    return (
      <body className="main-body">
        <nav className="nav">
          <div className="nav-left">
            <div className="icon main-logo">
              <FontAwesomeIcon icon={faCamera} className="search" />
            </div>
            <div className="nav__border"></div>
            <div className="westagram">westagram</div>
          </div>
          <div className="nav-center">
            <input className="search-bar"></input>
          </div>
          <div className="nav-right">
            <div className="icon nav-icon">
              <FontAwesomeIcon icon={faCompass} className="search" />
            </div>
            <div className="icon heart-icon">
              <FontAwesomeIcon icon={faHeart} className="search" />
            </div>
            <div className="icon nav-icon">
              <FontAwesomeIcon icon={faUser} className="search" />
            </div>
          </div>
        </nav>
        <main>
          <div className="feeds">
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
              <img
                className="feed__img"
                src="images/yoonhee/imgg.jpg"
                alt="로고"
              />
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
                <span className="text">
                  한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어
                </span>
                <div className="text text--gray">5분 전</div>
              </div>
              <CommentBox />
            </article>
          </div>
          <div className="main-right">
            <div className="user main-right__user">
              <img
                className="user__img user__img--big"
                alt="user"
                src="images/yoonhee/star.jpeg"
              />
              <div className="user-text2">
                <div className="user__id">yoooon0w0</div>
                <div className="text--gray">yoon0w0/윤윤윤</div>
              </div>
            </div>
            <div className="main-right__story">
              <div className="box box-padding">
                <div className="main-right__header">
                  <span className="text--gray">스토리</span>
                  <span className="text user__id">모두보기</span>
                </div>
                <ul>
                  <li>
                    <div className="user main-right__user">
                      <img
                        className="user__img user__img--brder-red"
                        alt="user"
                        src="images/yoonhee/star.jpeg"
                      />
                      <div className="user-id2">
                        <div className="user__id">yoooon0w0</div>
                        <div className="text--gray">2시간 전</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="user main-right__user">
                      <img
                        className="user__img user__img--brder-red"
                        alt="user"
                        src="images/yoonhee/star.jpeg"
                      />
                      <div className="user-id2">
                        <div className="user__id">yoooon0w0</div>
                        <div className="text--gray">2시간 전</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className=" box box-padding">
                <div className="main-right__header">
                  <span className="text--gray">회원님을 위한 추천</span>
                  <span className="text user__id">모두보기</span>
                </div>
                <ul>
                  <li>
                    <div className="user main-right__user2">
                      <div className="user-and-botton">
                        <img
                          className="user__img user__img--brder-red"
                          alt="user"
                          src="images/yoonhee/star.jpeg"
                        />
                        <div className="user-id2">
                          <div className="user__id">yoooon0w0</div>
                          <div className="text--gray">한국어한국어한국어</div>
                        </div>
                      </div>
                      <button className="btn btn--hover nnn">팔로우</button>
                    </div>
                  </li>
                  <li>
                    <div className="user main-right__user2">
                      <div className="user-and-botton">
                        <img
                          className="user__img user__img--brder-red"
                          alt="user"
                          src="images/yoonhee/star.jpeg"
                        />
                        <div className="user-id2">
                          <div className="user__id">yoooon0w0</div>
                          <div className="text--gray">한국어한국어한국어</div>
                        </div>
                      </div>
                      <button className="btn btn--hover nnn">팔로우</button>
                    </div>
                  </li>
                </ul>
              </div>
              <footer className="footer">
                <div className="text--gray">
                  한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어한국어
                </div>
                <div className="text--gray">duddjdlqslek</div>
              </footer>
            </div>
          </div>
        </main>
      </body>
    );
  }
}

export default MainYoonHee;
