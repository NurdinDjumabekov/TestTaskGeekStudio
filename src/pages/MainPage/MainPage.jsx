import React from "react";
import GenresData from "../../components/genres/GenresData/GenresData";
import styles from "./MainPage.module.css";
import MangaData from "../../components/MangaData/MangaData";

const MainPage = () => {
  return (
    <>
      <div className="container">
        <div className={styles.mainPage__inner}>
          <GenresData />
          <MangaData />
        </div>
      </div>
    </>
  );
};

export default MainPage;
