import React from 'react';

class Recommend extends React.Component {
  render() {
    const { nickname, img } = this.props;
    return (
      <li>
        <div className="user main-right__user2">
          <div className="user-and-botton">
            <img
              className="user__img user__img--brder-red"
              alt={nickname}
              src={img}
            />
            <div className="user-id2">
              <div className="user__id">{nickname}</div>
              <div className="text--gray">한국어한국어한국어</div>
            </div>
          </div>
          <button className="btn btn--hover nnn">팔로우</button>
        </div>
      </li>
    );
  }
}

export default Recommend;
