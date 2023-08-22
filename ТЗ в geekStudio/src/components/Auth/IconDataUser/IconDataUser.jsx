import React from "react";
import styles from "./IconDataUser.module.css";
import { useDispatch, useSelector } from "react-redux";
import arrow_bottom from "../../../assets/images/Auth/drop_down.svg";
import LogOut from "../LogOut/LogOut";
import { changeLooklogOut } from "../../../store/reducers/authSlice";

const IconDataUser = () => {
  const dispatch = useDispatch();
  const { nameUser, nameImg, looklogOut } = useSelector(
    (state) => state.authSlice
  );

  return (
    <div className={styles.iconDataUser}>
      <div onClick={() => dispatch(changeLooklogOut(!looklogOut))}>
        <p>{nameUser}</p>
        <div className={styles.img_user}>
          <img src={nameImg} alt="userPhoto" />
        </div>
        <div className={looklogOut ? "" : styles.arrow_bottom}>
          <img src={arrow_bottom} alt="down" />
        </div>
      </div>
      {looklogOut && <LogOut />}
    </div>
  );
};

export default IconDataUser;
