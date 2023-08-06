import React, { useEffect } from "react";
import styles from "./AllTypes.module.css";
import arrow_rigth from "../../../assets/images/sort/arrow_rigth.svg";

import {
  addAllSortGenres,
  changeAllSortGenres,
  changeGenresLookState,
  deleteAllSortGenres,
} from "../../../store/reducers/genresSlice";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusBool } from "../../../store/reducers/typesSlice";

const AllTypes = () => {
  const dispatch = useDispatch();
  const { allTypes } = useSelector((state) => state.typesSlice);

  useEffect(() => {
    dispatch(changeAllSortGenres([]));
    // как только отрендерится эта компонента, массив для сравнений сразу станет пустым!!!
  }, []);

  const inputCheckBox = (id, title, boolInput) => {
    if (boolInput) {
      dispatch(addAllSortGenres(title));
    } else {
      dispatch(deleteAllSortGenres(title));
    }
    dispatch(changeStatusBool({ id, boolInput }));
  };
  // console.log(allTypes);

  return (
    <div className={styles.AllTypes}>
      <div
        className={styles.sortGenres__inner}
        onClick={() => dispatch(changeGenresLookState(false))}
      >
        <button>Жанры</button>
        <button>
          <p>все</p>
          <img src={arrow_rigth} alt=">" />
        </button>
      </div>
      <h3>Тип</h3>
      <ul>
        {allTypes?.map((type) => (
          <li key={type.id}>
            <input
              type="checkbox"
              onChange={(e) =>
                inputCheckBox(type.id, type.title, e.target.checked)
              }
              checked={type.bool}
            />
            <p>{type.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTypes;
