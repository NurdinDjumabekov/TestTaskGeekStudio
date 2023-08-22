import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./DataGenresTypes.module.css";
import AllGenres from "../AllGenres/AllGenres";
import AllTypes from "../AllTypes/AllTypes";
import {
  clearAllGenres,
  toTakeAllGenres,
} from "../../../store/reducers/genresSlice";
import { checkSortGenres } from "../../../helpers/checkSortGenres";
import {
  changeAllData,
  changeAllPage,
  changePaginationCards,
  toTakeAllData,
} from "../../../store/reducers/mainDataSlice";
import { sortTypeData } from "../../../helpers/sortTypeData";
import {
  clearAlltypes,
  toTakeAllDataForSort,
} from "../../../store/reducers/typesSlice";
////////////////////////////импорты///////////////////////////////

const DataGenresTypes = () => {
  const dispatch = useDispatch();
  const { allData } = useSelector((state) => state.mainDataSlice);
  const { allTypes } = useSelector((state) => state.typesSlice);
  const { genresLookState, allSortGenres, allGenres } = useSelector(
    (state) => state.genresSlice
  );
  const { dataForSort } = useSelector((state) => state.typesSlice);

  useEffect(() => {
    dispatch(toTakeAllGenres()); // беру все жанры с запроса
  }, []);
  // console.log(allGenres, "allGenres");

  const sortData = (type) => {
    dispatch(changePaginationCards(1)); // когда сортируем, то страница всегда на первой
    dispatch(toTakeAllDataForSort()); // вызов функции для сравнения двух данных
    dispatch(changeAllPage(allData.length)); /// кол-во страниц
    if (type === "AllGenres") {
      clickOnSortGenres();
    } else if (type === "SortType") {
      clickOnSortTypes();
    }
  };

  const clearSordgenres = () => {
    const allBoolsAreFalseTypes = allTypes.every((item) => item.bool === false); // if все bool равны false , то возвращает true
    if (!allBoolsAreFalseTypes) {
      // if есть true в types(checkBox) , то работает всё что ниже,else не работает
      dispatch(clearAlltypes()); // очистка всех типов
      dispatch(toTakeAllData({ limit: 12, offset: 0 })); // для отображения всех данных
      dispatch(toTakeAllDataForSort()); // вызов функции для сравнения двух данных(чтобы сравнительный список бл полным)
    }
    const allBoolsAreFalseGenre = allGenres.every(
      (item) => item.bool === false
    ); // if все bool равны false , то возвращает true
    if (!allBoolsAreFalseGenre) {
      // if есть true в genres(checkBox) , то работает всё что ниже,else не работает
      dispatch(clearAllGenres()); // очистка всех типов
      dispatch(toTakeAllData({ limit: 12, offset: 0 })); // для отображения всех данных
      dispatch(toTakeAllDataForSort()); // вызов функции для сравнения двух данных(чтобы сравнительный список бл полным)
    }
  };

  const clickOnSortGenres = () => {
    dispatch(changeAllData(checkSortGenres(dataForSort, allSortGenres))); // сортирует жанры и возвращает сорт данные
    const allBoolsAreFalse = allGenres.every((item) => item.bool === false); // if все bool равны false , то возвращает true
    const allBoolsAreTrue = allGenres.every((item) => item.bool === true); // if все bool равны trye , то возвращает true
    if (allBoolsAreFalse || allBoolsAreTrue) {
      dispatch(toTakeAllData({ limit: 12, offset: 0 })); // для отображения всех данных
      dispatch(toTakeAllDataForSort()); // вызов функции для сравнения двух данных(чтобы сравнительный список был полным)
    }
  };

  const clickOnSortTypes = () => {
    dispatch(changeAllData(sortTypeData(dataForSort, allSortGenres))); // сортирует типы и возвращает сорт данные
    const allBoolsAreFalse = allTypes.every((item) => item.bool === false); // if все bool равны false , то возвращает true
    const allBoolsAreTrue = allTypes.every((item) => item.bool === true); // if все bool равны trye , то возвращает true
    if (allBoolsAreFalse || allBoolsAreTrue) {
      dispatch(toTakeAllData({ limit: 12, offset: 0 })); // для отображения всех данных
      dispatch(toTakeAllDataForSort()); // вызов функции для сравнения двух данных(чтобы сравнительный список был полным)
    }
  };

  return (
    <div className={styles.data}>
      {genresLookState ? <AllTypes /> : <AllGenres />}
      <div className={styles.active_btn}>
        <button onClick={clearSordgenres}>Сбросить</button>
        <button
          onClick={() => sortData(genresLookState ? "SortType" : "AllGenres")}
        >
          Применить
        </button>
      </div>
    </div>
  );
};

export default DataGenresTypes;
