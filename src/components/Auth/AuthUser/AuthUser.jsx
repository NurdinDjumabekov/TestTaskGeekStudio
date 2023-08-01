import React from "react";
import styles from "./AuthUser.module.css";

const AuthUser = () => {
  return (
    <div className={styles.authBlock}>
      <button>Войти</button>
      <button>регистрация</button>
    </div>
  );
};

export default AuthUser;
