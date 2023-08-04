import React from "react";
import styles from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={styles.parent_preloader}>
      <div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
};

export default Preloader;
