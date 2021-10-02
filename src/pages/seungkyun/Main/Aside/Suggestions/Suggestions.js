import React from 'react';
import SuggestionContents from './SuggestionContents/SuggestionContents';
import './Suggestions.scss';

class Suggestions extends React.Component {
  render() {
    return (
      <div className="suggestion_wrapper">
        <div className="suggestion_header">
          <span>회원님을 위한 추천</span>
          <a href="#">모두 보기</a>
        </div>
        {this.props.contents.map(item => {
          const { id, username, status, userimg, link } = item;
          return (
            <SuggestionContents
              key={id}
              username={username}
              status={status}
              userimg={userimg}
              link={link}
            />
          );
        })}
      </div>
    );
  }
}

export default Suggestions;
