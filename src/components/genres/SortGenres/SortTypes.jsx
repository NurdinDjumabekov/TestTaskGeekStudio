import React, { useEffect } from "react";
import styles from "./SortGenres.module.css";
import {
  addAllSortGenres,
  changeAllSortGenres,
  changeGenresLookState,
  deleteAllSortGenres,
} from "../../../store/reducers/genresSlice";
import { useDispatch } from "react-redux";

const SortTypes = () => {
  const dispatch = useDispatch();
  const arr = [
    { id: 1, title: "Манга" },
    { id: 2, title: "Манхва" },
    { id: 3, title: "Комиксы" },
    { id: 4, title: "Маньхуа" },
  ];
  useEffect(() => {
    dispatch(changeAllSortGenres([]));
    // как только отрендерится эта компонента, массив для сравнений сразу станет пустым!!!
  }, []);

  const inputCheckBox = (title, bool) => {
    if (bool) {
      dispatch(addAllSortGenres(title));
    } else {
      dispatch(deleteAllSortGenres(title));
    }
  };
  return (
    <div className={styles.sortGenres}>
      <div
        className={styles.sortGenres__inner}
        onClick={() => dispatch(changeGenresLookState(false))}
      >
        <button>Жанры</button>
        <button>
          <p>все</p>
          <svg
            width="15"
            height="23"
            viewBox="0 0 15 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.92806 1.5L12 11.5L1.92806 21.5"
              stroke="#878787"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <h3>Тип</h3>
      <ul>
        {arr?.map((type) => (
          <li key={type.id}>
            <input
              type="checkbox"
              onChange={(e) => inputCheckBox(type.title, e.target.checked)}
            />
            <p>{type.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortTypes;
