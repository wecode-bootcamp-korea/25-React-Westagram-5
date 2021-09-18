import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faHeart,
  faComment,
  faPaperPlane,
  faSmile,
} from '@fortawesome/free-regular-svg-icons';
import { faEllipsisH, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="main-seungkyun">
        <main className="bodyContainer">
          <article className="feeds">
            <div className="feedHeader">
              <img
                alt="personalPictureInFeeds"
                src="./images/seungkyun/IMG_1113.JPG"
              />
              <div className="feedHeaderInside">
                <a className="accountName" href="#">
                  seungkyun_y
                </a>
                <button>
                  <FontAwesomeIcon
                    className="fas fa-ellipsis-h"
                    icon={faEllipsisH}
                  />
                </button>
              </div>
            </div>
            <img
              alt="Main Images"
              className="feedImage"
              src="./images/seungkyun/IMG_2082.jpeg"
            />
            <div className="iconsContainer">
              <div className="iconsLeft">
                <button>
                  <FontAwesomeIcon className="far fa-heart" icon={faHeart} />
                </button>
                <button>
                  <FontAwesomeIcon
                    className="far fa-comment"
                    icon={faComment}
                  />
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
                  <a href="#">seungkyun_y</a>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum dolores aliquam ut, perspiciatis perferendis soluta
                    autem tempore mollitia laborum voluptas est eligendi eius
                    error velit quam eos ipsum tempora reprehenderit.
                  </span>
                </div>
                <div className="commentLines">
                  <div>
                    <a href="#">user_1234</a>
                    <span>Sample Text</span>
                  </div>
                  <img
                    alt="heart img"
                    className="commentHeart"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                </div>
              </div>
            </div>
            <div className="days">
              <time datetime="20:00"></time>
              <time
                className=""
                datetime="2021-09-10T13:55:10"
                title="2021년 9월 10일"
              >
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
              ></textarea>
              <button className="uploadComment" disabled="true">
                게시
              </button>
            </div>
          </article>
          <aside>
            <div className="aboutMeInSide">
              <img
                alt="personalPictureInFeed"
                className="myImageInSide"
                src="./images/seungkyun/IMG_1113.JPG"
              />
              <div className="aboutMeNames">
                <div>
                  <a>seungkyun_y</a>
                  <a>SEUNGKYUN HONG</a>
                </div>
                <button>전환</button>
              </div>
            </div>
            <div className="personalRecommendHeader">
              <span>회원님을 위한 추천</span>
              <a href="#">모두 보기</a>
            </div>
            <div className="personalRecommendMain">
              <img
                alt=""
                className="recommendForYouPic"
                src="./images/seungkyun/IMG_1455.jpeg"
              />
              <div className="personalRecommendID">
                <div>
                  <a>seungkyun_y</a>
                  <span>회원님을 팔로우합니다</span>
                </div>
                <button>팔로우</button>
              </div>
            </div>
            <footer>
              <p>
                <a href="#">소개</a>﹒<a href="#">도움말</a>﹒
                <a href="#">홍보 센터</a>﹒<a href="#">API</a>﹒
                <a href="#">채용</a>﹒<a href="#">정보</a>﹒
                <a href="#">개인정보관리방침</a>﹒<a href="#">약관</a>﹒
                <a href="#">위치</a>﹒
                <a href="#">인기계정</a>﹒<a href="#">해시태그</a>﹒
                <a href="#">언어</a>
              </p>
              <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
            </footer>
          </aside>
        </main>
      </div>
    );
  }
}

export default Main;
