import React from 'react';
import './footer.css';
import imgRsSchool from '../../assets/svg/rs_school_js.svg';
import gitHubLogo from '../../assets/svg/github.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="gitlinks-container">
        <img src={gitHubLogo} alt="" width={20} />
        <a
          className="footer-git-link"
          href="https://github.com/staceysych"
          target="_blank"
          rel="noreferrer"
        >
          Anastasiya
        </a>
        <img src={gitHubLogo} alt="" width={20} />
        <a
          className="footer-git-link"
          href="https://github.com/Metanix777"
          target="_blank"
          rel="noreferrer"
        >
          Ivan
        </a>
        <img src={gitHubLogo} alt="" width={20} />
        <a
          className="footer-git-link"
          href="https://github.com/irinabukley23"
          target="_blank"
          rel="noreferrer"
        >
          Irina
        </a>
        <img src={gitHubLogo} alt="" width={20} />
        <a
          className="footer-git-link"
          href="https://github.com/JMSBRN"
          target="_blank"
          rel="noreferrer"
        >
          Alex
        </a>
      </div>
      <img src={imgRsSchool} alt="rsSchool_Logo.png" width="50" height="20"></img>
      <a
        className="footer-rsSchool-link"
        href="https://rs.school/react/"
        target="_blank"
        rel="noreferrer"
      >
        The Rolling Scopes
      </a>
      <div className="footer-copyright">
        ©<span>2022 q1 react-team</span>
      </div>
    </div>
  );
};
export default Footer;
