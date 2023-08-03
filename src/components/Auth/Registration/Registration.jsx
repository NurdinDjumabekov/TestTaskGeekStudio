import React, { useRef, useState } from "react";
import styles from "./Registration.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sendRegistrationUser } from "../../../store/reducers/authSlice";

const Registration = () => {
  const dispatch = useDispatch();
  const btnRef = useRef();
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
    // console.log(data.img);
  };
  return (
    <div>
      <form action="" onSubmit={sendRegistration}>
        <label>
          <img src="/src/assets/images/Auth/i_am.jpg" alt="" />
          <input
            type="file"
            ref={btnRef}
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
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) =>
            setData((info) => ({
              ...info,
              password: e.target.value,
            }))
          }
        />
        <button type="submit">регистрация</button>
      </form>
    </div>
  );
};

export default Registration;
