import React, { useEffect } from "react";
import DataGenresTypes from "../../components/genres/DataGenresTypes/DataGenresTypes";
import styles from "./MainPage.module.css";
import MangaData from "../../components/MangaData/MangaData";
import Pagination from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { toTakeAllData } from "../../store/reducers/mainDataSlice";
import { toTakeAllDataForSort } from "../../store/reducers/typesSlice";

const MainPage = () => {
  const dispatch = useDispatch();

  const { limit, offset, allPage } = useSelector(
    (state) => state.mainDataSlice
  );
  // const { dataForSort } = useSelector((state) => state.typesSlice);

  useEffect(() => {
    dispatch(toTakeAllData({ limit: limit, offset: offset }));
    // dispatch(toTakeAllDataForSort());
  }, [offset]);
  // console.log(Math.ceil(dataForSort.length / 12)); // для округления числа в большую сторону
  // console.log(allPage);
  return (
    <div className={styles.mainPage__parent}>
      <div className="container">
        <div className={styles.mainPage__inner}>
          <DataGenresTypes />
          <MangaData />
        </div>
        <Pagination allPage={Math.ceil(allPage / 12)} />
      </div>
    </div>
  );
};

export default MainPage;
