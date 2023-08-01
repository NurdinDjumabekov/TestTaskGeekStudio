import React from "react";
import styles from "./NavMenu.module.css";
import logo from "../../assets/images/logo.svg";
import SearchData from "../SearchData/SearchData";
import AuthUser from "../Auth/AuthUser/AuthUser";
import { NavLink } from "react-router-dom";
const NavMenu = () => {
  return (
    <div className={styles.navMenu}>
      <div className="container">
        <div className={styles.navMenu__inner}>
          <NavLink to={"/"}>
            <div>
              <img src={logo} alt="" />
            </div>
            <div>
              <h4>MangoRead</h4>
              <p>Читай мангу с нами</p>
            </div>
          </NavLink>
          <SearchData />
          <AuthUser />
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
