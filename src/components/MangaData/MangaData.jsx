import React, { useEffect } from "react";
import styles from "./MangaData.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toTakeAllData } from "../../store/reducers/mainDataSlice";
import { NavLink } from "react-router-dom";

const MangaData = () => {
  const dispatch = useDispatch();
  const { allData } = useSelector((state) => state.mainDataSlice);
  useEffect(() => {
    dispatch(toTakeAllData());
  }, []);
  console.log(allData);
  return (
    <div className={styles.mangaData}>
      {allData?.map((card) => (
        <NavLink key={card.id} to={`/detailed/${card.id}`}>
          <img src={card?.image} alt="картинка" />
          <div>
            <p>Год: {card.issue_year}</p>
            <h4>{card?.ru_name}</h4>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default MangaData;
