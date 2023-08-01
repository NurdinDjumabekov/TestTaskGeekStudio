import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./GenresData.module.css";
import SortGenres from "../SortGenres/SortGenres";
import AllGenres from "../AllGenres/AllGenres";
import { toTakeAllGenres } from "../../../store/reducers/genresSlice";

const GenresData = () => {
  const { genresLookState } = useSelector((state) => state.genresSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toTakeAllGenres());
  }, []);
  return (
    <div className={styles.genres}>
      {genresLookState ? <SortGenres /> : <AllGenres />}
      <div className={styles.active_btn}>
        <button>Сбросить</button>
        <button>Применить</button>
      </div>
    </div>
  );
};

export default GenresData;
