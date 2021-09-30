import React from 'react';

class Story extends React.Component {
  render() {
    const { nickname, img } = this.props;
    return (
      <li>
        <div className="user main-right__user">
          <img
            className="user__img user__img--brder-red"
            alt={nickname}
            src={img}
          />
          <div className="user-id2">
            <div className="user__id">{nickname}</div>
            <div className="text--gray">2시간 전</div>
          </div>
        </div>
      </li>
    );
  }
}

export default Story;
