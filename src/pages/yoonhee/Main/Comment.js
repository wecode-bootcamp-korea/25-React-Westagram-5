import React from 'react';

class Comment extends React.Component {
  render() {
    const { innerText } = this.props;
    return <li>{innerText}</li>;
  }
}

export default Comment;
