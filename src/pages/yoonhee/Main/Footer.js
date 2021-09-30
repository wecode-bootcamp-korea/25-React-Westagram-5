import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="text--gray">
          {FOOT_LIST.map(link => {
            return (
              <a key={link.id} href={link.link}>
                {link.content}&nbsp;
              </a>
            );
          })}
        </div>
        <div className="text--gray">저작권입니다</div>
      </footer>
    );
  }
}

const FOOT_LIST = [
  { id: 0, link: 'https://www.naver.com/', content: 'hiohi' },
  { id: 1, link: 'sdrsdsdsdsdsdsd', content: 'hiohi' },
  { id: 2, link: 'sdrsdsdsdsdsdsd', content: 'hiohi' },
  { id: 3, link: 'sdrsdsdsdsdsdsd', content: 'hiohi' },
  { id: 4, link: 'sdrsdsdsdsdsdsd', content: 'hiohi' },
  { id: 5, link: 'sdrsdsdsdsdsdsd', content: 'hiohi' },
  { id: 6, link: 'sdrsdsdsdsdsdsd', content: 'hiohi' },
  { id: 7, link: 'sdrsdsdsdsdsdsd', content: 'hiohi' },
];

export default Footer;
