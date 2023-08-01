import React, { useState } from "react";
import styles from "./AddComments.module.css";
import { useDispatch } from "react-redux";
import {
  addComments,
  changeLookBlockAddComment,
} from "../../../store/reducers/commentSlice";

const AddComments = ({ id }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const sendRequest = () => {
    dispatch(addComments({ data: data, id: id }));
  };

  return (
    <div className={styles.addComments}>
      <div className={styles.addComments__inner}>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <h5>Имя,Никнейм</h5>
        </div>
        <form action="" onSubmit={sendRequest}>
          <input
            type="text"
            onChange={(e) => setData(e.target.value)}
            placeholder="Добавьте комментарий"
          />
          <button type="submit">Добавить</button>
        </form>
        <svg
          onClick={() => dispatch(changeLookBlockAddComment(false))}
          width="35"
          height="35"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.46409 15.5354L15.5352 8.46436"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8.46409 8.46458L15.5352 15.5356"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default AddComments;
