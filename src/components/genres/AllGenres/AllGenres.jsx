import React, { useEffect, useRef, useState } from "react";
import styles from "./AllGenres.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addAllSortGenres,
  changeGenresLookState,
  deleteAllSortGenres,
} from "../../../store/reducers/genresSlice";

const AllGenres = () => {
  const dispatch = useDispatch();
  const { allGenres } = useSelector((state) => state.genresSlice);

  const inputCheckBox = (id, bool) => {
    if (bool) {
      dispatch(addAllSortGenres(id));
    } else {
      dispatch(deleteAllSortGenres(id));
    }
  };
  return (
    <div className={styles.allGenres}>
      <button onClick={() => dispatch(changeGenresLookState(true))}>
        <svg
          width="17"
          height="28"
          viewBox="0 0 17 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 2L3 14L15 26"
            stroke="#878787"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <p>Назад</p>
      </button>
      <h2>Жанры </h2>
      <ul>
        {allGenres?.map((genre) => (
          <li key={genre.id}>
            <input
              type="checkbox"
              onChange={(e) => inputCheckBox(genre.id, e.target.checked)}
            />
            <p>{genre.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllGenres;
