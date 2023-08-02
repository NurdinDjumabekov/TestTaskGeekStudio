import React, { useState } from "react";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { sendLoginUser } from "../../../store/reducers/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    userName: "",
    password: "",
  });
  const sendLogin = (e) => {
    e.preventDefault();
    dispatch(
      sendLoginUser({ userName: data.userName, password: data.password })
    );
  };

  return (
    <>
      <form action="" onSubmit={sendLogin}>
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
          placeholder="Password"
          onChange={(e) =>
            setData((info) => ({
              ...info,
              password: e.target.value,
            }))
          }
        />
        <button type="submit">Вход</button>
      </form>
    </>
  );
};

export default Login;
