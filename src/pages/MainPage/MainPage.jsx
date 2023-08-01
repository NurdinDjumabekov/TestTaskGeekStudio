import React from "react";
import Footer from "../../components/Footer/Footer";
import GenresData from "../../components/genres/GenresData/GenresData";
import styles from "./MainPage.module.css";
import MangaData from "../../components/MangaData/MangaData";
import NavMenu from "../../components/NavMenu/NavMenu";

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
