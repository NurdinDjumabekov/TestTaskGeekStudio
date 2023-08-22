import React, { useEffect } from "react";
import DataGenresTypes from "../../components/genres/DataGenresTypes/DataGenresTypes";
import styles from "./MainPage.module.css";
import MangaData from "../../components/MangaData/MangaData";
import Pagination from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  changePaginationCards,
  toTakeAllData,
} from "../../store/reducers/mainDataSlice";
import {
  clearAlltypes,
  toTakeAllDataForSort,
} from "../../store/reducers/typesSlice";
import { clearAllGenres } from "../../store/reducers/genresSlice";

const MainPage = () => {
  const dispatch = useDispatch();
  const { limit, offset, allPage } = useSelector(
    (state) => state.mainDataSlice
  );

  useEffect(() => {
    dispatch(toTakeAllData({ limit: limit, offset: offset }));
    dispatch(toTakeAllDataForSort());
  }, [offset]);
  useEffect(() => {
    // при появлении компоненты всё сбрасывается
    dispatch(toTakeAllData({ limit: limit, offset: offset }));
    dispatch(toTakeAllDataForSort());
    dispatch(clearAlltypes());
    dispatch(clearAllGenres());
    dispatch(changePaginationCards(1));
  }, []);
  return (
    <div className={styles.mainPage__parent}>
      <div className="container">
        <div className={styles.mainPage__inner}>
          <DataGenresTypes />
          <MangaData />
        </div>
        <Pagination allPage={Math.ceil(allPage / 12)} />
        {/* для округления числа в большую сторону */}
      </div>
    </div>
  );
};

export default MainPage;
