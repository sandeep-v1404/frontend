import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <>
      <section className="footer__section">
        <footer className="footer">
          <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
          </div>
          <ul className="social-icon">
            <li className="social-icon__item">
              <a className="social-icon__link" href="#">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li className="social-icon__item">
              <a className="social-icon__link" href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="social-icon__item">
              <a className="social-icon__link" href="instagram.com">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
          <ul className="menu">
            <li className="menu__item">
              <a className="menu__link" href="#">
                Home
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
                About
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
                Services
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
                Team
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <p>&copy;2021 CauseNFT | All Rights Reserved</p>
        </footer>
      </section>
    </>
  );
};

export default Footer;
