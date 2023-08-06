import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import facebook from "../../assets/images/footer/Facebook.svg";
import insta from "../../assets/images/footer/Instagramm.svg";
import twitter from "../../assets/images/footer/Twitter.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <div className={styles.footer__logo}>
            <div>
              <img src="/src/assets/images/logo.svg" alt="logo" />
            </div>
            <div>
              <h6>MangoRead</h6>
              <p>Читай мангу с нами</p>
            </div>
          </div>
          <div className={styles.footer__contacts}>
            <div>
              <img src={facebook} alt="" />
              <a href="">Link One</a>
            </div>
            <div>
              <img src={insta} alt="" />
              <a href="">Link Two</a>
            </div>
            <div>
              <img src={twitter} alt="" />
              <a href="">Link Three</a>
            </div>
          </div>
          <div className={styles.footer__address}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.7040230242824!2d74.615768675839!3d42.87909090215336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb794b532a8f1%3A0xcea5bfa3cae816aa!2sVictory!5e0!3m2!1sru!2skg!4v1691149096284!5m2!1sru!2skg"></iframe>
          </div>
        </div>
      </div>
      <ul className={styles.footer__infoSite}>
        <li>
          <NavLink to={"/"}>©2022, All right reserved.</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>Privacy Policy</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>Terms of Service</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>Cookies Settings</NavLink>
        </li>
      </ul>
      <div></div>
    </div>
  );
};

export default Footer;
