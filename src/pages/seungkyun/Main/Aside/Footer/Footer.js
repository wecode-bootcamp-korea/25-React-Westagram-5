// 상수데이터 활용하여 푸터 만들기
import React from 'react';
import FooterList from './FooterList/FooterList';
import FOOTER_LIST from './footerData';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <ul>
          {FOOTER_LIST.map(item => (
            <FooterList key={item.id} name={item.name} link={item.link} />
          ))}
        </ul>
        <span>© 2021 WESTAGRAM FROM FACEBOOK</span>
      </footer>
    );
  }
}

export default Footer;
