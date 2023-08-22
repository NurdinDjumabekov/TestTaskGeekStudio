import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sendLoginUser } from "../../../store/reducers/authSlice";
import off_eye from "../../../assets/images/Auth/eye-off.svg";
import on_eye from "../../../assets/images/Auth/eye-on.svg";
import {
  changeLookPasswordLogin,
  changeRenderEyePassword,
} from "../../../store/reducers/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    userName: "",
    password: "",
  });

  const { ifLoginError, lookPasswordLogin, renderEyePassword } = useSelector(
    (state) => state.loginSLice
  );

  const sendLogin = (e) => {
    e.preventDefault();
    dispatch(
      sendLoginUser({ userName: data.userName, password: data.password })
    );
  };

  useEffect(() => {
    if (data.password === "") {
      dispatch(changeRenderEyePassword(false));
    } else {
      dispatch(changeRenderEyePassword(true));
    }
  }, [data.password]);

  return (
    <>
      <div className={styles.parentLogin}>
        <form action="" onSubmit={sendLogin}>
          <input
            type="text"
            placeholder="Username"
            required
            onChange={(e) =>
              setData((info) => ({
                ...info,
                userName: e.target.value,
              }))
            }
          />
          <label className={styles.passwordLook_login}>
            <input
              type={lookPasswordLogin ? "text" : "password"}
              placeholder="Password"
              required
              onChange={(e) =>
                setData((info) => ({
                  ...info,
                  password: e.target.value,
                }))
              }
            />
            {renderEyePassword && (
              <>
                {lookPasswordLogin ? (
                  <img
                    src={on_eye}
                    onClick={() => dispatch(changeLookPasswordLogin(false))}
                    alt="eye"
                  />
                ) : (
                  <img
                    src={off_eye}
                    onClick={() => dispatch(changeLookPasswordLogin(true))}
                    alt="eye"
                  />
                )}
              </>
            )}
          </label>
          {ifLoginError && (
            <label className={styles.loginError}>
              неверный логин или пароль!!!
            </label>
          )}
          <button type="submit">Вход</button>
        </form>
      </div>
    </>
  );
};

export default Login;
