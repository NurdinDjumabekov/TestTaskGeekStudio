import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendRegistrationUser } from "../../../store/reducers/authSlice";
import {
  changeExplanationPassword,
  changeExplanationRegistration,
  changeIsDisableBtn,
  changeLookPasswordReg,
  changeRenderEyePasswordReg,
} from "../../../store/reducers/registrationSlice";
import styles from "./Registration.module.css";
import off_eye from "../../../assets/images/Auth/eye-off.svg";
import on_eye from "../../../assets/images/Auth/eye-on.svg";

const Registration = () => {
  const dispatch = useDispatch();
  const btnRef = useRef();
  const {
    explanationRegistration,
    explanationPassword,
    isDisableBtn,
    lookPasswordReg,
    renderEyePasswordReg,
  } = useSelector((state) => state.registrationSLice);

  const [data, setData] = useState({
    userName: "",
    nickName: "",
    password: "",
    img: null,
  });

  const clickBtn = (e) => {
    e.preventDefault();
    btnRef.current.click();
  };

  const sendRegistration = (e) => {
    e.preventDefault();
    dispatch(
      sendRegistrationUser({
        userName: data.userName,
        nickName: data.nickName,
        password: data.password,
        img: data.img,
      })
    );
  };

  const clickNames = (type) => {
    if (type === "on") {
      dispatch(changeExplanationRegistration(true));
    } else if (type === "off") {
      dispatch(changeExplanationRegistration(false));
    }
  };

  const clickPassword = (type) => {
    if (type === "on") {
      dispatch(changeExplanationPassword(true));
    } else if (type === "off") {
      dispatch(changeExplanationPassword(false));
    }
  };

  useEffect(() => {
    if (
      data.userName.length < 60 &&
      data.userName.length > 10 &&
      data.nickName.length < 60 &&
      data.nickName.length > 10 &&
      data.img !== null &&
      data.password.length < 40 &&
      data.password.length > 8
    ) {
      dispatch(changeIsDisableBtn(true));
      console.log("tryui");
    } else {
      dispatch(changeIsDisableBtn(false));
    }
  }, [data]);

  useEffect(() => {
    if (data.password === "") {
      dispatch(changeRenderEyePasswordReg(false));
      clickPassword("off");
    } else {
      dispatch(changeRenderEyePasswordReg(true));
      clickPassword("on");
    }
  }, [data.password]);

  return (
    <div className={styles.registrationParent}>
      <form action="" onSubmit={sendRegistration}>
        <label ref={btnRef} className={styles.labelForImg}>
          <img
            src={
              data.img === null
                ? "/src/assets/images/Auth/download.jpg"
                : URL.createObjectURL(data?.img)
            }
            alt="user"
          />
          <input
            type="file"
            required
            onChange={(e) =>
              setData((info) => ({
                ...info,
                img: e.target.files[0],
              }))
            }
          />
          <button onClick={clickBtn}>ДОБАВИТЬ ФОТО</button>
        </label>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) =>
            setData((info) => ({
              ...info,
              userName: e.target.value,
            }))
          }
          required
          onBlur={() => clickNames("off")}
          onFocus={() => clickNames("on")}
        />
        <input
          type="text"
          placeholder="Nickname"
          onChange={(e) =>
            setData((info) => ({
              ...info,
              nickName: e.target.value,
            }))
          }
          required
          onBlur={() => clickNames("off")}
          onFocus={() => clickNames("on")}
        />
        {explanationRegistration && (
          <label className={styles.emptyInput__names}>
            Nickname и Username должны содержать от 10ти до 60ти символов
          </label>
        )}
        <label className={styles.passwordLook_registration}>
          <input
            type={lookPasswordReg ? "text" : "password"}
            placeholder="Password"
            onChange={(e) =>
              setData((info) => ({
                ...info,
                password: e.target.value,
              }))
            }
            required
            // onBlur={() => clickPassword("off")}
            onFocus={() => clickPassword("on")}
          />
          {renderEyePasswordReg && (
            <>
              {lookPasswordReg ? (
                <img
                  src={on_eye}
                  onClick={() => dispatch(changeLookPasswordReg(false))}
                  alt="eye"
                />
              ) : (
                <img
                  src={off_eye}
                  onClick={() => dispatch(changeLookPasswordReg(true))}
                  alt="eye"
                />
              )}
            </>
          )}
        </label>
        {explanationPassword && (
          <label className={styles.emptyInput__password}>
            пароль должен содержать от 8ти до 40ти символов
          </label>
        )}
        <button
          className={isDisableBtn ? "" : styles.disableBtn}
          disabled={!isDisableBtn}
          type="submit"
        >
          регистрация
        </button>
      </form>
    </div>
  );
};

export default Registration;
