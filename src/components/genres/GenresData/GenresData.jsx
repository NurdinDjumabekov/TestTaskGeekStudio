import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./GenresData.module.css";
import AllGenres from "../AllGenres/AllGenres";
import {
  changeAllDataForSort,
  changeGenresLookState,
  toTakeAllDataForSort,
  toTakeAllGenres,
} from "../../../store/reducers/genresSlice";
import { checkSortGenres } from "../../../helpers/checkSortGenres";
import {
  changeAllData,
  toTakeAllData,
} from "../../../store/reducers/mainDataSlice";
import { sortTypeData } from "../../../helpers/sortTypeData";
import SortTypes from "../SortGenres/SortTypes";

const GenresData = () => {
  const dispatch = useDispatch();
  const { dataForSort, genresLookState, allSortGenres } = useSelector(
    (state) => state.genresSlice
  );
  useEffect(() => {
    dispatch(toTakeAllGenres());
  }, []);

  const sortData = (type) => {
    dispatch(toTakeAllDataForSort());
    if (type === "AllGenres") {
      dispatch(changeAllData(checkSortGenres(dataForSort, allSortGenres)));
    } else if (type === "SortType") {
      dispatch(changeAllData(sortTypeData(dataForSort, allSortGenres)));
    }
    // console.log(type);
  };
  const clearSordgenres = () => {
    // dispatch(toTakeAllData());
    // dispatch(changeAllDataForSort());
    dispatch(changeGenresLookState(true));
    // setTimeout(() => {
    //   dispatch(changeGenresLookState(false));
    // }, 100);
  };

  return (
    <div className={styles.genres}>
      {genresLookState ? <SortTypes /> : <AllGenres />}
      <div className={styles.active_btn}>
        <button onClick={() => clearSordgenres()}>Сбросить</button>
        <button
          onClick={() =>
            sortData(genresLookState === true ? "SortType" : "AllGenres")
          }
        >
          Применить
        </button>
      </div>
    </div>
  );
};

export default GenresData;
