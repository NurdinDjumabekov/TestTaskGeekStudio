import React from "react";
import Footer from "../../components/Footer/Footer";
import GenresData from "../../components/genres/GenresData/GenresData";
import styles from "./MainPage.module.css";
import MangaData from "../../components/MangaData/MangaData";
import NavMenu from "../../components/NavMenu/NavMenu";
import Preloader from "../../components/Preloader/Preloader";
import { useSelector } from "react-redux";

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
