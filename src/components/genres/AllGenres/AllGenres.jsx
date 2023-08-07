import React, { useEffect, useRef, useState } from "react";
import styles from "./AllGenres.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addAllSortGenres,
  changeGenresLookState,
  changeStatusBoolGenres,
  deleteAllSortGenres,
} from "../../../store/reducers/genresSlice";
import arrow_left from "../../../assets/images/sort/arrow_left.svg";

const AllGenres = () => {
  const dispatch = useDispatch();
  const { allGenres } = useSelector((state) => state.genresSlice);

  const inputCheckBox = (id, boolInput) => {
    if (boolInput) {
      dispatch(addAllSortGenres(id));
    } else {
      dispatch(deleteAllSortGenres(id));
    }
    dispatch(changeStatusBoolGenres({ id, boolInput }));
  };
  return (
    <div className={styles.allGenres}>
      <button onClick={() => dispatch(changeGenresLookState(true))}>
        <img src={arrow_left} alt="<" />
        <p>Назад</p>
      </button>
      <h2>Жанры </h2>
      <ul>
        {allGenres?.map((genre) => (
          <li key={genre.id}>
            <input
              type="checkbox"
              onChange={(e) => inputCheckBox(genre.id, e.target.checked)}
              checked={genre.bool}
            />
            <p>{genre.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllGenres;
