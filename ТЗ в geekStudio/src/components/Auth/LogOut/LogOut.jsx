import React from "react";
import styles from "./LogOut.module.css";
import { useDispatch } from "react-redux";
import { changeLooklogOut } from "../../../store/reducers/authSlice";

const LogOut = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    window.location.reload();
    localStorage.clear();
    dispatch(changeLooklogOut(false));
  };
  return (
    <div className={styles.logOut_parent}>
      <button onClick={() => logOut()}>выйти</button>
    </div>
  );
};

export default LogOut;
