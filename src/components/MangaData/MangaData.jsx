import React, { useEffect } from "react";
import styles from "./MangaData.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toTakeAllData } from "../../store/reducers/mainDataSlice";
import { NavLink } from "react-router-dom";
import Preloader from "../Preloaders/Preloader/Preloader";
import { toTakeAllDataForSort } from "../../store/reducers/genresSlice";

const MangaData = () => {
  const dispatch = useDispatch();
  const { preloaderState, allData } = useSelector(
    (state) => state.mainDataSlice
  );

  useEffect(() => {
    dispatch(toTakeAllData());
    dispatch(toTakeAllDataForSort());
  }, []);
  console.log(allData, "allData");
  return (
    <>
      {preloaderState ? (
        <div className={styles.mangaData}>
          {allData.length === 0 ? (
            <p className={styles.no_text}>Список пустой</p>
          ) : (
            allData?.map((card) => (
              <NavLink key={card.id} to={`/detailed/${card.id}`}>
                <img src={card?.image} alt="картинка" />
                <div>
                  <p>Год: {card.issue_year}</p>
                  <h4>{card?.ru_name}</h4>
                </div>
              </NavLink>
            ))
          )}
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default MangaData;
