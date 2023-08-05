import React, { useEffect } from "react";
import GenresData from "../../components/genres/GenresData/GenresData";
import styles from "./MainPage.module.css";
import MangaData from "../../components/MangaData/MangaData";
import Pagination from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { toTakeAllData } from "../../store/reducers/mainDataSlice";
import { toTakeAllDataForSort } from "../../store/reducers/genresSlice";

const MainPage = () => {
  const dispatch = useDispatch();

  const { limit, offset, allPage } = useSelector(
    (state) => state.mainDataSlice
  );
  // const { dataForSort } = useSelector((state) => state.genresSlice);

  useEffect(() => {
    dispatch(toTakeAllData({ limit: limit, offset: offset }));
    // dispatch(toTakeAllDataForSort());
  }, [offset]);
  // console.log(Math.ceil(dataForSort.length / 12)); // для округления числа  большую сторону
  console.log(allPage);
  return (
    <>
      <div className="container">
        <div className={styles.mainPage__inner}>
          <GenresData />
          <MangaData />
        </div>
        <Pagination allPage={Math.ceil(allPage / 12)} />
      </div>
    </>
  );
};

export default MainPage;
