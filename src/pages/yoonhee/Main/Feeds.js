import React from 'react';
import Feed from './Feed';

class Feeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
    };
  }

  componentDidMount() {
    fetch('/data/feed.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ feeds: data });
      });
  }

  render() {
    const { feeds } = this.state;
    return (
      <div className="feeds">
        {feeds.map(feed => (
          <Feed key={feed.id} img={feed.img} text={feed.text} />
        ))}
      </div>
    );
  }
}

export default Feeds;
