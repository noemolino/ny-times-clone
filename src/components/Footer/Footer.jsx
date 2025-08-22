import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} NYT React Clone.</p>
      <p>News provided by The New York Times.</p>
      <p>This project is for demonstration purposes only and not affiliated with The New York Times Company.</p>
    </footer>
  );
};

export default Footer;
