import React from "react";
import styles from "./IconDataUser.module.css";
import { useSelector } from "react-redux";

const IconDataUser = () => {
  const { nameUser, nameImg } = useSelector((state) => state.authSlice);
  const logOut = () => {
    window.location.reload();
    localStorage.clear();
  };
  return (
    <div className={styles.iconDataUser}>
      <p>{nameUser}</p>
      <div>
        <img src={nameImg} alt="userPhoto" />
      </div>
      <button onClick={() => logOut()}>выйти</button>
    </div>
  );
};

export default IconDataUser;
