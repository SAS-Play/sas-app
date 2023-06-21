import React from 'react';
import Fade from 'react-reveal/Fade';

function Footer() {
  return (
    <footer className="footer">
      <Fade left>
      <div className="footer-text">
        <p>Copyright &copy; 2023 by Soumik Samanta | Anirban Jash | Sutanu Maity [SAS] | | Rights Reserved</p>
      </div>
      </Fade>
      <Fade right>
      <div className="footer-iconTop">
        <a href="#Home"><i className='bx bx-up-arrow-circle'></i></a>
      </div>
      </Fade>
    </footer>
  );
}

export default Footer;
