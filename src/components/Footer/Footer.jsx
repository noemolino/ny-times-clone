import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__title">NYT Clone</div>
      <div className="footer__text">
        News provided by The New York Times. <br />
        This project is for demonstration purposes only and not affiliated with The New York Times Company.
      </div>
      <div className="footer__copy">
        © 2025 NYT React Clone
      </div>
    </footer>
  );
};

export default Footer;
