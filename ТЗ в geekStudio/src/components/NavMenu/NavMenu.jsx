import React from "react";
import styles from "./NavMenu.module.css";
import logo from "../../assets/images/logo.svg";
import SearchData from "../SearchData/SearchData";
import AuthUser from "../Auth/AuthUser/AuthUser";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import IconDataUser from "../Auth/IconDataUser/IconDataUser";
const NavMenu = () => {
  const { nameUser } = useSelector((state) => state.authSlice);
  // console.log(nameUser);

  return (
    <>
      <div className={styles.pushBlock}></div>
      <div className={styles.navMenu}>
        <div className="container">
          <div className={styles.navMenu__inner}>
            <NavLink to={"/"}>
              <div>
                <img src={logo} alt="logo" />
              </div>
              <div>
                <h4>MangoRead</h4>
                <p>Читай мангу с нами</p>
              </div>
            </NavLink>
            <SearchData />
            {nameUser === "" ? <AuthUser /> : <IconDataUser />}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
