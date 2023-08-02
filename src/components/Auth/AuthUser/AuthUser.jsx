import React from "react";
import styles from "./AuthUser.module.css";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLookAuth,
  changeStateTypeAuth,
} from "../../../store/reducers/authSlice";

const AuthUser = () => {
  const { lookAuth, stateTypeAuth } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();

  const appearanceModal = (type) => {
    if ((type = 1)) {
      dispatch(changeLookAuth(true));
    } else {
      dispatch(changeStateTypeAuth(true));
      dispatch(changeLookAuth(true));
    }
  };
  return (
    <>
      <div className={styles.authBlock}>
        <button onClick={() => appearanceModal(1)}>Войти</button>
        <button onClick={() => appearanceModal(2)}>регистрация</button>
      </div>
      {lookAuth && (
        <>
          <div
            className={styles.registration_shadow}
            onClick={() => dispatch(changeLookRegistration(false))}
          ></div>
          <div className={styles.registration__parent}>
            <div className={styles.block_push}>
              <svg
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => dispatch(changeLookAuth(false))}
              >
                <line
                  x1="21.2131"
                  y1="2.12132"
                  x2="2.12125"
                  y2="21.2132"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="1.5"
                  y1="-1.5"
                  x2="28.5"
                  y2="-1.5"
                  transform="matrix(0.707107 0.707107 0.707107 -0.707107 2.21313 0)"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <button
                className={stateTypeAuth ? styles.active_btn : ""}
                onClick={() => dispatch(changeStateTypeAuth(true))}
              >
                Вход
              </button>
              <button
                className={stateTypeAuth ? "" : styles.active_btn}
                onClick={() => dispatch(changeStateTypeAuth(false))}
              >
                Регистрация
              </button>
            </div>
            {stateTypeAuth ? <Login /> : <Registration />}
          </div>
        </>
      )}
    </>
  );
};

export default AuthUser;
