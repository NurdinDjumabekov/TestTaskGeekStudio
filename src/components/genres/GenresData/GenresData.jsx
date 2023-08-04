import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./GenresData.module.css";
import SortGenres from "../SortGenres/SortGenres";
import AllGenres from "../AllGenres/AllGenres";
import { toTakeAllGenres } from "../../../store/reducers/genresSlice";
import { checkSortGenres } from "../../../helpers/checkSortGenres";

const GenresData = () => {
  const { genresLookState, allSortGenres } = useSelector(
    (state) => state.genresSlice
  );
  const { allData } = useSelector((state) => state.mainDataSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toTakeAllGenres());
  }, []);
  const sortGenresData = () => {
    console.log(checkSortGenres(allData, allSortGenres), "nurdin");
  };

  return (
    <div className={styles.genres}>
      {genresLookState ? <SortGenres /> : <AllGenres />}
      <div className={styles.active_btn}>
        <button>Сбросить</button>
        <button onClick={() => sortGenresData()}>Применить</button>
      </div>
    </div>
  );
};

export default GenresData;
