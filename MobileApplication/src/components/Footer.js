import React from 'react';

const Footer = () => (
  <footer className="footer">
    <p>
      © {new Date().getFullYear()} ANDI Software Solutions. All rights reserved.
    </p>
    <p>
      Built with React & Express • Contact:&nbsp;
      <a href="mailto:devi.shivani.05.10@gmail.com">
        devi.shivani.05.10@gmail.com
      </a>
    </p>
  </footer>
);

export default Footer;
