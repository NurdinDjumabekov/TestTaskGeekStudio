import React, { useState } from "react";
import styles from "./AddComments.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addComments,
  changeLookBlockAddComment,
} from "../../../store/reducers/commentSlice";
import { toTakeDetailedData } from "../../../store/reducers/mainDataSlice";
import cross from "../../../assets/images/comments/cros.svg";

const AddComments = ({ id }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const { access } = useSelector((state) => state.authSlice);
  const sendRequest = (e) => {
    e.preventDefault();
    dispatch(addComments({ data: data, id: id, access: access }));
    dispatch(changeLookBlockAddComment(false));
    dispatch(toTakeDetailedData(id));
  };
  const { nameUser, nameImg } = useSelector((state) => state.authSlice);

  return (
    <>
      <div
        className={styles.shadow_block}
        onClick={() => dispatch(changeLookBlockAddComment(false))}
      ></div>
      <div className={styles.addComments}>
        <div className={styles.addComments__inner}>
          <div>
            <div>
              <img src={nameImg} alt="пользователь" />
            </div>
            <h5>{nameUser}</h5>
          </div>
          <form action="" onSubmit={sendRequest}>
            <input
              type="text"
              onChange={(e) => setData(e.target.value)}
              placeholder="Добавьте комментарий"
            />
            <button type="submit">Добавить</button>
          </form>
          <div
            className={styles.cross_block}
            onClick={() => dispatch(changeLookBlockAddComment(false))}
          >
            <img src={cross} alt="x" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddComments;
