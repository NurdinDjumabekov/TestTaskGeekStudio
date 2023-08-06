import React from "react";
import styles from "./AuthUser.module.css";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLookAuth,
  changeStateTypeAuth,
} from "../../../store/reducers/authSlice";
import arrow from "../../../assets/images/Auth/arrow.svg";

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
              <div onClick={() => dispatch(changeLookAuth(false))}>
                <img src={arrow} alt="arrow" />
              </div>
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
