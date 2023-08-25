import React from "react";
import styles from "./EverySelect.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cahngeAllSelects } from "../../store/reducers/mainPageSlice";
import DataEverySelect from "../DataEverySelect/DataEverySelect";

const EverySelect = ({ data, allSelects }) => {
  const dispatch = useDispatch();
  // console.log(data);
  const changeSelect = (id) => {
    let newData = allSelects?.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          is_premier_league: !item.is_premier_league,
        };
      } else {
        return {
          ...item,
          is_premier_league: false,
        };
      }
    });
    dispatch(cahngeAllSelects(newData));
  };

  return (
    <>
      <div>
        <div
          className={styles.everySelect}
          onClick={() => changeSelect(data.id)}
        >
          <div className={styles.everySelect__inner}>
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="right"
              width="0.8em"
              height="0.8em"
              fill="currentColor"
              aria-hidden="true"
              className={data.is_premier_league ? styles.active_arrow : ""}
            >
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
            <h2 className={styles.everySelect__title}>{data.title}</h2>
          </div>
        </div>
      </div>
      {data.is_premier_league && <DataEverySelect id={data.id} />}
    </>
  );
};

export default EverySelect;
